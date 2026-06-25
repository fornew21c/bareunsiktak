"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { products, type Category } from "@/lib/products";

type Filter = "all" | Category;

const tabs: { key: Filter; label: string; emoji: string }[] = [
  { key: "all", label: "전체", emoji: "🍽️" },
  { key: "sandwich", label: "수제 샌드위치", emoji: "🥪" },
  { key: "banchan", label: "주문제작 반찬", emoji: "🥗" },
];

export default function Menu() {
  const [filter, setFilter] = useState<Filter>("all");
  const list = products.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="menu" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold tracking-wide text-clay">
            오늘의 메뉴
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">
            매일 아침, 새로 만드는 식탁
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/55">
            주문해주신 만큼만 그날 조리합니다. 미리 만들어 두지 않으니
            언제나 갓 만든 신선함 그대로예요.
          </p>
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-forest/8 px-3 py-1.5 text-xs font-medium text-forest">
            🔍 카드를 누르면 전 성분 · 원산지 · 레시피를 모두 볼 수 있어요
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setFilter(t.key)}
              className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all ${
                filter === t.key
                  ? "bg-forest text-cream"
                  : "border border-ink/15 text-ink/60 hover:border-forest/40 hover:text-forest"
              }`}
            >
              <span className="mr-1">{t.emoji}</span>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
