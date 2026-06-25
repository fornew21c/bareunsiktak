const cards = [
  {
    emoji: "🌾",
    title: "전 성분 · 원산지 공개",
    desc: "들어가는 모든 재료를 산지까지 그대로 적어요. 한우는 이력번호까지 안내드립니다.",
  },
  {
    emoji: "🚫",
    title: "무첨가 선언",
    desc: "합성보존료·MSG·인공색소·정제설탕 — 빼는 것까지 메뉴마다 명확히 밝힙니다.",
  },
  {
    emoji: "👩‍🍳",
    title: "레시피 공개",
    desc: "어떻게 만드는지 조리 과정을 단계별로 보여드려요. 숨길 게 없으니까요.",
  },
];

export default function Transparency() {
  return (
    <section id="transparency" className="relative overflow-hidden">
      <div className="paper-noise absolute inset-0 -z-10 opacity-60" />
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-cream px-4 py-1.5 text-xs font-medium tracking-wide text-forest">
            🔍 투명성
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-snug text-ink md:text-4xl">
            숨기지 않습니다.
            <br />
            <span className="text-forest">전부 보여드릴게요.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
            믿을 수 있는 식품은 ‘공개’에서 시작된다고 믿어요. 모든 메뉴의
            재료·원산지·레시피를 빠짐없이 공개합니다. 메뉴 카드를 누르면 그
            음식에 들어간 모든 것을 직접 확인하실 수 있어요.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-ink/8 bg-cream p-7 text-center transition-all hover:-translate-y-1 hover:border-forest/20 hover:shadow-lg hover:shadow-forest/10"
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-apricot-soft/50 text-3xl">
                {c.emoji}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#menu"
            className="rounded-full bg-forest px-7 py-3.5 text-sm font-bold text-cream shadow-lg shadow-forest/20 transition-transform hover:scale-[1.03] active:scale-95"
          >
            메뉴에서 직접 확인하기
          </a>
        </div>
      </div>
    </section>
  );
}
