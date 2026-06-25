const items = [
  {
    emoji: "🌾",
    title: "정직한 재료",
    desc: "국산 재료를 우선으로, 보존료·합성첨가물 없이 만듭니다.",
  },
  {
    emoji: "🧂",
    title: "저염 · 저당",
    desc: "아이 입맛을 기준으로 간을 맞춰 자극적이지 않아요.",
  },
  {
    emoji: "🍳",
    title: "당일 제조",
    desc: "주문하신 만큼만 그날 아침 새로 조리해 보냅니다.",
  },
  {
    emoji: "❄️",
    title: "안심 콜드체인",
    desc: "신선함 그대로, 냉장 포장으로 문 앞까지 안전하게.",
  },
];

export default function Promise() {
  return (
    <section id="promise" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-wide text-clay">
          바른식탁의 약속
        </p>
        <h2 className="mx-auto mt-2 max-w-xl font-display text-3xl font-bold leading-snug text-ink md:text-4xl">
          만드는 사람이 제일 먼저 먹습니다
        </h2>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-3xl border border-ink/8 bg-cream p-6 transition-all hover:-translate-y-1 hover:border-forest/20 hover:shadow-lg hover:shadow-forest/10"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-apricot-soft/50 text-2xl">
              {it.emoji}
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">
              {it.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/55">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
