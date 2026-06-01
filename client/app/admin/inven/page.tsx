"use client";

import { useEffect, useRef, useState } from "react";
import { buildGuestNotice, useAdminRole } from "@/lib/admin-role";

// ── 타입 ──────────────────────────────────────────────────────────────────────

interface SiteCandidate {
  id: number;
  url: string;
  domain: string;
  name: string;
  description: string;
  category: string;
  mention_count: number;
  sample_post_id: string | null;
  status: string;
  created_at: string;
}

interface PipelineStatus {
  running: boolean;
  step: string;
  stepIndex: number;
  totalSteps: number;
  percent: number;
  message: string;
  error: string | null;
  startedAt: string | null;
  finishedAt: string | null;
  targetDate: string | null;
}

// ── 유틸 ──────────────────────────────────────────────────────────────────────

async function apiFetch(path: string, opts?: RequestInit) {
  const res = await fetch(`/api/admin/inven${path}`, opts);
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<Record<string, unknown>>;
}

// ── 컴포넌트 ──────────────────────────────────────────────────────────────────

export default function AdminInvenPage() {
  const [tab, setTab] = useState<"candidates" | "pipeline">("candidates");
  // 게스트 권한 안내 (제목 아래 고정 표시) — 탭 전환 시 초기화
  const [accessNotice, setAccessNotice] = useState("");
  const role = useAdminRole();
  const isGuest = role === "guest";

  // 쓰기 작업 전 게스트 차단. 차단되면 false 반환.
  const requireMaster = (action: string) => {
    if (!isGuest) return true;
    setAccessNotice(buildGuestNotice(action));
    return false;
  };

  const switchTab = (t: "candidates" | "pipeline") => {
    setAccessNotice("");
    setTab(t);
  };

  const TAB_LABELS = {
    candidates: "🔎 추천 사이트",
    pipeline:   "⚙️ 수집 실행",
  };

  return (
    <div className="space-y-4">
      <h1 className="admin-page-title">사이트 추천</h1>
      <p className="admin-page-subtitle">
        인벤 커뮤니티에서 언급된, 아직 등록되지 않은 사이트를 모아줍니다. 검토 후 직접 추가하세요.
      </p>

      {accessNotice && (
        <pre className="whitespace-pre-wrap rounded border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
          {accessNotice}
        </pre>
      )}

      {/* 탭 */}
      <div className="flex gap-2 border-b border-[color:var(--admin-border)] pb-0">
        {(Object.keys(TAB_LABELS) as Array<keyof typeof TAB_LABELS>).map((t) => (
          <button
            key={t}
            onClick={() => switchTab(t)}
            className={`px-4 py-2 text-sm rounded-t-lg transition-colors ${
              tab === t
                ? "bg-white border border-b-white border-[color:var(--admin-border)] -mb-px font-medium"
                : "text-[color:var(--admin-muted)] hover:text-[color:var(--admin-fg)]"
            }`}
          >
            {TAB_LABELS[t]}
          </button>
        ))}
      </div>

      <div className="pt-2">
        {tab === "candidates" && <CandidatesTab requireMaster={requireMaster} />}
        {tab === "pipeline" && <PipelineTab requireMaster={requireMaster} />}
      </div>
    </div>
  );
}

// ── 추천 사이트 탭 ────────────────────────────────────────────────────────────

type SiteForm = { name: string; href: string; category: string; description: string; icon: string };

const EMPTY_SITE_FORM: SiteForm = { name: "", href: "", category: "", description: "", icon: "" };

// 사이트 관리 탭과 동일한 카드 미리보기
function SiteCardPreview({ form }: { form: SiteForm }) {
  const iconSrc = (() => {
    if (form.icon) return form.icon;
    if (form.href) {
      try {
        const domain = new URL(form.href).hostname;
        return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
      } catch {
        return null;
      }
    }
    return null;
  })();

  return (
    <div className="relative flex flex-col rounded-xl border border-[color:var(--admin-border)] bg-[color:var(--admin-surface-muted)] p-3 min-h-[80px]">
      <div className="flex items-start justify-between gap-2 pr-1">
        <div className="flex min-w-0 items-center gap-1.5">
          {iconSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={iconSrc} alt="" width={16} height={16} className="shrink-0 rounded-sm" />
          )}
          <span className="truncate font-semibold text-[color:var(--admin-text)] text-sm">
            {form.name || <span className="text-[color:var(--admin-text-subtle)]">이름</span>}
          </span>
        </div>
        <span className="admin-badge admin-badge-neutral">{form.category || "카테고리"}</span>
      </div>
      <p className="mt-1.5 text-xs text-[color:var(--admin-text-muted)] line-clamp-2">
        {form.description || <span className="text-[color:var(--admin-text-subtle)]">설명</span>}
      </p>
    </div>
  );
}

