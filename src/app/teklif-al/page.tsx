"use client";
import { useState } from "react";

const BRANSLAR = [
  "Trafik",
  "Kasko",
  "Konut/DASK",
  "Sağlık",
  "Diğer",
];

export default function Page() {
  const [status, setStatus] = useState<null | "ok" | "err" | "loading">(null);
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);
    if (!fd.get("kvkk")) {
      setStatus("err");
      setMessage("Lütfen KVKK metnini onaylayın.");
      return;
    }
    try {
      const entries = Array.from(fd.entries()) as [string, FormDataEntryValue][];
      const payload = Object.fromEntries(entries);
      const res = await fetch("/api/teklif", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("ok");
        setMessage("Talebiniz alınmıştır. En kısa sürede dönüş yapacağız.");
        (e.target as HTMLFormElement).reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("err");
        setMessage(data?.error || "Bir hata oluştu. Tekrar deneyin.");
      }
    } catch (e) {
      console.error("/teklif-al submit error", e);
      setStatus("err");
      setMessage("Bağlantı hatası. Lütfen tekrar deneyin.");
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Teklif Al</h1>
      <p className="mt-2 text-zinc-700">Bilgilerinizi iletin, size özel en iyi teklifi sunalım.</p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="adsoyad">Ad Soyad</label>
          <input id="adsoyad" name="adsoyad" required className="rounded-md border px-3 py-2" />
        </div>
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="telefon">Telefon</label>
          <input id="telefon" name="telefon" required className="rounded-md border px-3 py-2" />
        </div>
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="email">E-posta</label>
          <input id="email" type="email" name="email" className="rounded-md border px-3 py-2" />
        </div>
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="brans">Branş</label>
          <select id="brans" name="brans" className="rounded-md border px-3 py-2">
            {BRANSLAR.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="plakaOrTc">Plaka / TCKN (opsiyonel)</label>
          <input id="plakaOrTc" name="plakaOrTc" className="rounded-md border px-3 py-2" />
        </div>
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="mesaj">Not</label>
          <textarea id="mesaj" name="mesaj" rows={4} className="rounded-md border px-3 py-2" />
        </div>
        <label className="flex items-start gap-2 text-sm">
          <input type="checkbox" name="kvkk" value="on" />
          <span>
            <a className="underline" href="/kvkk" target="_blank">KVKK Aydınlatma Metni</a>&apos;ni okudum ve onaylıyorum.
          </span>
        </label>
        <button disabled={status === "loading"} className="rounded-md bg-zinc-900 px-5 py-3 text-white disabled:opacity-60">
          {status === "loading" ? "Gönderiliyor..." : "Gönder"}
        </button>
        {status && (
          <div className={`text-sm ${status === "ok" ? "text-green-600" : "text-red-600"}`}>{message}</div>
        )}
      </form>
    </div>
  );
}
