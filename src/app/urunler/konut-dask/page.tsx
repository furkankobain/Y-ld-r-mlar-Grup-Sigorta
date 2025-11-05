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
<Link href="/teklif-al?brans=Konut/DASK" className="inline-flex rounded-md bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800">
          Konut/DASK için Teklif Al
        </Link>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-medium">Sık Sorulanlar</h2>
        <div className="mt-4 grid gap-3">
          {[
            { q: "DASK zorunlu mu?", a: "Evet, deprem teminatı için zorunludur; konut sigortası isteğe bağlıdır." },
            { q: "Eşya teminatı kapsamı?", a: "Yangın, hırsızlık, su baskını gibi riskler poliçeye göre karşılanır." },
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
