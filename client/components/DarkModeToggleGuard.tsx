"use client";

import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";

/**
 * 관리자 페이지(/admin)에서는 다크모드 토글을 숨긴다.
 * 그 외 페이지에서는 평소처럼 표시.
 */
export default function DarkModeToggleGuard() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  return <DarkModeToggle />;
}
