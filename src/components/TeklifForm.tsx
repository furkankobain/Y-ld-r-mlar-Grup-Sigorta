"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const BRANSLAR = ["Trafik", "Kasko", "Konut/DASK", "Sağlık", "Diğer"] as const;

export default function TeklifForm() {
  const params = useSearchParams();
  const defaultBrans = (params.get("brans") || "Trafik") as (typeof BRANSLAR)[number];
  const [brans, setBrans] = useState<(typeof BRANSLAR)[number]>(defaultBrans);
  const [noPlate, setNoPlate] = useState(false);
  const [a, b] = [Math.floor(2 + Math.random() * 8), Math.floor(2 + Math.random() * 8)];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const fd = new FormData(e.currentTarget);
      const sum = Number(fd.get("captcha"));
      if (sum !== a + b) {
        alert("Güvenlik kodu hatalı");
        return;
      }
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
    <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="ad">Ad *</label>
          <input id="ad" name="ad" required className="rounded-md border px-3 py-2" placeholder="Adınız..." />
        </div>
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="soyad">Soyad *</label>
          <input id="soyad" name="soyad" required className="rounded-md border px-3 py-2" placeholder="Soyadınız..." />
        </div>
      </div>

      <div className="grid gap-1">
        <label className="text-sm" htmlFor="brans">Branş</label>
        <select
          id="brans"
          name="brans"
          className="rounded-md border px-3 py-2"
          value={brans}
          onChange={(e) => setBrans(e.target.value as any)}
        >
          {BRANSLAR.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="tckn">TC Kimlik No *</label>
          <input id="tckn" name="tckn" required className="rounded-md border px-3 py-2" placeholder="TC Kimlik Numaranız..." />
        </div>
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="vergiNo">Vergi No</label>
          <input id="vergiNo" name="vergiNo" className="rounded-md border px-3 py-2" placeholder="Vergi Numaranız..." />
        </div>
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="meslek">Mesleğiniz</label>
          <input id="meslek" name="meslek" className="rounded-md border px-3 py-2" />
        </div>
      </div>

      {brans === "Trafik" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
            <div className="grid gap-1">
              <label className="text-sm" htmlFor="plaka">Plaka *</label>
              <input id="plaka" name="plaka" required={!noPlate} disabled={noPlate} className="rounded-md border px-3 py-2" placeholder="06 ABC 123" />
            </div>
            <label className="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" onChange={(e)=>setNoPlate(e.target.checked)} /> Plakasız Araç
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="grid gap-1">
              <label className="text-sm" htmlFor="ruhsat">Ruhsat Seri ve Sıra No</label>
              <input id="ruhsat" name="ruhsat" className="rounded-md border px-3 py-2" placeholder="ABC123456" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm" htmlFor="asbis">Asbis Referans No</label>
              <input id="asbis" name="asbis" className="rounded-md border px-3 py-2" />
            </div>
          </div>
          <div className="rounded-md border bg-zinc-50 p-3 text-xs text-zinc-600">Bu form ile "Kasko Teklifi" de almak istiyorum <input type="checkbox" name="crossKasko" className="ml-2" /></div>
        </>
      )}

      {brans === "Kasko" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
            <div className="grid gap-1">
              <label className="text-sm" htmlFor="plaka">Plaka *</label>
              <input id="plaka" name="plaka" required={!noPlate} disabled={noPlate} className="rounded-md border px-3 py-2" />
            </div>
            <label className="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" onChange={(e)=>setNoPlate(e.target.checked)} /> Plakasız Araç
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="grid gap-1">
              <label className="text-sm" htmlFor="marka">Araç Markası *</label>
              <input id="marka" name="marka" required className="rounded-md border px-3 py-2" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm" htmlFor="model">Araç Modeli *</label>
              <input id="model" name="model" required className="rounded-md border px-3 py-2" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm" htmlFor="yil">Araç Yılı *</label>
              <input id="yil" name="yil" required className="rounded-md border px-3 py-2" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="grid gap-1">
              <label className="text-sm" htmlFor="ruhsat">Ruhsat Seri/Sıra No</label>
              <input id="ruhsat" name="ruhsat" className="rounded-md border px-3 py-2" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm" htmlFor="asbis">Asbis Ref. No</label>
              <input id="asbis" name="asbis" className="rounded-md border px-3 py-2" />
            </div>
          </div>
          <div className="rounded-md border bg-zinc-50 p-3 text-xs text-zinc-600">Bu form ile "Trafik Sigortası Teklifi" de almak istiyorum <input type="checkbox" name="crossTrafik" className="ml-2" /></div>
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
        <label className="text-sm" htmlFor="mesaj">Not</label>
        <textarea id="mesaj" name="mesaj" rows={4} className="rounded-md border px-3 py-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="email">E‑posta Adresiniz *</label>
          <input id="email" type="email" name="email" required className="rounded-md border px-3 py-2" placeholder="E-posta Adresiniz..." />
        </div>
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="telefon">Telefon Numaranız *</label>
          <input id="telefon" name="telefon" required className="rounded-md border px-3 py-2" placeholder="Telefon Numaranız..." />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
        <div className="text-sm text-zinc-700">Güvenlik Kodu: {a} + {b} = ?</div>
        <input name="captcha" className="rounded-md border px-3 py-2" placeholder="Cevap" />
      </div>

      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" name="kvkk" value="on" required />
        <span>
          <a className="underline" href="/kvkk" target="_blank">KVKK Aydınlatma Metni</a>&apos;ni okudum ve onaylıyorum.
        </span>
      </label>
      <button className="rounded-md bg-zinc-900 px-5 py-3 text-white">Gönder</button>
    </form>
  );
}
        </label>
        <button className="rounded-md bg-zinc-900 px-5 py-3 text-white">Gönder</button>
      </form>
    </>
  );
}