function CandidatesTab({ requireMaster }: { requireMaster: (action: string) => boolean }) {
  const [candidates, setCandidates] = useState<SiteCandidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<number | null>(null);
  const [error, setError] = useState("");
  // 블랙리스트 등록 확인 모달 대상
  const [confirmTarget, setConfirmTarget] = useState<SiteCandidate | null>(null);
  // 사이트 추가 모달 대상 + 입력 폼
  const [addTarget, setAddTarget] = useState<SiteCandidate | null>(null);
  const [form, setForm] = useState<SiteForm>(EMPTY_SITE_FORM);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  const load = async () => {
    setLoading(true);
    try {
      const d = await apiFetch("/site-candidates?status=pending");
      setCandidates((d.candidates as SiteCandidate[]) ?? []);
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "불러오기 실패");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // "+ 사이트 추가" → 모달 열고 후보 정보로 폼 채우기 (URL은 도메인 루트)
  const openAddModal = (c: SiteCandidate) => {
    if (!requireMaster("사이트 추가")) return;
    setAddTarget(c);
    setForm({
      name: c.name || "",
      href: `https://${c.domain}`,
      category: c.category || "",
      description: c.description || "",
      icon: "",
    });
    setFormError("");
  };

  const closeAddModal = () => {
    setAddTarget(null);
    setForm(EMPTY_SITE_FORM);
    setFormError("");
  };

  // 모달 저장 → 후보 승인 API (loa_sites 등록 + status=added)
  const submitAdd = async () => {
    if (!addTarget) return;
    if (!form.name.trim() || !form.href.trim()) {
      setFormError("이름과 URL은 필수입니다");
      return;
    }
    setSaving(true);
    setFormError("");
    try {
      await apiFetch(`/site-candidates/${addTarget.id}/approve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          href: form.href,
          category: form.category,
          description: form.description,
          icon: form.icon,
        }),
      });
      setCandidates((prev) => prev.filter((x) => x.id !== addTarget.id));
      closeAddModal();
    } catch (e) {
      setFormError(e instanceof Error ? e.message : "추가 실패");
    } finally {
      setSaving(false);
    }
  };

  // 블랙리스트 등록 실행
  const confirmReject = async () => {
    const c = confirmTarget;
    if (!c) return;
    setConfirmTarget(null);
    setBusyId(c.id);
    try {
      await apiFetch(`/site-candidates/${c.id}/reject`, { method: "POST" });
      setCandidates((prev) => prev.filter((x) => x.id !== c.id));
    } catch (e) {
      setError(e instanceof Error ? e.message : "블랙리스트 등록 실패");
    } finally {
      setBusyId(null);
    }
  };

  if (loading) return <p className="admin-page-subtitle">불러오는 중...</p>;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-[color:var(--admin-muted)]">
          검토 대기 {candidates.length}개
        </p>
        <button onClick={load} className="text-xs text-blue-500 hover:underline">
          새로고침
        </button>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {candidates.length === 0 && (
        <div className="admin-card p-6 text-center">
          <p className="admin-page-subtitle">검토할 추천 사이트가 없습니다.</p>
          <p className="text-xs text-[color:var(--admin-muted)] mt-2">
            「⚙️ 수집 실행」 탭에서 크롤링을 돌리면 새 사이트 후보가 모입니다.
          </p>
        </div>
      )}

      {/* 후보 카드 (도메인 + 언급 횟수 + 버튼) */}
      <div className="space-y-2">
        {candidates.map((c) => (
          <div key={c.id} className="admin-card p-4 flex items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-blue-600 hover:underline"
                >
                  {c.domain}
                </a>
                <span className="text-[10px] text-[color:var(--admin-muted)]">
                  언급 {c.mention_count}회
                </span>
              </div>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] text-[color:var(--admin-muted)] hover:underline block truncate mt-0.5"
              >
                {c.url}
              </a>
            </div>

            <div className="flex gap-1.5 shrink-0">
              <button
                onClick={() => {
                  if (!requireMaster("블랙리스트 등록")) return;
                  setConfirmTarget(c);
                }}
                disabled={busyId === c.id}
                className="admin-btn admin-btn-secondary text-xs px-3 py-1"
              >
                블랙리스트 등록
              </button>
              <button
                onClick={() => openAddModal(c)}
                disabled={busyId === c.id}
                className="admin-btn admin-btn-primary text-xs px-3 py-1 whitespace-nowrap"
              >
                + 사이트 추가
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 사이트 추가 모달 (사이트 관리 탭과 동일 형식) */}
      {addTarget && (
        <div
          className="admin-modal-overlay"
          onClick={(e) => {
            if (!saving && e.target === e.currentTarget) closeAddModal();
          }}
        >
          <div className="admin-modal w-full max-w-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-semibold text-[color:var(--admin-text)]">
                새 사이트 추가 · {addTarget.domain}
              </h2>
              <button
                onClick={closeAddModal}
                disabled={saving}
                className="text-[color:var(--admin-text-subtle)] hover:text-[color:var(--admin-text)] text-lg leading-none"
              >
                ✕
              </button>
            </div>
            <div className="flex gap-6">
              {/* 폼 */}
              <div className="flex-1 min-w-0">
                <div className="grid grid-cols-2 gap-4">
                  {(["name", "href", "category", "description", "icon"] as const).map((field) => (
                    <div key={field} className={field === "description" ? "col-span-2" : ""}>
                      <label className="admin-label capitalize">{field}</label>
                      <input
                        type="text"
                        value={form[field]}
                        disabled={saving}
                        onChange={(e) => setForm((p) => ({ ...p, [field]: e.target.value }))}
                        className="admin-input"
                      />
                    </div>
                  ))}
                </div>
                {formError && <p className="text-red-500 text-xs mt-2">{formError}</p>}
                <div className="flex gap-2 mt-5">
                  <button
                    onClick={submitAdd}
                    disabled={saving}
                    className="admin-btn admin-btn-primary"
                  >
                    {saving ? "저장 중..." : "저장"}
                  </button>
                  <button
                    onClick={closeAddModal}
                    disabled={saving}
                    className="admin-btn admin-btn-secondary"
                  >
                    취소
                  </button>
                </div>
              </div>

              {/* 카드 미리보기 */}
              <div className="w-52 shrink-0">
                <p className="text-xs text-[color:var(--admin-text-muted)] mb-2 font-medium">
                  미리보기
                </p>
                <SiteCardPreview form={form} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 블랙리스트 등록 확인 모달 */}
      {confirmTarget && (
        <div
          className="admin-modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setConfirmTarget(null);
          }}
        >
          <div className="admin-modal max-w-md w-[90%] p-5 space-y-4">
            <p className="text-sm font-medium">블랙리스트 등록</p>
            <div className="text-sm text-[color:var(--admin-text)] space-y-1">
              <p>아래 사이트를 블랙리스트에 등록할까요?</p>
              <p className="font-bold text-blue-600">{confirmTarget.domain}</p>
              <p className="text-xs text-[color:var(--admin-text-muted)] break-all">
                {confirmTarget.url}
              </p>
              <p className="text-xs text-[color:var(--admin-text-muted)] mt-1">
                등록하면 추천 목록에서 사라지고, 다음 수집부터 다시 뜨지 않습니다.
              </p>
            </div>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setConfirmTarget(null)}
                className="admin-btn admin-btn-secondary text-xs px-4 py-1"
              >
                아니오
              </button>
              <button
                onClick={confirmReject}
                className="admin-btn admin-btn-primary text-xs px-4 py-1"
              >
                예, 등록
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── 수집 실행(파이프라인) 탭 ──────────────────────────────────────────────────

const STEP_LABELS: Record<string, string> = {
  crawl:   "크롤링",
  save:    "DB 저장",
  suggest: "사이트 추천",
  done:    "완료",
  error:   "오류",
};

function PipelineTab({ requireMaster }: { requireMaster: (action: string) => boolean }) {
  const [status, setStatus] = useState<PipelineStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchStatus = async () => {
    try {
      const res = await apiFetch("/pipeline/status");
      setStatus(res as unknown as PipelineStatus);
      return res as unknown as PipelineStatus;
    } catch {
      return null;
    }
  };

  const startPolling = () => {
    if (pollRef.current) return;
    pollRef.current = setInterval(async () => {
      const s = await fetchStatus();
      if (s && !s.running) stopPolling();
    }, 2000);
  };

  const stopPolling = () => {
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
  };

  useEffect(() => {
    fetchStatus().then((s) => {
      if (s?.running) startPolling();
    });
    return () => stopPolling();
  }, []);

  const handleRun = async () => {
    if (!requireMaster("수집 실행")) return;
    setLoading(true);
    try {
      await apiFetch("/pipeline/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      await fetchStatus();
      startPolling();
    } finally {
      setLoading(false);
    }
  };

  const isRunning = status?.running ?? false;
  const percent = status?.percent ?? 0;
  const stepLabel = status?.step ? (STEP_LABELS[status.step] ?? status.step) : "";

  return (
    <div className="space-y-4 max-w-lg">
      {/* 실행 버튼 */}
      <div className="admin-card p-5 space-y-4">
        <div>
          <p className="text-sm font-medium">수동 수집 실행</p>
          <p className="text-xs text-[color:var(--admin-muted)] mt-1">
            어제 날짜 기준으로 크롤 → DB 저장 → 사이트 추출을 순서대로 실행합니다.
          </p>
        </div>

        <button
          onClick={handleRun}
          disabled={isRunning || loading}
          className="admin-btn admin-btn-primary w-full"
        >
          {isRunning ? "실행 중..." : "▶ 수집 시작"}
        </button>

        {(isRunning || (status && status.percent > 0)) && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-[color:var(--admin-muted)]">
                {stepLabel}
                {status?.targetDate && ` (${status.targetDate})`}
              </span>
              <span className="font-medium">{percent}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  status?.step === "error" ? "bg-red-500" : "bg-blue-500"
                }`}
                style={{ width: `${percent}%` }}
              />
            </div>
            <p className="text-xs text-[color:var(--admin-muted)]">{status?.message}</p>
          </div>
        )}

        {status?.step === "done" && !isRunning && (
          <p className="text-xs text-green-600 font-medium">
            ✓ {status.finishedAt ? new Date(status.finishedAt).toLocaleString("ko-KR") : ""} 완료
            — 「추천 사이트」 탭에서 결과를 확인하세요.
          </p>
        )}
        {status?.error && <p className="text-xs text-red-500">오류: {status.error}</p>}
      </div>

      {/* 단계 안내 */}
      <div className="admin-card p-4">
        <p className="text-xs font-medium mb-2 text-[color:var(--admin-muted)]">실행 단계</p>
        <div className="space-y-1">
          {[
            { key: "crawl",   label: "크롤링",      desc: "인벤 게시판 본문 + 댓글 수집" },
            { key: "save",    label: "DB 저장",     desc: "수집 결과를 inven_posts에 저장" },
            { key: "suggest", label: "사이트 추출", desc: "URL 추출 → 기존/daloa/인벤 제외 → 후보 저장" },
          ].map((s) => {
            const order = ["crawl", "save", "suggest"];
            const idx = order.indexOf(s.key);
            const done = status?.stepIndex !== undefined && idx < status.stepIndex;
            const active = status?.step === s.key && isRunning;
            return (
              <div key={s.key} className="flex items-start gap-2 text-xs">
                <span
                  className={`shrink-0 mt-0.5 w-2 h-2 rounded-full ${
                    active ? "bg-blue-500" : done ? "bg-green-400" : "bg-gray-200"
                  }`}
                />
                <span>
                  <span className="font-medium">{s.label}</span>
                  <span className="text-[color:var(--admin-muted)]"> — {s.desc}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
