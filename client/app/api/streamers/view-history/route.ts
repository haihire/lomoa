import { NextRequest, NextResponse } from "next/server";

const NEST_API = process.env.NEST_API_URL ?? "http://localhost:3001";

export async function GET(req: NextRequest) {
  const days = req.nextUrl.searchParams.get("days") ?? "30";
  const upstream = `${NEST_API}/api/streamers/view-history?days=${encodeURIComponent(days)}`;

  const res = await fetch(upstream, {
    cache: "no-store",
  });

  const data: unknown = await res.json().catch(() => []);
  return NextResponse.json(data, { status: res.status });
}
