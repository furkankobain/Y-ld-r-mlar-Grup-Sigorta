import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_circle_at_20%_10%,#e4e4e7,transparent_60%),radial-gradient(600px_circle_at_90%_30%,#f4f4f5,transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-zinc-700 bg-white/80">
              Güvenilir acentelik • Hızlı teklif
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              Yıldırımlar Grup Sigorta
            </h1>
            <p className="mt-4 text-lg text-zinc-600 max-w-xl">
              Trafik, Kasko, Konut/DASK, Sağlık ve daha fazlasında karşılaştırmalı teklif, hızlı süreç ve güvenilir hizmet.
            </p>
            <div className="mt-6 flex gap-3">
              <Button href="/teklif-al">Teklif Al</Button>
              <Button href="#urunler" variant="secondary">Ürünleri Gör</Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-sm text-zinc-600">
              <div className="rounded-xl border bg-white/70 p-4"><div className="text-2xl font-semibold text-zinc-900">10+</div>Şirket</div>
              <div className="rounded-xl border bg-white/70 p-4"><div className="text-2xl font-semibold text-zinc-900">24s</div>Hızlı dönüş</div>
              <div className="rounded-xl border bg-white/70 p-4"><div className="text-2xl font-semibold text-zinc-900">%100</div>Memnuniyet</div>
            </div>
          </div>
          <div className="rounded-2xl border bg-white/80 p-6 shadow-sm">
            <ul className="grid gap-4 text-zinc-700">
              <li>• Uzman danışmanlık ve hasar desteği</li>
              <li>• Birçok sigorta şirketinden en iyi fiyat</li>
              <li>• KVKK uyumlu form ve hızlı geri dönüş</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ÜRÜNLER */}
      <section id="urunler" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Öne Çıkan Ürünler</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { href: "/urunler/trafik", title: "Trafik Sigortası", desc: "Zorunlu trafik güvencesi", icon: "🚗" },
            { href: "/urunler/kasko", title: "Kasko", desc: "Aracınızı tam koruma", icon: "🛡️" },
            { href: "/urunler/konut-dask", title: "Konut/DASK", desc: "Eviniz ve eşyalarınız", icon: "🏠" },
            { href: "/urunler/saglik", title: "Sağlık", desc: "Bireysel ve tamamlayıcı", icon: "🩺" },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="group rounded-xl border bg-white p-5 hover:shadow-sm transition-shadow">
              <div className="text-2xl">{c.icon}</div>
              <div className="mt-2 font-medium group-hover:underline decoration-2 underline-offset-4">{c.title}</div>
              <div className="text-sm text-zinc-600">{c.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* SSS */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-semibold">Sık Sorulan Sorular</h2>
        <div className="mt-6 grid gap-3">
          {[
            {
              q: "Teklif ne kadar sürede gelir?",
              a: "Çoğu branşta aynı gün içinde; trafik/kasko gibi ürünlerde dakikalar içinde dönüş yapıyoruz.",
            },
            {
              q: "Hasar anında destek veriyor musunuz?",
              a: "Evet, hasar ihbarı ve süreç takibinde uçtan uca destek veriyoruz.",
            },
            {
              q: "Ödeme seçenekleri?",
              a: "Taksit/peşin ve online ödeme alternatifleri sunuyoruz.",
            },
          ].map((i) => (
            <details key={i.q} className="rounded-xl border bg-white p-4">
              <summary className="cursor-pointer font-medium">{i.q}</summary>
              <p className="mt-2 text-sm text-zinc-600">{i.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
