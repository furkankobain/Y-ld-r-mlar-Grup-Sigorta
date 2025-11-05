import Link from "next/link";

export const metadata = {
  title: "Sağlık Sigortası",
  description: "Bireysel ve Tamamlayıcı Sağlık sigortalarında geniş anlaşmalı ağ ve uygun primler.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Sağlık Sigortası</h1>
      <p className="mt-3 text-zinc-700">
        Tamamlayıcı ve Özel Sağlık sigortalarında ihtiyaçlarınıza uygun planları karşılaştırır, en avantajlı
        alternatifi sunarız. Anlaşmalı hastaneler ve kapsam hakkında detaylı bilgi için bize ulaşın.
      </p>
      <div className="mt-6">
        <Link href="/teklif-al" className="inline-flex rounded-md bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800">
          Sağlık için Teklif Al
        </Link>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-medium">Sık Sorulanlar</h2>
        <div className="mt-4 grid gap-3">
          {[
            { q: "Tamamlayıcı sağlık nedir?", a: "SGK ile anlaşmalı özel hastanelerde fark ücretini karşılar." },
            { q: "Bekleme süresi var mı?", a: "Planlara göre değişir; detay için bize ulaşın." },
          ].map((i) => (
            <details key={i.q} className="rounded-lg border bg-white p-4">
              <summary className="cursor-pointer font-medium">{i.q}</summary>
              <p className="mt-2 text-sm text-zinc-600">{i.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
