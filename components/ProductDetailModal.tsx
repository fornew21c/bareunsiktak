"use client";

import { useEffect } from "react";
import { useProductDetail } from "./ProductDetailProvider";
import { useCart } from "./CartProvider";
import { asset } from "@/lib/asset";
import { won, CATEGORY_LABEL } from "@/lib/products";

export default function ProductDetailModal() {
  const { product, close } = useProductDetail();
  const { add } = useCart();

  useEffect(() => {
    document.body.style.overflow = product ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [product, close]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center px-0 pt-[max(3rem,env(safe-area-inset-top))] sm:items-center sm:p-4 sm:pt-4">
      <div
        onClick={close}
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        aria-hidden
      />
      <div className="relative z-10 flex max-h-[88dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-[2rem] bg-cream shadow-2xl sm:max-h-[88dvh] sm:rounded-[2rem]">
        {/* drag handle (mobile close affordance) */}
        <button
          onClick={close}
          className="absolute left-1/2 top-2 z-20 -translate-x-1/2 p-2 sm:hidden"
          aria-label="닫기"
        >
          <span className="block h-1.5 w-12 rounded-full bg-cream/80 shadow" />
        </button>

        {/* header image / accent */}
        <div
          className="relative h-44 shrink-0 sm:h-52"
          style={{ background: product.accent }}
        >
          {product.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={asset(product.image)}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="grid h-full w-full place-items-center text-7xl">
              {product.emoji}
            </span>
          )}
          <button
            onClick={close}
            className="absolute right-3 top-3 z-20 grid h-11 w-11 place-items-center rounded-full bg-cream/95 text-lg text-ink shadow-md backdrop-blur-sm transition hover:bg-cream active:scale-95"
            aria-label="닫기"
          >
            ✕
          </button>
          <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium text-forest backdrop-blur-sm">
            {CATEGORY_LABEL[product.category]}
          </span>
        </div>

        {/* scroll body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          <h2 className="font-display text-2xl font-bold text-ink">
            {product.name}
          </h2>
          <p className="mt-1 text-sm text-clay">{product.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink/65">
            {product.description}
          </p>

          {/* 전 성분 + 원산지 */}
          <section className="mt-7">
            <div className="flex items-center gap-2">
              <span className="text-lg">🌾</span>
              <h3 className="font-display text-lg font-bold text-forest">
                전 성분 · 원산지 공개
              </h3>
            </div>
            <p className="mt-1 text-xs text-ink/45">
              들어가는 모든 재료를 숨김없이 공개합니다.
            </p>
            <ul className="mt-3 divide-y divide-ink/8 overflow-hidden rounded-2xl border border-ink/8">
              {product.ingredientDetails.map((ing) => (
                <li key={ing.name} className="flex flex-col gap-0.5 bg-cream px-4 py-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-sm font-semibold text-ink">
                      {ing.name}
                    </span>
                    <span className="shrink-0 text-xs font-medium text-forest-soft">
                      {ing.origin}
                    </span>
                  </div>
                  {ing.note && (
                    <span className="text-xs leading-relaxed text-ink/50">
                      {ing.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* 들어가지 않은 것 */}
          <section className="mt-7">
            <div className="flex items-center gap-2">
              <span className="text-lg">🚫</span>
              <h3 className="font-display text-lg font-bold text-forest">
                들어가지 않은 것
              </h3>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.freeFrom.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1 rounded-full border border-forest/20 bg-forest/5 px-3 py-1.5 text-xs font-medium text-forest"
                >
                  <span className="text-clay">✕</span> {f}
                </span>
              ))}
            </div>
          </section>

          {/* 만드는 과정 */}
          <section className="mt-7">
            <div className="flex items-center gap-2">
              <span className="text-lg">👩‍🍳</span>
              <h3 className="font-display text-lg font-bold text-forest">
                이렇게 만들어요
              </h3>
            </div>
            <ol className="mt-3 space-y-3">
              {product.recipe.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-apricot text-xs font-bold text-ink">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-ink/70">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          {/* 영양 + 보관 + 알레르기 */}
          <section className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-cream-deep/60 p-4">
              <h4 className="text-sm font-bold text-ink">영양 포인트</h4>
              <ul className="mt-2 space-y-1.5">
                {product.nutrition.map((n) => (
                  <li
                    key={n.label}
                    className="flex justify-between text-xs text-ink/60"
                  >
                    <span>{n.label}</span>
                    <span className="font-medium text-ink/80">{n.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-cream-deep/60 p-4">
              <h4 className="text-sm font-bold text-ink">보관 · 알레르기</h4>
              <p className="mt-2 text-xs leading-relaxed text-ink/60">
                {product.storage}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-ink/60">
                소비기한: {product.shelfLife}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-clay">
                알레르기 유발: {product.allergens.join(", ")}
              </p>
            </div>
          </section>
        </div>

        {/* sticky footer */}
        <div className="flex items-center justify-between gap-4 border-t border-ink/10 bg-cream px-6 py-4 sm:px-8">
          <div>
            <span className="font-display text-xl font-bold text-forest">
              {won(product.price)}
            </span>
            <span className="ml-1 text-xs text-ink/45">/ {product.unit}</span>
          </div>
          <button
            onClick={() => {
              add(product);
              close();
            }}
            className="rounded-full bg-forest px-6 py-3 text-sm font-bold text-cream transition-transform hover:scale-[1.02] active:scale-95"
          >
            장바구니 담기 +
          </button>
        </div>
      </div>
    </div>
  );
}
