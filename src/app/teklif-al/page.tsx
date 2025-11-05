"use client";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

const BRANSLAR = [
  "Trafik",
  "Kasko",
  "Konut/DASK",
  "Sağlık",
  "Diğer",
];

export default function Page() {
  const search = useSearchParams();
  const status = useMemo(() => search.get("success"), [search]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Teklif Al</h1>
      <p className="mt-2 text-zinc-700">Bilgilerinizi iletin, size özel en iyi teklifi sunalım.</p>

      {/* Netlify, formu build-time'da algılasın diye gizli iskelet */}
      <form name="teklif" data-netlify="true" hidden>
        <input type="text" name="adsoyad" />
        <input type="text" name="telefon" />
        <input type="email" name="email" />
        <input type="text" name="brans" />
        <textarea name="mesaj" />
      </form>

      <form
        name="teklif"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="mt-6 grid gap-4"
        action="/teklif-al?success=1"
      >
        {/* Netlify Forms gereği */}
        <input type="hidden" name="form-name" value="teklif" />
        <input type="hidden" name="bot-field" />

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
          <input type="checkbox" name="kvkk" value="on" required />
          <span>
            <a className="underline" href="/kvkk" target="_blank">KVKK Aydınlatma Metni</a>&apos;ni okudum ve onaylıyorum.
          </span>
        </label>
        <button className="rounded-md bg-zinc-900 px-5 py-3 text-white">
          Gönder
        </button>
        {status === "1" && (
          <div className="text-sm text-green-600">Talebiniz alındı. En kısa sürede dönüş yapacağız.</div>
        )}
      </form>
    </div>
  );
}
