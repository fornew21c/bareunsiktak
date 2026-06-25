"use client";

import { useState } from "react";

const planTags = [
  "이유식 완료기",
  "유아 (만 1~3세)",
  "유치원생",
  "초등 도시락",
  "온 가족",
];

const avoidTags = [
  "계란",
  "우유",
  "밀(글루텐)",
  "견과류",
  "갑각류",
  "대두",
  "매운맛",
];

export default function CustomOrder() {
  const [plan, setPlan] = useState<string | null>(null);
  const [avoid, setAvoid] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleAvoid = (t: string) =>
    setAvoid((cur) =>
      cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t],
    );

  return (
    <section id="order" className="bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-28">
        <div>
          <p className="text-sm font-semibold tracking-wide text-apricot-soft">
            주문제작
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold leading-snug md:text-4xl">
            우리 아이에게 꼭 맞는
            <br />
            식단을 짜 드려요
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-cream/75">
            알레르기, 아이 연령, 식사량을 알려주시면 바른식탁이 일주일
            반찬·샌드위치 구성을 제안해 드려요. 정해진 세트가 아니라, 우리 집
            식탁에 맞춘 한 끼.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-cream/80">
            {[
              "1:1 맞춤 식단 제안 (무료)",
              "알레르기 재료 완전 배제",
              "주 1~3회 정기 배송 선택",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-apricot text-ink text-xs font-bold">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] bg-cream p-6 text-ink shadow-2xl md:p-8">
          {submitted ? (
            <div className="flex h-full min-h-[22rem] flex-col items-center justify-center gap-4 text-center">
              <div className="text-5xl">💌</div>
              <h3 className="font-display text-2xl font-bold text-forest">
                신청이 접수되었어요!
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-ink/65">
                알려주신 내용을 바탕으로 맞춤 식단을 짜서,
                <br /> 1영업일 안에 연락드릴게요.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setPlan(null);
                  setAvoid([]);
                }}
                className="mt-2 rounded-full border border-forest/30 px-5 py-2.5 text-sm font-medium text-forest"
              >
                다시 작성하기
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-bold text-ink">
                  누가 먹을 식단인가요?
                </label>
                <div className="flex flex-wrap gap-2">
                  {planTags.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setPlan(t)}
                      className={`rounded-full px-3.5 py-2 text-sm transition-all ${
                        plan === t
                          ? "bg-forest text-cream"
                          : "border border-ink/15 text-ink/65 hover:border-forest/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-ink">
                  피해야 할 재료가 있나요?
                </label>
                <div className="flex flex-wrap gap-2">
                  {avoidTags.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => toggleAvoid(t)}
                      className={`rounded-full px-3.5 py-2 text-sm transition-all ${
                        avoid.includes(t)
                          ? "bg-clay text-cream"
                          : "border border-ink/15 text-ink/65 hover:border-clay/50"
                      }`}
                    >
                      {avoid.includes(t) ? "✕ " : ""}
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-bold text-ink">
                    연락처
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="010-0000-0000"
                    className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/15"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-bold text-ink">
                    희망 배송 주기
                  </label>
                  <select className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/15">
                    <option>주 1회</option>
                    <option>주 2회</option>
                    <option>주 3회</option>
                    <option>한 번만 (단건)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-bold text-ink">
                  요청사항 <span className="font-normal text-ink/40">(선택)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="예) 채소를 잘 안 먹는 아이라 친근한 메뉴 위주로 부탁드려요."
                  className="w-full resize-none rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/15"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-forest py-3.5 text-sm font-bold text-cream transition-transform hover:scale-[1.01] active:scale-95"
              >
                맞춤 식단 신청하기
              </button>
              <p className="text-center text-[11px] text-ink/40">
                신청은 무료이며, 식단 제안 후 결제가 진행됩니다.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
