export type Category = "sandwich" | "banchan";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  tagline: string;
  description: string;
  price: number;
  unit: string;
  /** real photograph in /public/products */
  image?: string;
  /** gradient used for cards without a photo */
  accent: string;
  emoji?: string;
  badges: string[];
  ingredients: string[];
  allergens: string[];
};

export const CATEGORY_LABEL: Record<Category, string> = {
  sandwich: "수제 샌드위치",
  banchan: "주문제작 반찬",
};

export const products: Product[] = [
  {
    slug: "salmon-arugula-sandwich",
    name: "노르웨이 연어 루꼴라 샌드위치",
    category: "sandwich",
    tagline: "갓 구운 사워도우에 훈제연어 듬뿍",
    description:
      "천연발효 사워도우에 노르웨이산 훈제연어와 아삭한 루꼴라를 올렸어요. 레몬 향 크림치즈로 비린 맛 없이, 아이도 어른도 한 입에 반하는 담백한 한 끼.",
    price: 9800,
    unit: "1개",
    image: "/products/salmon-sandwich.jpeg",
    accent: "linear-gradient(135deg,#f6d2ab,#e89b5a)",
    badges: ["당일제조", "무방부제", "저염"],
    ingredients: [
      "천연발효 사워도우",
      "노르웨이산 훈제연어",
      "루꼴라",
      "레몬 크림치즈",
      "케이퍼",
    ],
    allergens: ["밀", "어류(연어)", "우유"],
  },
  {
    slug: "egg-salad-carrot-sandwich",
    name: "에그샐러드 당근 샌드위치",
    category: "sandwich",
    tagline: "부드러운 에그샐러드 + 아삭 채썬 당근",
    description:
      "유정란으로 만든 포슬포슬한 에그샐러드에 새콤한 채썬 당근과 로메인을 듬뿍. 마요는 줄이고 재료 본연의 단맛을 살려, 아이 간식으로도 든든한 영양 샌드위치.",
    price: 8800,
    unit: "1개",
    image: "/products/egg-salad-sandwich.jpeg",
    accent: "linear-gradient(135deg,#f4c79a,#c96b46)",
    badges: ["당일제조", "유정란", "아이반찬"],
    ingredients: [
      "천연발효 사워도우",
      "유정란 에그샐러드",
      "채썬 당근",
      "로메인",
      "홀그레인 머스터드",
    ],
    allergens: ["밀", "계란"],
  },
  {
    slug: "soy-bulgogi",
    name: "아이 소불고기 (저염 간장)",
    category: "banchan",
    tagline: "배·사과로 단맛 낸 순한 양념",
    description:
      "1등급 한우 앞다리살을 배와 사과로 갈아 만든 저염 간장 양념에 재웠어요. 자극적이지 않아 첫 고기 반찬으로 좋고, 밥에 비벼주기도 좋아요.",
    price: 12000,
    unit: "200g",
    accent: "linear-gradient(135deg,#c96b46,#8a4a30)",
    emoji: "🥩",
    badges: ["저염", "무화학첨가", "냉장"],
    ingredients: ["한우 앞다리살", "저염 양조간장", "배", "사과", "참기름"],
    allergens: ["소고기", "대두", "밀"],
  },
  {
    slug: "tofu-jorim",
    name: "한입 두부조림",
    category: "banchan",
    tagline: "겉은 쫀득, 속은 부드럽게",
    description:
      "국산 콩 두부를 한입 크기로 구워 순한 간장 양념에 졸였어요. 손으로 집어 먹기 좋아 아이 스스로 먹는 연습에도 그만이에요.",
    price: 6500,
    unit: "180g",
    accent: "linear-gradient(135deg,#f6d2ab,#d8a86a)",
    emoji: "🧈",
    badges: ["국산콩", "저염", "냉장"],
    ingredients: ["국산 두부", "저염 간장", "다진 파", "참기름", "통깨"],
    allergens: ["대두", "밀"],
  },
  {
    slug: "pumpkin-mash",
    name: "단호박 영양 매시",
    category: "banchan",
    tagline: "설탕 없이, 단호박 그대로의 단맛",
    description:
      "푹 찐 단호박을 곱게 으깨 우유 한 스푼만 넣었어요. 설탕·첨가물 없이 자연 단맛만으로, 이유식 마무리부터 유아 간식까지.",
    price: 5800,
    unit: "150g",
    accent: "linear-gradient(135deg,#f4c79a,#e89b5a)",
    emoji: "🎃",
    badges: ["무설탕", "이유식후기", "냉장"],
    ingredients: ["국산 단호박", "우유", "약간의 소금"],
    allergens: ["우유"],
  },
  {
    slug: "broccoli-perilla",
    name: "브로콜리 들깨무침",
    category: "banchan",
    tagline: "고소한 들깨로 채소를 친근하게",
    description:
      "데친 브로콜리를 고소한 들깨가루에 살살 무쳤어요. 향이 부드러워 채소를 낯설어하는 아이도 곧잘 집어 먹어요.",
    price: 5500,
    unit: "150g",
    accent: "linear-gradient(135deg,#5c7a5e,#38503b)",
    emoji: "🥦",
    badges: ["국산채소", "저염", "냉장"],
    ingredients: ["브로콜리", "들깨가루", "들기름", "약간의 소금"],
    allergens: ["대두"],
  },
  {
    slug: "anchovy-nuts",
    name: "멸치 견과류 볶음 (저염)",
    category: "banchan",
    tagline: "칼슘 가득, 바삭하게",
    description:
      "잔멸치와 견과류를 물엿 대신 조청으로 살짝만 볶았어요. 짜지 않고 바삭해 밥 위에 올려주기 좋은 단골 반찬.",
    price: 7000,
    unit: "120g",
    accent: "linear-gradient(135deg,#d8a86a,#a9763f)",
    emoji: "🐟",
    badges: ["고칼슘", "저염", "실온"],
    ingredients: ["잔멸치", "아몬드", "호두", "조청", "참기름"],
    allergens: ["멸치", "견과류"],
  },
  {
    slug: "egg-roll",
    name: "촉촉 계란말이",
    category: "banchan",
    tagline: "채소 다져 넣은 폭신한 한 끼",
    description:
      "유정란에 당근·애호박을 곱게 다져 넣고 약불에서 천천히 부쳤어요. 폭신하고 촉촉해 도시락 반찬으로 인기 만점.",
    price: 6000,
    unit: "1롤",
    accent: "linear-gradient(135deg,#f6d2ab,#e8b56a)",
    emoji: "🍳",
    badges: ["유정란", "채소듬뿍", "냉장"],
    ingredients: ["유정란", "당근", "애호박", "약간의 소금"],
    allergens: ["계란"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const won = (n: number) => `${n.toLocaleString("ko-KR")}원`;
