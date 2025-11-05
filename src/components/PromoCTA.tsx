import Button from "@/components/ui/Button";

export default function PromoCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-2xl border bg-gradient-to-r from-zinc-700 to-zinc-600 text-white p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="text-xl font-semibold">Hızlı teklif almak ister misiniz?</div>
          <p className="text-white/80 text-sm">Bilgilerinizi iletin, aynı gün dönüş yapalım.</p>
        </div>
        <Button href="/teklif-al" className="bg-white text-zinc-800 hover:bg-white/90">Teklif Al</Button>
      </div>
    </section>
  );
}
