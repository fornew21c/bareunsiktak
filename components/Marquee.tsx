const items = [
  "무방부제",
  "당일 제조",
  "국산 재료 우선",
  "저염 · 저당",
  "소량 주문제작",
  "아이가 먼저 먹는",
  "정직한 식탁",
  "매일 아침 새로",
];

export default function Marquee() {
  return (
    <div className="border-y border-ink/10 bg-forest py-3.5 text-cream">
      <div className="flex overflow-hidden">
        <div className="marquee flex shrink-0 items-center gap-8 pr-8 whitespace-nowrap">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="flex items-center gap-8 text-sm font-medium">
              {t}
              <span className="text-apricot-soft">✦</span>
            </span>
          ))}
        </div>
        <div
          className="marquee flex shrink-0 items-center gap-8 pr-8 whitespace-nowrap"
          aria-hidden
        >
          {[...items, ...items].map((t, i) => (
            <span key={i} className="flex items-center gap-8 text-sm font-medium">
              {t}
              <span className="text-apricot-soft">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
