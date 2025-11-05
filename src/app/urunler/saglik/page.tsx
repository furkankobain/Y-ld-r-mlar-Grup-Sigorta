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
    </div>
  );
}
