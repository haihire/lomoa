"use client";

import { useCallback, useEffect, useState } from "react";

interface Site {
  seq: number;
  name: string;
  href: string;
  category: string | null;
  description: string | null;
  icon: string | null;
  is_active: number;
}

const EMPTY_FORM = {
  name: "",
  href: "",
  category: "",
  description: "",
  icon: "",
};

export default function AdminSitesPage() {
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 추가/수정 폼
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/admin/sites", { cache: "no-store" });
    if (!res.ok) {
      setError("목록 로드 실패");
      setLoading(false);
      return;
    }
    setSites((await res.json()) as Site[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void load();
  }, [load]);

  function startEdit(site: Site) {
    setEditingId(site.seq);
    setForm({
      name: site.name,
      href: site.href,
      category: site.category ?? "",
      description: site.description ?? "",
      icon: site.icon ?? "",
    });
    setFormError("");
  }

  function cancelEdit() {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setFormError("");
  }

  async function handleSave() {
    if (!form.name || !form.href) {
      setFormError("이름과 URL은 필수입니다");
      return;
    }
    setSaving(true);
    setFormError("");

    const payload = {
      name: form.name,
      href: form.href,
      category: form.category || null,
      description: form.description || null,
      icon: form.icon || null,
    };

    const url = editingId
      ? `/api/admin/sites/${editingId}`
      : "/api/admin/sites";
    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const d = (await res.json()) as { message?: string };
      setFormError(d.message ?? "저장 실패");
      setSaving(false);
      return;
    }

    cancelEdit();
    await load();
    setSaving(false);
  }

  async function handleToggleActive(site: Site) {
    await fetch(`/api/admin/sites/${site.seq}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ is_active: site.is_active === 0 }),
    });
    await load();
  }

  async function handleDelete(seq: number) {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    const res = await fetch(`/api/admin/sites/${seq}`, { method: "DELETE" });
    if (!res.ok) {
      const d = (await res.json()) as { message?: string };
      alert(d.message ?? "삭제 실패");
      return;
    }
    await load();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">사이트 관리</h1>
        <button
          onClick={() => {
            setEditingId(null);
            setForm(EMPTY_FORM);
            setFormError("");
          }}
          className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition-colors"
        >
          + 사이트 추가
        </button>
      </div>

      {/* 추가/수정 폼 */}
      {(editingId !== null || form.name !== "" || form.href !== "") && (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-6">
          <h2 className="text-sm font-medium text-gray-300 mb-4">
            {editingId ? `수정 — #${editingId}` : "새 사이트 추가"}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {(["name", "href", "category", "description", "icon"] as const).map(
              (field) => (
                <div
                  key={field}
                  className={field === "description" ? "col-span-2" : ""}
                >
                  <label className="block text-xs text-gray-400 mb-1 capitalize">
                    {field}
                  </label>
                  <input
                    type="text"
                    value={form[field]}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, [field]: e.target.value }))
                    }
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              ),
            )}
          </div>
          {formError && (
            <p className="text-red-400 text-xs mt-2">{formError}</p>
          )}
          <div className="flex gap-2 mt-4">
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-sm px-4 py-1.5 rounded transition-colors"
            >
              {saving ? "저장 중..." : "저장"}
            </button>
            <button
              onClick={cancelEdit}
              className="text-gray-400 hover:text-gray-200 text-sm px-4 py-1.5 rounded transition-colors"
            >
              취소
            </button>
          </div>
        </div>
      )}

      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
      {loading ? (
        <p className="text-gray-500 text-sm">불러오는 중...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 text-left">
                <th className="py-2 pr-4 w-10">#</th>
                <th className="py-2 pr-4">이름</th>
                <th className="py-2 pr-4">URL</th>
                <th className="py-2 pr-4">카테고리</th>
                <th className="py-2 pr-4">활성</th>
                <th className="py-2">액션</th>
              </tr>
            </thead>
            <tbody>
              {sites.map((site) => (
                <tr
                  key={site.seq}
                  className="border-b border-gray-800/50 hover:bg-gray-900/40"
                >
                  <td className="py-2 pr-4 text-gray-500">{site.seq}</td>
                  <td className="py-2 pr-4 text-white">{site.name}</td>
                  <td className="py-2 pr-4">
                    <a
                      href={site.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:underline truncate max-w-xs block"
                    >
                      {site.href}
                    </a>
                  </td>
                  <td className="py-2 pr-4 text-gray-400">
                    {site.category ?? "-"}
                  </td>
                  <td className="py-2 pr-4">
                    <button
                      onClick={() => handleToggleActive(site)}
                      className={`text-xs px-2 py-0.5 rounded ${
                        site.is_active
                          ? "bg-green-900/50 text-green-400"
                          : "bg-gray-800 text-gray-500"
                      }`}
                    >
                      {site.is_active ? "활성" : "비활성"}
                    </button>
                  </td>
                  <td className="py-2 flex gap-2">
                    <button
                      onClick={() => startEdit(site)}
                      className="text-xs text-indigo-400 hover:text-indigo-300"
                    >
                      수정
                    </button>
                    <button
                      onClick={() => handleDelete(site.seq)}
                      className="text-xs text-red-400 hover:text-red-300"
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
