import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const NEST_API = process.env.NEST_API_URL ?? "http://localhost:3001";

export async function GET(req: NextRequest) {
  try {
    const store = await cookies();
    const token = store.get("admin_token")?.value ?? "";

    const { searchParams } = req.nextUrl;
    const query = searchParams.toString();

    const res = await fetch(
      `${NEST_API}/api/admin/characters${query ? `?${query}` : ""}`,
      {
        headers: { "x-admin-session": token },
        cache: "no-store",
      },
    );

    const data = await res.json().catch(() => []);
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { message: "admin characters upstream unavailable" },
      { status: 503 },
    );
  }
}
