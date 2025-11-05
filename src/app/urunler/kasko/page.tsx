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
    </div>
  );
}
