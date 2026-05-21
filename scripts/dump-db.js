import fs from "fs";
import path from "path";
import { Client } from "pg";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "dump.sql");

const client = new Client({
  connectionString:
    process.env.DATABASE_URL ??
    "postgresql://daloa:change_me_user@127.0.0.1:5432/lost_ark",
});

function literal(value) {
  if (value === null || value === undefined) return "NULL";
  if (typeof value === "number") return String(value);
  if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
  if (value instanceof Date) return `'${value.toISOString()}'`;
  return `'${String(value).replace(/'/g, "''")}'`;
}

async function dump() {
  await client.connect();

  const tableResult = await client.query(`
    SELECT tablename
    FROM pg_tables
    WHERE schemaname = 'public'
    ORDER BY tablename
  `);

  let sql = "BEGIN;\n\n";

  for (const { tablename } of tableResult.rows) {
    console.log(`Dumping ${tablename}...`);
    const rows = await client.query(`SELECT * FROM "${tablename}"`);
    if (rows.rows.length === 0) continue;

    const cols = rows.fields.map((field) => `"${field.name}"`).join(", ");
    const chunkSize = 200;
    for (let i = 0; i < rows.rows.length; i += chunkSize) {
      const chunk = rows.rows.slice(i, i + chunkSize);
      const values = chunk
        .map((row) => `(${rows.fields.map((field) => literal(row[field.name])).join(", ")})`)
        .join(",\n  ");
      sql += `INSERT INTO "${tablename}" (${cols}) VALUES\n  ${values}\nON CONFLICT DO NOTHING;\n\n`;
    }
  }

  sql += "COMMIT;\n";
  fs.writeFileSync(OUT, sql, "utf8");
  console.log(
    `\nDone: ${OUT} (${(fs.statSync(OUT).size / 1024 / 1024).toFixed(2)} MB)`,
  );
  await client.end();
}

dump().catch(async (error) => {
  console.error(error);
  await client.end().catch(() => undefined);
  process.exit(1);
});
