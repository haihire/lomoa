import { NextRequest } from "next/server";
import { cookies } from "next/headers";

const NEST_API = process.env.NEST_API_URL ?? "http://localhost:3001";

export const dynamic = "force-dynamic";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ table: string }> },
) {
  const { table } = await params;
  if (table !== "users" && table !== "sites") {
    return new Response("invalid table", { status: 400 });
  }

  const store = await cookies();
  const session = store.get("admin_token")?.value ?? "";
  if (!session) {
    return new Response("unauthorized", { status: 401 });
  }

  const upstream = await fetch(
    `${NEST_API}/api/admin/sync/${table}/export`,
    { headers: { "x-admin-session": session } },
  );

  if (!upstream.ok) {
    const text = await upstream.text().catch(() => "");
    return new Response(text || "upstream error", { status: upstream.status });
  }

  return new Response(upstream.body, {
    status: 200,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
