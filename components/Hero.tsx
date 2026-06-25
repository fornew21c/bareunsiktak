"use client";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="paper-noise absolute inset-0 -z-10" />
      <div
        className="absolute -right-32 -top-24 -z-10 h-[28rem] w-[28rem] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle,#f6d2ab,transparent 70%)" }}
      />
      <div
        className="absolute -left-24 top-40 -z-10 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle,#bcd0bd,transparent 70%)" }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-[1.05fr_1fr] md:px-8 md:pb-24 md:pt-16">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-cream px-4 py-1.5 text-xs font-medium tracking-wide text-forest">
            🌿 소량 주문제작 · 당일 제조
          </span>
          <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.12] text-ink md:text-6xl">
            우리 아이에게
            <br />
            <span className="text-forest">먹일 거니까.</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/65 md:text-lg">
            첨가물 대신 정직한 재료로, 매일 아침 새로 만드는
            <br className="hidden md:block" /> 반찬과 수제 샌드위치. 만드는 사람이
            제일 먼저 아이에게 먹입니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#menu"
              className="rounded-full bg-forest px-7 py-3.5 text-sm font-bold text-cream shadow-lg shadow-forest/20 transition-transform hover:scale-[1.03] active:scale-95"
            >
              오늘의 메뉴 보기
            </a>
            <a
              href="#story"
              className="rounded-full border border-forest/25 px-7 py-3.5 text-sm font-medium text-forest transition-colors hover:bg-forest/5"
            >
              바른식탁 이야기
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-ink/55">
            <div>
              <div className="font-display text-2xl font-bold text-forest">
                무방부제
              </div>
              <div className="text-xs">정직한 재료만</div>
            </div>
            <div className="h-8 w-px bg-ink/10" />
            <div>
              <div className="font-display text-2xl font-bold text-forest">
                당일제조
              </div>
              <div className="text-xs">주문 후 조리</div>
            </div>
            <div className="h-8 w-px bg-ink/10" />
            <div>
              <div className="font-display text-2xl font-bold text-forest">
                저염·저당
              </div>
              <div className="text-xs">아이 입맛 기준</div>
            </div>
          </div>
        </div>

        <div className="reveal relative" style={{ animationDelay: "0.12s" }}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/15 md:rounded-[2.5rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/products/salmon-sandwich.jpeg"
              alt="노르웨이 연어 루꼴라 샌드위치"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl bg-cream px-4 py-3 shadow-xl md:-left-8">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-apricot-soft text-xl">
              🥪
            </span>
            <div className="leading-tight">
              <p className="text-xs text-ink/50">오늘의 인기</p>
              <p className="text-sm font-bold text-ink">연어 루꼴라 샌드위치</p>
            </div>
          </div>
          <div className="absolute -right-2 top-6 rotate-3 rounded-2xl bg-forest px-4 py-3 text-cream shadow-xl md:-right-6">
            <p className="font-display text-lg font-bold leading-none">100%</p>
            <p className="text-[11px] opacity-80">정직한 재료</p>
          </div>
        </div>
      </div>
    </section>
  );
}
