import { asset } from "@/lib/asset";

export default function Story() {
  return (
    <section id="story" className="bg-cream-deep/60">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <div className="relative order-2 md:order-1">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-xl shadow-forest/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/products/egg-salad-sandwich.jpeg")}
              alt="에그샐러드 당근 샌드위치"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -right-3 -top-4 rotate-2 rounded-2xl bg-cream px-5 py-4 shadow-lg md:-right-6">
            <p className="font-display text-2xl font-bold text-forest">“</p>
            <p className="max-w-[12rem] text-sm leading-snug text-ink/70">
              내 아이에게 못 줄 건, 누구에게도 팔지 않아요.
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <p className="text-sm font-semibold tracking-wide text-clay">
            바른식탁 이야기
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold leading-snug text-ink md:text-4xl">
            모든 메뉴는
            <br />
            <span className="text-forest">아이 식판에서 시작됐어요</span>
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink/65">
            <p>
              아이를 키우며 식탁 위 모든 재료를 다시 보게 됐어요. 라벨을 읽고,
              산지를 따지고, 첨가물을 덜어내다 보니 — 정작 마음 편히 사 먹일 게
              없더라고요.
            </p>
            <p>
              그래서 직접 만들기 시작했습니다. 우리 아이에게 먹일 그 기준
              그대로, 이웃의 식탁에도 올려 드리는 마음으로요. 그게 바른식탁의
              시작이에요.
            </p>
          </div>

          <ul className="mt-7 space-y-3">
            {[
              ["👩‍🍳", "엄마가 직접 짠 레시피", "단맛·짠맛은 줄이고 재료 본연의 맛"],
              ["📦", "주문 후 당일 조리", "미리 만들어 두지 않습니다"],
              ["🧾", "재료 원산지 공개", "무엇이 들었는지 다 알려드려요"],
            ].map(([emoji, title, desc]) => (
              <li key={title} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream text-lg shadow-sm">
                  {emoji}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{title}</p>
                  <p className="text-sm text-ink/55">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
