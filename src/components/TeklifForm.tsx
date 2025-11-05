"use client";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const BRANSLAR = ["Trafik", "Kasko", "Konut/DASK", "Sağlık", "Diğer"] as const;

export default function TeklifForm() {
  const params = useSearchParams();
  const defaultBrans = (params.get("brans") || "Trafik") as typeof BRANSLAR[number];
  const [brans, setBrans] = useState<typeof BRANSLAR[number]>(defaultBrans);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const fd = new FormData(e.currentTarget);
      const payload = Object.fromEntries(fd.entries());
      await fetch("/api/forms-webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      window.location.href = "/teklif-al?success=1";
    } catch {
      window.location.href = "/teklif-al?success=0";
    }
  }

  return (
    <>
      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>

        <div className="grid gap-1">
          <label className="text-sm" htmlFor="adsoyad">
            Ad Soyad
          </label>
          <input id="adsoyad" name="adsoyad" required className="rounded-md border px-3 py-2" />
        </div>
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="telefon">
            Telefon
          </label>
          <input id="telefon" name="telefon" required className="rounded-md border px-3 py-2" />
        </div>
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="email">
            E-posta
          </label>
          <input id="email" type="email" name="email" className="rounded-md border px-3 py-2" />
        </div>
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="brans">
            Branş
          </label>
          <select
            id="brans"
            name="brans"
            className="rounded-md border px-3 py-2"
            value={brans}
            onChange={(e) => setBrans(e.target.value as any)}
          >
            {BRANSLAR.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        {/* Ürün bazlı alanlar */}
        {brans === "Trafik" && (
          <>
            <div className="grid gap-1">
              <label className="text-sm" htmlFor="plaka">Plaka</label>
              <input id="plaka" name="plaka" required className="rounded-md border px-3 py-2" placeholder="06 ABC 123" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm" htmlFor="tckn">TCKN (opsiyonel)</label>
              <input id="tckn" name="tckn" className="rounded-md border px-3 py-2" />
            </div>
          </>
        )}
        {brans === "Kasko" && (
          <>
            <div className="grid gap-1">
              <label className="text-sm" htmlFor="plaka">Plaka</label>
              <input id="plaka" name="plaka" required className="rounded-md border px-3 py-2" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm" htmlFor="markaModel">Marka/Model</label>
              <input id="markaModel" name="markaModel" className="rounded-md border px-3 py-2" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-1">
                <label className="text-sm" htmlFor="yil">Model Yılı</label>
                <input id="yil" name="yil" className="rounded-md border px-3 py-2" />
              </div>
              <div className="grid gap-1">
                <label className="text-sm" htmlFor="kullanim">Kullanım</label>
                <select id="kullanim" name="kullanim" className="rounded-md border px-3 py-2">
                  <option>Bireysel</option>
                  <option>Ticari</option>
                </select>
              </div>
            </div>
          </>
        )}
        {brans === "Konut/DASK" && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-1">
                <label className="text-sm" htmlFor="il">İl</label>
                <input id="il" name="il" className="rounded-md border px-3 py-2" />
              </div>
              <div className="grid gap-1">
                <label className="text-sm" htmlFor="ilce">İlçe</label>
                <input id="ilce" name="ilce" className="rounded-md border px-3 py-2" />
              </div>
            </div>
            <div className="grid gap-1">
              <label className="text-sm" htmlFor="adres">Adres</label>
              <input id="adres" name="adres" className="rounded-md border px-3 py-2" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="grid gap-1">
                <label className="text-sm" htmlFor="m2">m²</label>
                <input id="m2" name="m2" className="rounded-md border px-3 py-2" />
              </div>
              <div className="grid gap-1">
                <label className="text-sm" htmlFor="yapiYili">Yapı Yılı</label>
                <input id="yapiYili" name="yapiYili" className="rounded-md border px-3 py-2" />
              </div>
              <div className="grid gap-1">
                <label className="text-sm" htmlFor="sigortaTuru">Sigorta Türü</label>
                <select id="sigortaTuru" name="sigortaTuru" className="rounded-md border px-3 py-2">
                  <option>Konut</option>
                  <option>DASK</option>
                  <option>Konut + DASK</option>
                </select>
              </div>
            </div>
          </>
        )}
        {brans === "Sağlık" && (
          <>
            <div className="grid grid-cols-3 gap-3">
              <div className="grid gap-1">
                <label className="text-sm" htmlFor="dogumYili">Doğum Yılı</label>
                <input id="dogumYili" name="dogumYili" className="rounded-md border px-3 py-2" />
              </div>
              <div className="grid gap-1">
                <label className="text-sm" htmlFor="cinsiyet">Cinsiyet</label>
                <select id="cinsiyet" name="cinsiyet" className="rounded-md border px-3 py-2">
                  <option>Erkek</option>
                  <option>Kadın</option>
                </select>
              </div>
              <div className="grid gap-1">
                <label className="text-sm" htmlFor="sgk">SGK</label>
                <select id="sgk" name="sgk" className="rounded-md border px-3 py-2">
                  <option>Var</option>
                  <option>Yok</option>
                </select>
              </div>
            </div>
          </>
        )}
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="mesaj">
            Not
          </label>
          <textarea id="mesaj" name="mesaj" rows={4} className="rounded-md border px-3 py-2" />
        </div>
        <label className="flex items-start gap-2 text-sm">
          <input type="checkbox" name="kvkk" value="on" required />
          <span>
            <a className="underline" href="/kvkk" target="_blank">
              KVKK Aydınlatma Metni
            </a>
            &apos;ni okudum ve onaylıyorum.
          </span>
        </label>
        <button className="rounded-md bg-zinc-900 px-5 py-3 text-white">Gönder</button>
      </form>
    </>
  );
}