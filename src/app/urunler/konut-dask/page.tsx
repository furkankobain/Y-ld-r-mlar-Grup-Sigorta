import Link from "next/link";

export const metadata = {
  title: "Konut Sigortası & DASK",
  description: "Eviniz, eşyalarınız ve deprem riskine karşı Konut sigortası ve DASK.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Konut Sigortası & DASK</h1>
      <p className="mt-3 text-zinc-700">
        Zorunlu Deprem Sigortası (DASK) ve isteğe bağlı Konut Sigortası ile konutunuzu ve eşyalarınızı yangın,
        hırsızlık, su baskını gibi risklere karşı güvence altına alın.
      </p>
      <div className="mt-6">
        <Link href="/teklif-al" className="inline-flex rounded-md bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800">
          Konut/DASK için Teklif Al
        </Link>
      </div>
    </div>
  );
}
