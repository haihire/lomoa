import { Client } from 'pg';

const DATABASE_URL =
  process.env.DATABASE_URL ??
  'postgresql://testuser:testpass@127.0.0.1:5432/testdb';

const TEST_SITES = [
  {
    name: '로스트아크 인벤',
    href: 'https://lostark.inven.co.kr/',
    description: '로아 커뮤니티',
  },
  {
    name: 'LOALAB',
    href: 'https://lo4.app/',
    description: '재련, 경매, 치명타 계산기 통합 툴',
  },
  {
    name: '사사게 검색기',
    href: 'https://sasagefind.com/',
    description: '데이터베이스',
  },
  {
    name: '로스트아크 공식',
    href: 'https://lostark.game.onstove.com/',
    description: '공식 공지와 이벤트 제공',
  },
];

describe('Korean encoding integration test for PostgreSQL', () => {
  let client: Client;

  beforeAll(async () => {
    client = new Client({ connectionString: DATABASE_URL });
    await client.connect();
    await client.query(`
      CREATE TABLE IF NOT EXISTS loa_sites_enc_test (
        seq SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        href VARCHAR(500) NOT NULL,
        description VARCHAR(200),
        is_active BOOLEAN NOT NULL DEFAULT TRUE
      )
    `);
  });

  afterAll(async () => {
    await client.query('DROP TABLE IF EXISTS loa_sites_enc_test');
    await client.end();
  });

  beforeEach(async () => {
    await client.query('DELETE FROM loa_sites_enc_test');
  });

  it('round-trips one Korean row', async () => {
    const site = TEST_SITES[0];
    await client.query(
      'INSERT INTO loa_sites_enc_test (name, href, description) VALUES ($1, $2, $3)',
      [site.name, site.href, site.description],
    );

    const rows = await client.query(
      'SELECT name, description FROM loa_sites_enc_test WHERE href = $1',
      [site.href],
    );

    expect(rows.rows).toHaveLength(1);
    expect(rows.rows[0].name).toBe(site.name);
    expect(rows.rows[0].description).toBe(site.description);
  });

  it('round-trips multiple Korean rows', async () => {
    for (const site of TEST_SITES) {
      await client.query(
        'INSERT INTO loa_sites_enc_test (name, href, description) VALUES ($1, $2, $3)',
        [site.name, site.href, site.description],
      );
    }

    const rows = await client.query(
      'SELECT name, href, description FROM loa_sites_enc_test ORDER BY seq',
    );

    expect(rows.rows).toHaveLength(TEST_SITES.length);
    for (let i = 0; i < TEST_SITES.length; i += 1) {
      expect(rows.rows[i].name).toBe(TEST_SITES[i].name);
      expect(rows.rows[i].description).toBe(TEST_SITES[i].description);
    }
  });

  it('does not return repeated question mark mojibake', async () => {
    for (const site of TEST_SITES) {
      await client.query(
        'INSERT INTO loa_sites_enc_test (name, href, description) VALUES ($1, $2, $3)',
        [site.name, site.href, site.description],
      );
    }

    const rows = await client.query(
      'SELECT name, description FROM loa_sites_enc_test',
    );

    for (const row of rows.rows) {
      expect(row.name).not.toMatch(/\?{2,}/);
      expect(row.description ?? '').not.toMatch(/\?{2,}/);
    }
  });
});
