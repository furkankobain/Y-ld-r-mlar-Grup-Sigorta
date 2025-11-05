import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Yıldırımlar Grup Sigorta
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Trafik, Kasko, Konut/DASK, Sağlık ve daha fazlasında karşılaştırmalı teklif,
            hızlı süreç ve güvenilir acentelik hizmeti.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/teklif-al" className="inline-flex items-center rounded-md bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800">
              Teklif Al
            </Link>
            <Link href="#urunler" className="inline-flex items-center rounded-md border px-5 py-3 hover:bg-zinc-50">
              Ürünleri Gör
            </Link>
          </div>
        </div>
        <div className="rounded-xl border p-6">
          <ul className="grid gap-4 text-zinc-700">
            <li>• Uzman danışmanlık ve hasar desteği</li>
            <li>• Birçok sigorta şirketinden en iyi fiyat</li>
            <li>• KVKK uyumlu form ve hızlı geri dönüş</li>
          </ul>
        </div>
      </section>

      <section id="urunler" className="mt-16">
        <h2 className="text-2xl font-semibold">Öne Çıkan Ürünler</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { href: "/urunler/trafik", title: "Trafik Sigortası", desc: "Zorunlu trafik güvencesi" },
            { href: "/urunler/kasko", title: "Kasko", desc: "Aracınızı tam koruma" },
            { href: "/urunler/konut-dask", title: "Konut/DASK", desc: "Eviniz ve eşyalarınız" },
            { href: "/urunler/saglik", title: "Sağlık", desc: "Bireysel ve tamamlayıcı" },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="rounded-lg border p-5 hover:bg-zinc-50"
            >
              <div className="font-medium">{c.title}</div>
              <div className="text-sm text-zinc-600">{c.desc}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
