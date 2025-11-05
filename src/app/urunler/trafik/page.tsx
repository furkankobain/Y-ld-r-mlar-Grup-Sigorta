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
    </div>
  );
}
