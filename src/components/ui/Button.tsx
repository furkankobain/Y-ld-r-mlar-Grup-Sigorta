import Link from "next/link";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
};

export default function Button({ href, children, variant = "primary", className, onClick }: Props) {
  const base = "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary: "bg-zinc-800 text-white hover:bg-zinc-700 focus:ring-zinc-800",
    secondary: "border border-zinc-300 text-zinc-700 hover:bg-zinc-50 focus:ring-zinc-300",
    ghost: "text-zinc-700 hover:bg-zinc-50",
  }[variant];

  const cls = [base, styles, className].filter(Boolean).join(" ");

  if (href) return (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
