export const metadata = { title: "İletişim" };

import { siteConfig } from "@/config/site";

export default function Page() {
  const q = encodeURIComponent("Saracalar Mah., Otonomi Sitesi, A1 Blok, Akyurt, Ankara");
  const mapSrc = `https://www.google.com/maps?q=${q}&output=embed`;
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-semibold">İletişim</h1>
        <div className="mt-4 text-zinc-700 space-y-2">
          <div><span className="font-medium">Adres:</span> {siteConfig.address.line1}, {siteConfig.address.postalCode} {siteConfig.address.city}/{siteConfig.address.region}</div>
          <div><span className="font-medium">Telefon:</span> <a className="underline" href={`tel:${siteConfig.phone.tel}`}>{siteConfig.phone.display}</a></div>
          <div><span className="font-medium">E‑posta:</span> <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
          <div><span className="font-medium">Çalışma Saatleri:</span> {siteConfig.openingHours.join(", ")}</div>
        </div>
        <div className="mt-6">
          <a href={`https://wa.me/${siteConfig.phone.whatsapp}`} target="_blank" className="inline-flex rounded-md bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800">WhatsApp’tan Yaz</a>
        </div>
      </div>
      <div>
        <iframe title="Harita" src={mapSrc} className="w-full h-[380px] rounded-lg border" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}
