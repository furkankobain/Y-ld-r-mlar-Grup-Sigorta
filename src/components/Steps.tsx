export default function Steps() {
  const steps = [
    { n: 1, t: "Bilgilerinizi iletin", d: "Formu doldurun veya bizi arayın." },
    { n: 2, t: "Karşılaştırma", d: "Birden çok şirketten en iyi teklifleri çıkaralım." },
    { n: 3, t: "Onay & Poliçe", d: "Ödeme ve e‑imza ile aynı gün poliçenizi iletelim." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold">3 Adımda Sigorta</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="rounded-xl border bg-white p-5">
            <div className="h-10 w-10 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-semibold">{s.n}</div>
            <div className="mt-3 font-medium">{s.t}</div>
            <div className="text-sm text-zinc-600">{s.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
