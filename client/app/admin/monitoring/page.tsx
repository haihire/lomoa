"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface ContainerStat {
  name: string;
  label: string;
  cpuPercent: number;
  memUsedMb: number;
  memTotalMb: number;
  memPercent: number;
  netInMb: number;
  netOutMb: number;
}

interface HostStats {
  cpuPercent: number;
  memUsedMb: number;
  memTotalMb: number;
  memPercent: number;
  diskUsedGb: number;
  diskTotalGb: number;
  diskPercent: number;
}

interface ContainerHistoryPoint {
  bucket: string;
  avgCpu: number;
  avgMem: number;
  avgMemUsedMb: number;
}

type Dashboard = {
  summary: {
    windowMinutes: number;
    avgDurationMs: number;
    pageVisits: number;
    deviceCounts?: {
      mobile: number;
      desktop: number;
      tablet: number;
      bot: number;
    };
  };
  siteClickSeries: { minute: string; count: number }[];
  youtubeClickSeries: { minute: string; count: number }[];
  sectionSeries: { minute: string; label: string; avgDurationMs: number; count: number }[];
  pageVisits: { path: string; device_type: string; count: number }[];
  countryVisits: { countryCode: string; count: number }[];
  osVisits: { osName: string; count: number }[];
  browserVisits: { browserName: string; count: number }[];
  siteClicks: { siteName: string; siteHref: string; siteCategory: string; clickCount: number }[];
  pageVisitSeries?: { day: string; count: number }[];
  youtubeClickTotal?: number;
};

const EMPTY_DASHBOARD: Dashboard = {
  summary: {
    windowMinutes: 60,
    avgDurationMs: 0,
    pageVisits: 0,
    deviceCounts: { mobile: 0, desktop: 0, tablet: 0, bot: 0 },
  },
  siteClickSeries: [],
  youtubeClickSeries: [],
  sectionSeries: [],
  pageVisits: [],
  countryVisits: [],
  osVisits: [],
  browserVisits: [],
  siteClicks: [],
};

function toFixedHundred<T extends { count: number }>(
  items: T[],
): Array<T & { pct: number }> {
  const filtered = items.filter((item) => item.count > 0);
  const total = filtered.reduce((sum, item) => sum + item.count, 0);
  if (total <= 0) return [];

  const raw = filtered.map((item) => ({
    item,
    exact: (item.count / total) * 100,
  }));
  const floored = raw.map((r) => Math.floor(r.exact));
  let remainder = 100 - floored.reduce((sum, n) => sum + n, 0);
  const order = raw
    .map((r, idx) => ({ idx, frac: r.exact - Math.floor(r.exact) }))
    .sort((a, b) => b.frac - a.frac);
  const pct = [...floored];
  let cursor = 0;
  while (remainder > 0 && order.length > 0) {
    pct[order[cursor % order.length].idx] += 1;
    remainder -= 1;
    cursor += 1;
  }
  return raw.map((r, idx) => ({ ...r.item, pct: pct[idx] }));
}

let monitoringCache: Dashboard | null = null;
let containersCache: ContainerStat[] | null = null;
let hostCache: HostStats | null = null;
const containerHistoryCache: Record<string, ContainerHistoryPoint[]> = {};

