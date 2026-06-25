"use client";

import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";
import { won } from "@/lib/products";

const DELIVERY_FREE_OVER = 30000;
const DELIVERY_FEE = 3500;

export default function CartDrawer() {
  const { lines, open, setOpen, setQty, remove, subtotal, clear, count } =
    useCart();
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const fee = subtotal === 0 || subtotal >= DELIVERY_FREE_OVER ? 0 : DELIVERY_FEE;
  const total = subtotal + fee;
  const remain = Math.max(0, DELIVERY_FREE_OVER - subtotal);

  return (
    <>
      {/* backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      {/* panel */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <h2 className="font-display text-xl font-bold text-forest">
            장바구니 {count > 0 && <span className="text-apricot">· {count}</span>}
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="grid h-9 w-9 place-items-center rounded-full text-ink/60 transition hover:bg-ink/5"
            aria-label="닫기"
          >
            ✕
          </button>
        </div>

        {done ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <div className="text-5xl">🧺</div>
            <h3 className="font-display text-2xl font-bold text-forest">
              주문이 접수되었어요!
            </h3>
            <p className="text-sm leading-relaxed text-ink/70">
              담아주신 메뉴는 주문 당일 아침, 정직한 재료로 새로 만들어
              보내드릴게요. 따뜻한 한 끼 곧 찾아갑니다.
            </p>
            <button
              onClick={() => {
                setDone(false);
                setOpen(false);
              }}
              className="mt-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-cream"
            >
              계속 둘러보기
            </button>
          </div>
        ) : lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
            <div className="text-5xl opacity-60">🥗</div>
            <p className="text-ink/60">아직 담긴 메뉴가 없어요.</p>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full border border-forest/30 px-5 py-2.5 text-sm font-medium text-forest"
            >
              메뉴 보러가기
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {lines.map((l) => (
                <div key={l.slug} className="flex gap-3">
                  <div
                    className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl"
                    style={{ background: l.accent }}
                  >
                    {l.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={l.image}
                        alt={l.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="grid h-full w-full place-items-center text-3xl">
                        {l.emoji}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-semibold leading-snug text-ink">
                        {l.name}
                      </p>
                      <button
                        onClick={() => remove(l.slug)}
                        className="text-xs text-ink/40 hover:text-clay"
                        aria-label="삭제"
                      >
                        삭제
                      </button>
                    </div>
                    <p className="text-xs text-ink/45">{l.unit}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-ink/15">
                        <button
                          onClick={() => setQty(l.slug, l.qty - 1)}
                          className="grid h-8 w-8 place-items-center text-ink/60"
                          aria-label="수량 감소"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm font-medium">
                          {l.qty}
                        </span>
                        <button
                          onClick={() => setQty(l.slug, l.qty + 1)}
                          className="grid h-8 w-8 place-items-center text-ink/60"
                          aria-label="수량 증가"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-bold text-forest">
                        {won(l.price * l.qty)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={clear}
                className="text-xs text-ink/40 underline-offset-2 hover:underline"
              >
                전체 비우기
              </button>
            </div>

            <div className="border-t border-ink/10 bg-cream-deep/50 px-5 py-5">
              {remain > 0 ? (
                <p className="mb-3 rounded-xl bg-apricot-soft/40 px-3 py-2 text-center text-xs text-clay">
                  {won(remain)} 더 담으면 <b>무료배송</b> 🚚
                </p>
              ) : (
                <p className="mb-3 rounded-xl bg-forest/10 px-3 py-2 text-center text-xs text-forest">
                  무료배송 적용 완료 🎉
                </p>
              )}
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-ink/60">
                  <span>상품 합계</span>
                  <span>{won(subtotal)}</span>
                </div>
                <div className="flex justify-between text-ink/60">
                  <span>배송비</span>
                  <span>{fee === 0 ? "무료" : won(fee)}</span>
                </div>
                <div className="flex justify-between pt-1 text-base font-bold text-ink">
                  <span>결제 금액</span>
                  <span className="text-forest">{won(total)}</span>
                </div>
              </div>
              <button
                onClick={() => setDone(true)}
                className="mt-4 w-full rounded-full bg-forest py-3.5 text-sm font-bold text-cream transition-transform hover:scale-[1.01] active:scale-95"
              >
                주문하기 · {won(total)}
              </button>
              <p className="mt-2 text-center text-[11px] text-ink/40">
                주문 당일 아침 새로 만들어 발송합니다
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
