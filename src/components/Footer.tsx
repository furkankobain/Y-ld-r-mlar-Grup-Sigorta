import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3 text-sm text-zinc-600">
        <div>
          <div className="font-medium text-zinc-900">{siteConfig.name}</div>
          <div className="mt-2">{siteConfig.address.line1}</div>
          <div>
            {siteConfig.address.postalCode} {siteConfig.address.city}/{siteConfig.address.region}
          </div>
        </div>
        <div>
          <div>Tel: <a className="underline" href={`tel:${siteConfig.phone.tel}`}>{siteConfig.phone.display}</a></div>
          <div>E-posta: <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
          <div className="mt-2">Çalışma Saatleri: {siteConfig.openingHours.join(", ")}</div>
        </div>
        <div className="flex flex-col gap-2">
          <a href="/kvkk" className="hover:text-zinc-900">KVKK Aydınlatma Metni</a>
          <a href="/cerez-politikasi" className="hover:text-zinc-900">Çerez Politikası</a>
          <a href="/sitemap.xml" className="hover:text-zinc-900">Site Haritası</a>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-zinc-500">© {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.</div>
    </footer>
  );
}
