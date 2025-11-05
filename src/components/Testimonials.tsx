type Testimonial = { name: string; text: string };

const DATA: Testimonial[] = [
  { name: "F. Kaymak", text: "Kasko teklifleri 10 dk içinde geldi, süreç çok hızlı ilerledi." },
  { name: "D. Dinç", text: "Hasar sürecinde her adımda bilgilendirildim, teşekkürler." },
  { name: "M. Yıldırım", text: "Trafik + konut paketi ile uygun fiyat aldım." },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold">Müşterilerimiz ne diyor?</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {DATA.map((i) => (
          <figure key={i.name} className="rounded-xl border bg-white p-5">
            <blockquote className="text-sm text-zinc-700">“{i.text}”</blockquote>
            <figcaption className="mt-3 text-sm font-medium text-zinc-900">{i.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
