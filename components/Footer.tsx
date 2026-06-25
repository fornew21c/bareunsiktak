export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream-deep/50">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-forest text-cream text-lg">
                🌱
              </span>
              <span className="font-display text-lg font-bold text-forest">
                바른식탁
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/55">
              우리 아이에게 먹일 거니까. 정직한 재료로 매일 새로 만드는
              주문제작 반찬과 수제 샌드위치.
            </p>
            <div className="mt-5 flex gap-3">
              {["📷", "💬", "📺"].map((i) => (
                <span
                  key={i}
                  className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 text-base transition hover:border-forest/40"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-ink">바로가기</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ink/55">
              <li>
                <a href="#menu" className="hover:text-forest">
                  오늘의 메뉴
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-forest">
                  바른식탁 이야기
                </a>
              </li>
              <li>
                <a href="#promise" className="hover:text-forest">
                  우리의 약속
                </a>
              </li>
              <li>
                <a href="#order" className="hover:text-forest">
                  주문제작 신청
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-ink">고객센터</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ink/55">
              <li>평일 10:00 – 17:00</li>
              <li className="font-display text-lg font-bold text-forest">
                1577-0000
              </li>
              <li>주말·공휴일 휴무</li>
              <li>카카오톡 @바른식탁</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink/10 pt-6 text-xs text-ink/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 바른식탁 (bareunsiktak). All rights reserved.</p>
          <p>
            상호 바른식탁 · 사업자등록번호 000-00-00000 · 통신판매업
            제2026-000호
          </p>
        </div>
      </div>
    </footer>
  );
}
