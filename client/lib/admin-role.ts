"use client";

import { useEffect, useState } from "react";

export type AdminRole = "master" | "guest" | null;

export function readAdminRole(): AdminRole {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    /(?:^|;\s*)admin_role=([^;]+)/,
  );
  if (!match) return null;
  const value = decodeURIComponent(match[1]);
  return value === "master" || value === "guest" ? value : null;
}

export function useAdminRole(): AdminRole {
  const [role, setRole] = useState<AdminRole>(null);

  useEffect(() => {
    setRole(readAdminRole());
  }, []);

  return role;
}

export function buildGuestNotice(action: string): string {
  return [
    `게스트 계정은 ${action}을 할 수 없습니다.`,
    "흐름: 로그인된 세션 확인 -> role 검사 -> 작업 차단",
  ].join("\n");
}
