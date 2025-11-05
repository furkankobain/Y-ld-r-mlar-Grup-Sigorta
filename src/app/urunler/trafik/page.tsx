import Link from "next/link";

export const metadata = {
  title: "Trafik Sigortası",
  description: "Zorunlu Trafik Sigortası için en iyi teklifleri alın.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Trafik Sigortası</h1>
      <p className="mt-3 text-zinc-700">
        Zorunlu Trafik Sigortası, olası kazalarda karşı tarafa verilen maddi ve bedeni zararları poliçe
        limitleri dahilinde güvence altına alır. Araç ve sürücü bilgilerinize göre en uygun fiyatı sunarız.
      </p>
      <div className="mt-6">
        <Link href="/teklif-al" className="inline-flex rounded-md bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800">
          Trafik için Teklif Al
        </Link>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-medium">Sık Sorulanlar</h2>
        <div className="mt-4 grid gap-3">
          {[
            { q: "Hasarsızlık indirimi korunur mu?", a: "Şirket ve poliçe yapısına göre değişir; koruma eklenebilir." },
            { q: "Taksit var mı?", a: "Kredi kartı ile taksit seçenekleri sunuyoruz." },
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
