"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";
import { won, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-ink/8 bg-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/10">
      <div
        className="relative aspect-[5/4] overflow-hidden"
        style={{ background: product.accent }}
      >
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="grid h-full w-full place-items-center text-6xl transition-transform duration-500 group-hover:scale-110">
            {product.emoji}
          </span>
        )}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {product.badges.slice(0, 2).map((b) => (
            <span
              key={b}
              className="rounded-full bg-cream/90 px-2.5 py-1 text-[11px] font-medium text-forest backdrop-blur-sm"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-snug text-ink">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-apricot-soft">
          <span className="text-clay/80">{product.tagline}</span>
        </p>
        <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-ink/55">
          {product.description}
        </p>

        <div className="mt-4 flex items-end justify-between pt-2">
          <div>
            <span className="font-display text-xl font-bold text-forest">
              {won(product.price)}
            </span>
            <span className="ml-1 text-xs text-ink/45">/ {product.unit}</span>
          </div>
          <button
            onClick={onAdd}
            className={`rounded-full px-4 py-2.5 text-sm font-bold transition-all active:scale-95 ${
              added
                ? "bg-apricot text-ink"
                : "bg-forest text-cream hover:bg-forest-soft"
            }`}
          >
            {added ? "담았어요 ✓" : "담기 +"}
          </button>
        </div>
      </div>
    </article>
  );
}
