"use client";

import { useEffect, useState } from "react";
import type { StatBuildTab } from "@/types";
import { event as gaEvent } from "@/lib/gtag";

interface Props {
  tabs: StatBuildTab[];
}

const BUILD_STYLE: Record<
  string,
  { tab: string; bar: string; bg: string; light: string }
> = {
  치신:  { tab: "bg-red-500 text-white",    bar: "bg-red-400",    bg: "bg-red-500",    light: "bg-red-100 text-red-700" },
  신치:  { tab: "bg-blue-500 text-white",   bar: "bg-blue-400",   bg: "bg-blue-500",   light: "bg-blue-100 text-blue-700" },
  치특:  { tab: "bg-orange-500 text-white", bar: "bg-orange-400", bg: "bg-orange-500", light: "bg-orange-100 text-orange-700" },
  특치:  { tab: "bg-amber-500 text-white",  bar: "bg-amber-400",  bg: "bg-amber-500",  light: "bg-amber-100 text-amber-700" },
  신특:  { tab: "bg-indigo-500 text-white", bar: "bg-indigo-400", bg: "bg-indigo-500", light: "bg-indigo-100 text-indigo-700" },
  특신:  { tab: "bg-purple-500 text-white", bar: "bg-purple-400", bg: "bg-purple-500", light: "bg-purple-100 text-purple-700" },
  치특신: { tab: "bg-cyan-500 text-white",  bar: "bg-cyan-400",   bg: "bg-cyan-500",   light: "bg-cyan-100 text-cyan-700" },
  미설정: { tab: "bg-slate-400 text-white", bar: "bg-slate-300",  bg: "bg-slate-400",  light: "bg-slate-100 text-slate-500" },
};
const DEFAULT_STYLE = BUILD_STYLE["미설정"];

