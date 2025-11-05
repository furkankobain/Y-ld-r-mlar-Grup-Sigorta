import Link from "next/link";

export const metadata = {
  title: "Kasko Sigortası",
  description: "Kasko sigortası ile aracınızı geniş teminatlarla güvenceye alın.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Kasko Sigortası</h1>
      <p className="mt-3 text-zinc-700">
        Kasko; çarpma, çalınma, doğal afet gibi risklere karşı aracınızı korur. İhtiyacınıza göre genişletilmiş
        paketler ve ek teminatlar ile en uygun fiyatı sunarız.
      </p>
      <div className="mt-6">
        <Link href="/teklif-al" className="inline-flex rounded-md bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800">
          Kasko için Teklif Al
        </Link>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-medium">Sık Sorulanlar</h2>
        <div className="mt-4 grid gap-3">
          {[
            { q: "Mini hasar nedir?", a: "Küçük çaplı hasarların poliçe kapsamında limit dahilinde karşılanmasıdır." },
            { q: "İkame araç var mı?", a: "Poliçeye göre ikame araç temin edilir." },
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
