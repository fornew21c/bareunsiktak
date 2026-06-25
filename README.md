# 바른식탁 (bareunsiktak)

> **"우리 아이에게 먹일 거니까."**
> 정직한 재료로 매일 아침 새로 만드는 소량 주문제작 반찬 · 수제 샌드위치 쇼핑몰

엄마가 내 아이에게 먹일 그 기준 그대로 만드는 식탁을 컨셉으로 한 트렌디한
식품 커머스 랜딩/주문 페이지입니다.

## ✨ 주요 기능

- **오늘의 메뉴** — 수제 샌드위치 / 주문제작 반찬 카테고리 필터
- **장바구니** — 슬라이드 드로어, 수량 조절, 무료배송 안내, `localStorage` 유지
- **주문제작 신청** — 아이 연령 · 알레르기 · 배송주기 기반 맞춤 식단 신청 폼
- **브랜드 스토리 / 약속** — 무방부제 · 당일제조 · 저염저당 메시지
- 반응형(모바일~데스크톱) · 부드러운 모션 · 접근성 고려

## 🎨 디자인 컨셉

따뜻한 크림 톤 배경에 포레스트 그린 + 애프리콧 포인트, 세리프 디스플레이
폰트(Gowun Batang)와 본문(Noto Sans KR)을 조합한 내추럴·트렌디 무드.

## 🧑‍🍳 상품

이미지로 제공된 두 가지 시그니처 샌드위치를 실사로 노출하고, 주문제작
반찬 라인업을 함께 구성했습니다.

- 노르웨이 연어 루꼴라 샌드위치
- 에그샐러드 당근 샌드위치
- 아이 소불고기 · 두부조림 · 단호박 매시 · 브로콜리 들깨무침 · 멸치 견과류 볶음 · 계란말이

## 🛠 기술 스택

- [Next.js 16](https://nextjs.org) (App Router)
- React 19 · TypeScript
- Tailwind CSS v4

## 🚀 실행

```bash
npm install      # 의존성 설치
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버
```

## 📁 구조

```
app/
  layout.tsx       # 폰트 · 메타데이터
  page.tsx         # 홈 (섹션 조합)
  globals.css      # 디자인 토큰 · 애니메이션
components/         # Header, Hero, Menu, ProductCard, CartDrawer, CustomOrder ...
lib/products.ts     # 상품 데이터
public/products/    # 상품 이미지
```