export default function StatBuildList({ tabs }: Props) {
  const safeTabs = Array.isArray(tabs)
    ? tabs
        .map((t) => ({ ...t, statBuild: t.statBuild.trim() }))
        .sort((a, b) => (b.totalCount ?? 0) - (a.totalCount ?? 0))
    : [];

  const defaultTab = safeTabs[0]?.statBuild ?? "";
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [query, setQuery] = useState("");

  const grandTotal = safeTabs.reduce((sum, t) => sum + (t.totalCount ?? 0), 0);

  const q = query.trim().toLowerCase();
  const isSearching = q.length > 0;

  // 검색 모드: 매칭 항목이 있는 탭만 그룹으로 수집
  const searchGroups = isSearching
    ? safeTabs
        .map((tab) => {
          const matched = [...(tab.items ?? [])]
            .sort((a, b) => b.count - a.count)
            .filter(
              (item) =>
                item.classEngraving?.toLowerCase().includes(q) ||
                item.classDetail?.toLowerCase().includes(q),
            );
          return { tab, matched };
        })
        .filter((g) => g.matched.length > 0)
    : [];

  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const update = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // 탭 뷰
  const current =
    safeTabs.find((t) => t.statBuild === activeTab) ?? safeTabs[0];
  // 색 농도 정규화용: 탭 내 최다 항목 기준
  const maxCount = Math.max(...(current?.items?.map((i) => i.count) ?? [1]), 1);

  return (
    <article className="flex max-h-[40vh] shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white/85 p-4 shadow-md backdrop-blur fade-in delay-1 dark:border-slate-700/70 dark:bg-slate-800/85 sm:h-[calc((100vh-90px)/3)] sm:max-h-none">
      <div className="mb-3 shrink-0 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            특성 빌드 분포
          </h2>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="직업·각인 검색"
          className="mt-1 w-36 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs text-slate-700 outline-none placeholder:text-slate-300 focus:border-cyan-400 focus:bg-white transition dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:bg-slate-600"
        />
      </div>

      <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
        {isSearching ? (
          /* ── 검색 결과 뷰 ── */
          <div className="flex-1 overflow-y-auto pr-1 [scrollbar-width:thin] [scrollbar-color:theme(colors.slate.200)_transparent]">
            {searchGroups.length === 0 ? (
              <p className="py-8 text-center text-sm text-slate-400 dark:text-slate-500">
                검색 결과 없음
              </p>
            ) : (
              searchGroups.map(({ tab, matched }) => {
                const style = BUILD_STYLE[tab.statBuild] ?? DEFAULT_STYLE;
                // 전체 매칭 합산 (모든 탭에 걸친 매칭 결과 총합)
                const matchedTotal = searchGroups.reduce(
                  (sum, g) => sum + g.matched.reduce((s, i) => s + i.count, 0),
                  0,
                );
                return (
                  <div key={tab.statBuild}>
                    {/* 탭 소제목 */}
                    <div className="mb-1 flex items-center gap-2">
                      <span
                        className={`rounded-md px-2 py-0.5 text-xs font-bold ${style.tab}`}
                      >
                        {tab.statBuild}
                      </span>
                      <span className="text-xs text-slate-400">
                        {grandTotal > 0
                          ? `전체 ${Math.round((tab.totalCount / grandTotal) * 100)}%`
                          : ""}
                      </span>
                    </div>
                    {/* 매칭 항목 */}
                    <ul className="flex flex-col gap-0.5">
                      {matched.map((item, idx) => {
                        const pct =
                          matchedTotal > 0
                            ? Math.round((item.count / matchedTotal) * 100)
                            : 0;
                        return (
                          <li
                            key={`${item.classDetail}-${idx}`}
                            className="flex items-center gap-2 rounded-lg bg-cyan-50 py-0.5 ring-1 ring-cyan-200 dark:bg-cyan-950/30 dark:ring-cyan-800"
                          >
                            <span className="w-4 shrink-0 text-center text-xs font-bold text-slate-400" />
                            <div className="flex w-32 shrink-0 flex-col">
                              <span className="truncate text-xs font-semibold leading-tight text-cyan-700 dark:text-cyan-300">
                                {item.classEngraving}
                              </span>
                              {item.classDetail && (
                                <span className="truncate text-xs font-normal leading-tight text-cyan-500 dark:text-cyan-400">
                                  {item.classDetail}
                                </span>
                              )}
                            </div>
                            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                              <div
                                className="h-full rounded-full bg-cyan-400 transition-all"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                            <span className="w-10 shrink-0 text-right text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                              {pct}%
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })
            )}
          </div>
        ) : (
          /* ── 탭 뷰: 왼쪽 탭 목록 + 오른쪽 항목 리스트 ── */
          <div className="flex gap-3 flex-1 min-h-0">
            {/* 왼쪽: 빌드 탭 목록 (컨테이너 높이에 맞춰 균등 분배) */}
            <div className="shrink-0 flex w-20 flex-col gap-0.5">
              {safeTabs.map((tab) => {
                const pct =
                  grandTotal > 0
                    ? Math.round((tab.totalCount / grandTotal) * 100)
                    : 0;
                const style = BUILD_STYLE[tab.statBuild] ?? DEFAULT_STYLE;
                const isActive = tab.statBuild === activeTab;
                return (
                  <button
                    key={tab.statBuild}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.statBuild);
                      gaEvent("stat_build_tab_click", {
                        stat_build: tab.statBuild,
                        total_count: tab.totalCount ?? 0,
                      });
                      gaEvent("component_click", {
                        component_name: "stat_build_distribution",
                        item_name: tab.statBuild,
                        item_id: tab.statBuild,
                      });
                    }}
                    title={`${tab.statBuild} ${pct}%`}
                    className={`flex min-h-[28px] w-full flex-1 items-center gap-1.5 rounded-md px-2 py-1 text-left text-xs font-semibold transition ${
                      isActive ? style.tab : `${style.light} hover:brightness-95`
                    }`}
                  >
                    <span className="flex-1 truncate">{tab.statBuild}</span>
                    <span
                      className={`shrink-0 tabular-nums ${isActive ? "opacity-80" : "opacity-70"}`}
                    >
                      {pct}%
                    </span>
                  </button>
                );
              })}
            </div>

            {/* 오른쪽: 항목 리스트 */}
            <ul
              key={activeTab}
              className="flex flex-col gap-2 flex-1 overflow-y-auto pr-1 [scrollbar-width:thin] [scrollbar-color:theme(colors.slate.200)_transparent]"
            >
              {[...(current?.items ?? [])]
                .sort((a, b) => b.count - a.count)
                .map((item, idx) => {
                  const style = BUILD_STYLE[activeTab] ?? DEFAULT_STYLE;
                  // 다크모드에서 최소 opacity를 높여 가장 옅은 항목도 보이게
                  const minOpacity = isDark ? 0.28 : 0.12;
                  const fillOpacity = minOpacity + (item.count / maxCount) * (0.85 - minOpacity);
                  const onDark = fillOpacity >= 0.5;
                  // 다크모드에서 fill이 옅을 때 글자가 어두워 안 보이는 문제 보정
                  const textMain = onDark
                    ? "text-white"
                    : isDark
                      ? "text-slate-200"
                      : "text-slate-800";
                  const textSub = onDark
                    ? "text-white/80"
                    : isDark
                      ? "text-slate-300"
                      : "text-slate-600";
                  return (
                    <li
                      key={`${item.classDetail}-${idx}`}
                      className="relative flex shrink-0 items-start gap-2 overflow-hidden rounded-md px-1 py-2"
                    >
                      <div
                        className={`absolute inset-0 ${style.bar} transition-all`}
                        style={{ opacity: fillOpacity }}
                      />
                      <span className={`relative w-4 shrink-0 text-center text-xs font-bold ${textMain}`}>
                        {idx + 1}
                      </span>
                      <div className="relative flex min-w-0 flex-1 flex-col">
                        <span className={`text-xs font-medium leading-tight ${textMain}`}>
                          {item.classEngraving}
                        </span>
                      </div>
                      <span className={`relative w-9 shrink-0 text-right text-xs font-medium ${textSub}`}>
                        {item.count}명
                      </span>
                    </li>
                  );
                })}

              {(!current || !current.items?.length) && (
                <li className="py-8 text-center text-sm text-slate-400 dark:text-slate-500">
                  스탯 데이터 없음
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
