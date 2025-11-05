"use client";

const BRANSLAR = ["Trafik", "Kasko", "Konut/DASK", "Sağlık", "Diğer"] as const;

export default function TeklifForm() {
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
          <select id="brans" name="brans" className="rounded-md border px-3 py-2">
            {BRANSLAR.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="plakaOrTc">
            Plaka / TCKN (opsiyonel)
          </label>
          <input id="plakaOrTc" name="plakaOrTc" className="rounded-md border px-3 py-2" />
        </div>
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