import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const NEST_API = process.env.NEST_API_URL ?? "http://localhost:3001";

async function getToken(): Promise<string> {
  const store = await cookies();
  return store.get("admin_token")?.value ?? "";
}

export async function POST() {
  const token = await getToken();
  const res = await fetch(`${NEST_API}/api/admin/cache/snapshot-youtube`, {
    method: "POST",
    headers: { "x-admin-session": token },
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
