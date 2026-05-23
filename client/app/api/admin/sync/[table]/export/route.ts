import { NextRequest } from "next/server";

const SYNC_TARGET_API = process.env.SYNC_TARGET_API_URL ?? "";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ table: string }> },
) {
  const { table } = await params;
  const sessionId = req.nextUrl.searchParams.get("sessionId")?.trim() ?? "";

  if (!sessionId) {
    return new Response("missing session", { status: 401 });
  }
  if (table !== "users" && table !== "sites") {
    return new Response("invalid table", { status: 400 });
  }
  if (!SYNC_TARGET_API) {
    return new Response("SYNC_TARGET_API_URL not configured", { status: 500 });
  }

  const url = `${SYNC_TARGET_API.replace(/\/$/, "")}/api/admin/sync/${table}/export`;
  const upstream = await fetch(url, {
    method: "GET",
    headers: { "x-admin-session": sessionId },
  });

  if (!upstream.ok) {
    const text = await upstream.text().catch(() => "");
    return new Response(text || "upstream error", { status: upstream.status });
  }

  return new Response(upstream.body, {
    status: 200,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
