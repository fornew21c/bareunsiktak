"use client";

import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";

const links = [
  { href: "#menu", label: "메뉴" },
  { href: "#transparency", label: "투명성" },
  { href: "#story", label: "이야기" },
  { href: "#order", label: "주문제작" },
];

export default function Header() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-ink/5 shadow-[0_6px_30px_-20px_rgba(42,38,34,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-forest text-cream text-lg">
            🌱
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold text-forest">
              바른식탁
            </span>
            <span className="block text-[10px] tracking-[0.2em] text-ink/50">
              BAREUN SIKTAK
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-forest"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="relative flex items-center gap-2 rounded-full bg-forest px-4 py-2.5 text-sm font-medium text-cream transition-transform hover:scale-[1.03] active:scale-95"
          aria-label="장바구니 열기"
        >
          <span>🧺</span>
          <span className="hidden sm:inline">장바구니</span>
          {count > 0 && (
            <span className="grid h-5 min-w-5 place-items-center rounded-full bg-apricot px-1 text-xs font-bold text-ink">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
