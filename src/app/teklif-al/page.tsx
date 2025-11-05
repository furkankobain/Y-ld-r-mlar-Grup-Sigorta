import TeklifForm from "@/components/TeklifForm";

export default function Page({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const status = (searchParams?.success as string | undefined) || "";

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Teklif Al</h1>
      <p className="mt-2 text-zinc-700">Bilgilerinizi iletin, size özel en iyi teklifi sunalım.</p>

      <TeklifForm />

      {status === "1" && (
        <div className="mt-4 text-sm text-green-600">Talebiniz alındı. En kısa sürede dönüş yapacağız.</div>
      )}
    </div>
  );
}