export default function MonitoringPage() {
  const [data, setData] = useState<Dashboard>(monitoringCache ?? EMPTY_DASHBOARD);
  const [loading, setLoading] = useState(monitoringCache === null);
  const [liveVisitDelta, setLiveVisitDelta] = useState(0);
  const [deviceTab, setDeviceTab] = useState<"device" | "browser">("device");
  const [activeChart, setActiveChart] = useState<string | null>(null);
  const [pageVisitDays, setPageVisitDays] = useState<7 | 30>(7);
  const [sectionTab, setSectionTab] = useState<"sites" | "stat-builds" | "youtube">("sites");
  const [containers, setContainers] = useState<ContainerStat[]>(containersCache ?? []);
  const [host, setHost] = useState<HostStats | null>(hostCache);
  const [containersLoading, setContainersLoading] = useState(containersCache === null);
  const [containerTab, setContainerTab] = useState<string>("전체");
  const [containerHistory, setContainerHistory] = useState<ContainerHistoryPoint[]>([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  const hasLoadedRef = useRef(false);
  const prevVisitCountRef = useRef(0);

  useEffect(() => {
    let alive = true;
    async function load(initial = false) {
      if (initial && monitoringCache === null) setLoading(true);
      try {
        const dashboardRes = await fetch("/api/admin/monitoring/dashboard?days=7", { cache: "no-store" });
        if (!alive) return;

        const dashboard = dashboardRes.ok
          ? ((await dashboardRes.json()) as Dashboard)
          : null;

        setData((prev) => {
          const base = dashboard ?? prev;
          if (dashboard) monitoringCache = base;

          const nextVisitCount = base.summary.pageVisits ?? 0;
          const prevVisitCount = prevVisitCountRef.current;
          if (prevVisitCount > 0 && nextVisitCount > prevVisitCount) {
            setLiveVisitDelta(nextVisitCount - prevVisitCount);
            window.setTimeout(() => setLiveVisitDelta(0), 2500);
          }
          prevVisitCountRef.current = nextVisitCount;

          return {
            ...base,
            sectionSeries: prev.sectionSeries,
            pageVisitSeries: prev.pageVisitSeries ?? base.pageVisitSeries,
            youtubeClickTotal: prev.youtubeClickTotal ?? base.youtubeClickTotal,
          };
        });
        hasLoadedRef.current = true;
      } catch {
        // Keep previous dashboard snapshot if polling fails.
      } finally {
        if (initial) setLoading(false);
      }
    }

    void load(true);
    const timer = setInterval(() => void load(!hasLoadedRef.current), 3000);
    return () => {
      alive = false;
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    let alive = true;
    async function loadContainers() {
      try {
        const res = await fetch("/api/admin/monitoring/containers", { cache: "no-store" });
        if (!alive || !res.ok) return;
        const raw = (await res.json()) as ContainerStat[] | { containers: ContainerStat[]; host: HostStats | null };
        const parsed = Array.isArray(raw)
          ? { containers: raw, host: null }
          : { containers: raw.containers ?? [], host: raw.host ?? null };
        containersCache = parsed.containers;
        hostCache = parsed.host;
        setContainers(parsed.containers);
        setHost(parsed.host);
      } catch {
        // keep previous
      } finally {
        if (alive) setContainersLoading(false);
      }
    }
    void loadContainers();
    const timer = setInterval(() => void loadContainers(), 10_000);
    return () => { alive = false; clearInterval(timer); };
  }, []);

  useEffect(() => {
    if (containerTab === "전체") {
      setContainerHistory([]);
      return;
    }
    let alive = true;
    const cached = containerHistoryCache[containerTab];
    if (cached) {
      setContainerHistory(cached);
    } else {
      setHistoryLoading(true);
      setContainerHistory([]);
    }
    async function loadHistory() {
      try {
        const res = await fetch(
          `/api/admin/monitoring/container-history?container=${containerTab}`,
          { cache: "no-store" },
        );
        if (!alive || !res.ok) return;
        const data = (await res.json()) as ContainerHistoryPoint[];
        containerHistoryCache[containerTab] = data;
        setContainerHistory(data);
      } catch {
        // keep previous
      } finally {
        if (alive) setHistoryLoading(false);
      }
    }
    void loadHistory();
    return () => { alive = false; };
  }, [containerTab]);

  useEffect(() => {
    let alive = true;
    async function loadSectionOnly() {
      try {
        const res = await fetch(
          `/api/admin/monitoring/dashboard?days=10&pvDays=${pageVisitDays}`,
          { cache: "no-store" },
        );
        if (!alive || !res.ok) return;
        const dashboard = (await res.json()) as Dashboard;
        setData((prev) => ({
          ...prev,
          sectionSeries: dashboard.sectionSeries ?? prev.sectionSeries,
          pageVisitSeries: dashboard.pageVisitSeries ?? prev.pageVisitSeries,
          youtubeClickTotal: dashboard.youtubeClickTotal ?? prev.youtubeClickTotal,
        }));
      } catch {
        // Keep existing data if fetch fails.
      }
    }
    void loadSectionOnly();
    return () => {
      alive = false;
    };
  }, [pageVisitDays]);

  const siteClickTotal = useMemo(() => data.siteClicks.reduce((sum, item) => sum + item.clickCount, 0), [data.siteClicks]);

  const deviceSummary = useMemo(() => {
    const summaryCounts = data.summary.deviceCounts;
    if (summaryCounts) {
      const mobile = summaryCounts.mobile ?? 0;
      const desktop = summaryCounts.desktop ?? 0;
      const tablet = summaryCounts.tablet ?? 0;
      const bot = summaryCounts.bot ?? 0;
      return { total: mobile + desktop + tablet + bot, mobile, desktop, tablet, bot };
    }

    let mobile = 0;
    let desktop = 0;
    let tablet = 0;
    let bot = 0;
    for (const row of data.pageVisits) {
      if (row.device_type === "mobile") mobile += row.count;
      else if (row.device_type === "desktop") desktop += row.count;
      else if (row.device_type === "tablet") tablet += row.count;
      else if (row.device_type === "bot") bot += row.count;
    }
    return { total: mobile + desktop + tablet + bot, mobile, desktop, tablet, bot };
  }, [data.pageVisits, data.summary.deviceCounts]);

  const deviceItems = useMemo(() => {
    const desktop = deviceSummary.desktop;
    const mobile = deviceSummary.mobile + deviceSummary.tablet;
    return toFixedHundred([
      { label: "Desktop", count: desktop },
      { label: "Mobile", count: mobile },
    ]);
  }, [deviceSummary]);

  const browserItems = useMemo(
    () => toFixedHundred(data.browserVisits.slice(0, 4)),
    [data.browserVisits],
  );

  const siteClickShareItems = useMemo(
    () => toFixedHundred(data.siteClicks.slice(0, 4).map((item) => ({ ...item, count: item.clickCount }))),
    [data.siteClicks],
  );

  const countryShareItems = useMemo(
    () => toFixedHundred(data.countryVisits.slice(0, 6)),
    [data.countryVisits],
  );

  const osShareItems = useMemo(() => {
    const counters = { Windows: 0, "GNU/Linux": 0, iOS: 0, Mac: 0 };
    for (const row of data.osVisits) {
      const name = row.osName.toLowerCase();
      if (name.includes("windows")) counters.Windows += row.count;
      else if (name.includes("linux")) counters["GNU/Linux"] += row.count;
      else if (name.includes("ios") || name.includes("iphone") || name.includes("ipad")) counters.iOS += row.count;
      else if (name.includes("mac")) counters.Mac += row.count;
    }
    return toFixedHundred([
      { osName: "Windows", count: counters.Windows },
      { osName: "GNU/Linux", count: counters["GNU/Linux"] },
      { osName: "iOS", count: counters.iOS },
      { osName: "Mac", count: counters.Mac },
    ]);
  }, [data.osVisits]);

  const normalizeLabel = (value: string) => (value.toUpperCase() === "UNKNOWN" ? "기타" : value);

  return (
    <div className="flex h-full flex-col">
      <div className="mb-5 shrink-0 flex items-start justify-between gap-4">
        <div>
          <h1 className="admin-page-title">모니터링</h1>
          <p className="admin-page-subtitle mt-1">운영 상태와 추세를 빠르게 확인합니다.</p>
        </div>
        <div className="flex shrink-0 items-center pt-1 text-xs text-[color:var(--admin-text-muted)]">
          평균 응답
          <span className="ml-1 font-semibold text-[color:var(--admin-text)]">
            {data.summary.avgDurationMs}ms
          </span>
        </div>
      </div>

      {loading && (
        <div className="admin-loading-box admin-loading-box-compact mb-4 shrink-0">
          <p className="text-sm text-[color:var(--admin-text-muted)]">
            모니터링 지표를 불러오는 중입니다...
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        <div className="admin-card p-3">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-semibold">컨테이너 현황</p>
            <div className="flex gap-1">
              <button type="button" onClick={() => setContainerTab("전체")}
                className={`admin-btn admin-btn-sm ${containerTab === "전체" ? "admin-btn-primary" : "admin-btn-secondary"}`}>
                전체
              </button>
              {containers.map((c) => (
                <button key={c.name} type="button" onClick={() => setContainerTab(c.label)}
                  className={`admin-btn admin-btn-sm ${containerTab === c.label ? "admin-btn-primary" : "admin-btn-secondary"}`}>
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {containerTab === "전체" ? (
            containersLoading ? (
              <p className="text-xs text-[color:var(--admin-text-muted)]">불러오는 중...</p>
            ) : containers.length === 0 ? (
              <p className="text-xs text-[color:var(--admin-text-muted)]">컨테이너 데이터 없음 (EC2 환경에서만 표시됩니다)</p>
            ) : (
              <div className="space-y-3">
                {host && (
                  <div className="rounded border border-[color:var(--admin-border)] bg-slate-50 p-2.5">
                    <p className="mb-1.5 text-xs font-semibold text-[color:var(--admin-text)]">EC2 호스트 전체</p>
                    <div className="grid gap-1 text-xs text-[color:var(--admin-text-muted)] sm:grid-cols-3">
                      <p>CPU <span className="font-medium text-[color:var(--admin-text)]">{host.cpuPercent.toFixed(1)}%</span></p>
                      <p>
                        메모리 <span className="font-medium text-[color:var(--admin-text)]">{host.memPercent.toFixed(1)}%</span>
                        <span className="ml-1">({host.memUsedMb}MB / {host.memTotalMb}MB)</span>
                      </p>
                      <p>
                        디스크 <span className="font-medium text-[color:var(--admin-text)]">{host.diskPercent}%</span>
                        <span className="ml-1">({host.diskUsedGb}GB / {host.diskTotalGb}GB)</span>
                      </p>
                    </div>
                  </div>
                )}
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {containers.map((c) => (
                    <div key={c.name} className="rounded border border-[color:var(--admin-border)] p-2.5">
                      <p className="mb-1.5 text-xs font-semibold">{c.label}</p>
                      <div className="space-y-0.5 text-xs text-[color:var(--admin-text-muted)]">
                        <p>CPU <span className="font-medium text-[color:var(--admin-text)]">{c.cpuPercent.toFixed(1)}%</span></p>
                        <p>
                          메모리 <span className="font-medium text-[color:var(--admin-text)]">{c.memPercent.toFixed(1)}%</span>
                          <span className="ml-1">({c.memUsedMb}MB / {c.memTotalMb}MB)</span>
                        </p>
                        <p>NET ↓{c.netInMb}MB · ↑{c.netOutMb}MB</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ) : (
            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <p className="mb-1 text-xs text-[color:var(--admin-text-muted)]">CPU % (7일)</p>
                <div className="h-28">
                  {historyLoading ? (
                    <div className="grid h-full place-items-center text-[11px] text-[color:var(--admin-text-muted)]">불러오는 중...</div>
                  ) : containerHistory.length === 0 ? (
                    <div className="grid h-full place-items-center text-[11px] text-[color:var(--admin-text-muted)]">데이터 없음</div>
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={containerHistory}
                        onMouseEnter={() => setActiveChart("container-cpu")}
                        onMouseLeave={() => setActiveChart(null)}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="bucket" tick={{ fontSize: 9, fill: "#6b7280" }} />
                        <YAxis tick={{ fontSize: 10, fill: "#6b7280" }} unit="%" />
                        <Tooltip active={activeChart === "container-cpu"} formatter={(v) => [`${v ?? 0}%`, "CPU"]} wrapperStyle={{ pointerEvents: "none" }} />
                        <Area type="linear" dataKey="avgCpu" stroke="#2563eb" fill="#bfdbfe" name="CPU %" />
                      </AreaChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>
              <div>
                <p className="mb-1 text-xs text-[color:var(--admin-text-muted)]">메모리 % (7일)</p>
                <div className="h-28">
                  {historyLoading ? (
                    <div className="grid h-full place-items-center text-[11px] text-[color:var(--admin-text-muted)]">불러오는 중...</div>
                  ) : containerHistory.length === 0 ? (
                    <div className="grid h-full place-items-center text-[11px] text-[color:var(--admin-text-muted)]">데이터 없음</div>
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={containerHistory}
                        onMouseEnter={() => setActiveChart("container-mem")}
                        onMouseLeave={() => setActiveChart(null)}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="bucket" tick={{ fontSize: 9, fill: "#6b7280" }} />
                        <YAxis tick={{ fontSize: 10, fill: "#6b7280" }} unit="%" />
                        <Tooltip active={activeChart === "container-mem"} formatter={(v) => [`${v ?? 0}%`, "메모리"]} wrapperStyle={{ pointerEvents: "none" }} />
                        <Area type="linear" dataKey="avgMem" stroke="#7c3aed" fill="#ede9fe" name="메모리 %" />
                      </AreaChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid auto-rows-min content-start grid-cols-1 gap-4 xl:grid-cols-2">
          <div className="admin-card p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold">사이트 클릭 타임라인 (일)</p>
              <span className="text-xs text-[color:var(--admin-text-muted)]">누적 {siteClickTotal.toLocaleString()}회</span>
            </div>
            <div className="h-40">
              {loading ? (
                <div className="grid h-full place-items-center text-sm text-[color:var(--admin-text-muted)]">불러오는 중...</div>
              ) : data.siteClickSeries.length === 0 ? (
                <div className="grid h-full place-items-center text-sm text-[color:var(--admin-text-muted)]">데이터 없음</div>
              ) : (
                <ResponsiveContainer width="100%" height="100%" minWidth={220} minHeight={120}>
                  <AreaChart
                    data={data.siteClickSeries}
                    onMouseEnter={() => setActiveChart("site-click")}
                    onMouseLeave={() => setActiveChart(null)}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="minute" tick={{ fontSize: 10, fill: "#6b7280" }} />
                    <YAxis tick={{ fontSize: 10, fill: "#6b7280" }} />
                    <Tooltip active={activeChart === "site-click"} wrapperStyle={{ pointerEvents: "none" }} />
                    <Area type="linear" dataKey="count" stroke="#2563eb" fill="#bfdbfe" name="사이트 클릭" />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          <div className="admin-card p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold">유튜브 클릭 타임라인 (일)</p>
              <span className="text-xs text-[color:var(--admin-text-muted)]">누적 {(data.youtubeClickTotal ?? 0).toLocaleString()}회</span>
            </div>
            <div className="h-40">
              {loading ? (
                <div className="grid h-full place-items-center text-sm text-[color:var(--admin-text-muted)]">불러오는 중...</div>
              ) : data.youtubeClickSeries.length === 0 ? (
                <div className="grid h-full place-items-center text-sm text-[color:var(--admin-text-muted)]">데이터 없음</div>
              ) : (
                <ResponsiveContainer width="100%" height="100%" minWidth={220} minHeight={120}>
                  <AreaChart
                    data={data.youtubeClickSeries}
                    onMouseEnter={() => setActiveChart("youtube-click")}
                    onMouseLeave={() => setActiveChart(null)}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="minute" tick={{ fontSize: 10, fill: "#6b7280" }} />
                    <YAxis tick={{ fontSize: 10, fill: "#6b7280" }} />
                    <Tooltip active={activeChart === "youtube-click"} wrapperStyle={{ pointerEvents: "none" }} />
                    <Area type="linear" dataKey="count" stroke="#ef4444" fill="#fecaca" name="유튜브 클릭" />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          <div className="admin-card p-3">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold">페이지 방문 추이 (일)</p>
                <span className="text-xs text-[color:var(--admin-text-muted)]">누적 {data.summary.pageVisits.toLocaleString()}회</span>
              </div>
              <div className="flex gap-1">
                {([7, 30] as const).map((d) => (
                  <button key={d} type="button" onClick={() => setPageVisitDays(d)} className={`admin-btn admin-btn-sm ${pageVisitDays === d ? "admin-btn-primary" : "admin-btn-secondary"}`}>
                    {d}일
                  </button>
                ))}
              </div>
            </div>
            <div className="h-20">
              {loading ? (
                <div className="grid h-full place-items-center text-sm text-[color:var(--admin-text-muted)]">불러오는 중...</div>
              ) : (data.pageVisitSeries ?? []).length === 0 ? (
                <div className="grid h-full place-items-center text-sm text-[color:var(--admin-text-muted)]">데이터 없음</div>
              ) : (
                <ResponsiveContainer width="100%" height="100%" minWidth={220} minHeight={120}>
                  <AreaChart
                    data={data.pageVisitSeries}
                    onMouseEnter={() => setActiveChart("page-visit")}
                    onMouseLeave={() => setActiveChart(null)}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#6b7280" }} />
                    <YAxis tick={{ fontSize: 10, fill: "#6b7280" }} />
                    <Tooltip active={activeChart === "page-visit"} wrapperStyle={{ pointerEvents: "none" }} />
                    <Area type="linear" dataKey="count" stroke="#7c3aed" fill="#ede9fe" name="페이지 방문" />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          <div className="admin-card p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold">기능별 응답 추이 (10분 자동점검)</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[color:var(--admin-text-muted)]">최근 10일</span>
                <div className="flex gap-1">
                  {(["sites", "stat-builds", "youtube"] as const).map((name) => (
                    <button key={name} type="button" onClick={() => setSectionTab(name)}
                      className={`admin-btn admin-btn-sm ${sectionTab === name ? "admin-btn-primary" : "admin-btn-secondary"}`}>
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {(() => {
              const series = data.sectionSeries.filter((item) => item.label === sectionTab);
              const latest = series.length > 0 ? series[series.length - 1] : null;
              const totalCount = series.reduce((sum, item) => sum + item.count, 0);
              return (
                <>
                  <div className="mb-1 flex justify-end">
                    <span className="text-[11px] text-[color:var(--admin-text-muted)]">
                      {latest ? `${latest.avgDurationMs}ms · ${totalCount}회` : "데이터 없음"}
                    </span>
                  </div>
                  <div className="h-28">
                    {series.length === 0 ? (
                      <div className="grid h-full place-items-center text-[11px] text-[color:var(--admin-text-muted)]">데이터 없음</div>
                    ) : (
                      <ResponsiveContainer width="100%" height="100%" minWidth={120} minHeight={80}>
                        <AreaChart
                          data={series}
                          onMouseEnter={() => setActiveChart(`section-${sectionTab}`)}
                          onMouseLeave={() => setActiveChart(null)}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                          <XAxis dataKey="minute" tick={{ fontSize: 10, fill: "#6b7280" }} />
                          <YAxis tick={{ fontSize: 10, fill: "#6b7280" }} unit="ms" />
                          <Tooltip active={activeChart === `section-${sectionTab}`} wrapperStyle={{ pointerEvents: "none" }} />
                          <Area type="linear" dataKey="avgDurationMs" stroke="#2563eb" fill="#dbeafe" name="평균 응답" />
                        </AreaChart>
                      </ResponsiveContainer>
                    )}
                  </div>
                </>
              );
            })()}
          </div>
        </div>

        <div className="grid auto-rows-min content-start gap-4 xl:grid-cols-4">
          <div className="admin-card p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold">사이트 클릭 상위</p>
              <span className="text-xs text-[color:var(--admin-text-muted)]">누적</span>
            </div>
            <div className="space-y-1">
              {siteClickShareItems.length === 0 ? (
                <div className="text-sm text-[color:var(--admin-text-muted)]">데이터 없음</div>
              ) : (
                siteClickShareItems.map((item) => (
                  <div key={`${item.siteHref}-${item.siteCategory}`} className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-1.5">
                    <p className="truncate text-sm font-medium">{item.siteName}</p>
                    <p className="text-sm font-semibold">{item.pct}%</p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="admin-card p-3">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-1 rounded-md bg-slate-100 p-0.5">
                <button type="button" onClick={() => setDeviceTab("device")} className={`rounded px-2 py-1 text-xs ${deviceTab === "device" ? "bg-white font-semibold text-[color:var(--admin-text)]" : "text-[color:var(--admin-text-muted)]"}`}>
                  Devices
                </button>
                <button type="button" onClick={() => setDeviceTab("browser")} className={`rounded px-2 py-1 text-xs ${deviceTab === "browser" ? "bg-white font-semibold text-[color:var(--admin-text)]" : "text-[color:var(--admin-text-muted)]"}`}>
                  Browsers
                </button>
              </div>
              {liveVisitDelta > 0 ? (
                <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-700">+{liveVisitDelta}</span>
              ) : null}
            </div>
            <div className="space-y-1">
              {(deviceTab === "device" ? deviceItems : browserItems).length === 0 ? (
                <div className="grid h-24 place-items-center text-xs text-[color:var(--admin-text-muted)]">데이터 없음</div>
              ) : deviceTab === "device" ? (
                deviceItems.map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-1.5">
                    <p className="text-sm font-medium">{normalizeLabel(item.label)}</p>
                    <p className="text-sm font-semibold">{item.pct}%</p>
                  </div>
                ))
              ) : (
                browserItems.map((item) => (
                  <div key={item.browserName} className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-1.5">
                    <p className="text-sm font-medium">{normalizeLabel(item.browserName)}</p>
                    <p className="text-sm font-semibold">{item.pct}%</p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="admin-card p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold">국가 분포</p>
              <span className="text-xs text-[color:var(--admin-text-muted)]">방문</span>
            </div>
            <div className="space-y-1">
              {countryShareItems.length === 0 ? (
                <div className="text-sm text-[color:var(--admin-text-muted)]">데이터 없음</div>
              ) : (
                countryShareItems.map((item) => (
                  <div key={item.countryCode} className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-1.5">
                    <p className="text-sm font-medium">{normalizeLabel(item.countryCode)}</p>
                    <p className="text-sm font-semibold">{item.pct}%</p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="admin-card p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold">운영체제 분포</p>
              <span className="text-xs text-[color:var(--admin-text-muted)]">방문</span>
            </div>
            <div className="space-y-1">
              {osShareItems.length === 0 ? (
                <div className="text-sm text-[color:var(--admin-text-muted)]">데이터 없음</div>
              ) : (
                osShareItems.map((item) => (
                  <div key={item.osName} className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-1.5">
                    <p className="text-sm font-medium">{normalizeLabel(item.osName)}</p>
                    <p className="text-sm font-semibold">{item.pct}%</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
