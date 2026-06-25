export type Category = "sandwich" | "banchan";

export type IngredientDetail = {
  name: string;
  /** 원산지 또는 출처 */
  origin: string;
  /** 이 재료를 쓰는 이유 (선택) */
  note?: string;
};

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
  /** 간단 재료 목록 (카드/요약용) */
  ingredients: string[];
  allergens: string[];
  /** 전 성분 + 원산지 (투명성 공개) */
  ingredientDetails: IngredientDetail[];
  /** 들어가지 않은 것 (무첨가 선언) */
  freeFrom: string[];
  /** 만드는 과정 (레시피 공개) */
  recipe: string[];
  /** 영양 포인트 */
  nutrition: { label: string; value: string }[];
  /** 보관 방법 */
  storage: string;
  /** 소비기한 */
  shelfLife: string;
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
    ingredientDetails: [
      {
        name: "천연발효 사워도우",
        origin: "매장 직접 발효 · 국산 밀가루(우리밀)",
        note: "이스트 대신 천연 발효종으로 18시간 저온 숙성",
      },
      {
        name: "훈제연어",
        origin: "노르웨이산 양식 대서양 연어",
        note: "항생제 사용 이력 없는 인증 농장 원료만 사용",
      },
      { name: "루꼴라", origin: "국산 (경기 이천)", note: "주문 당일 새벽 입고분" },
      {
        name: "크림치즈",
        origin: "프랑스산 자연치즈",
        note: "유화제·전분 무첨가 자연숙성 제품",
      },
      { name: "레몬", origin: "국산 (제주)", note: "착즙해 비린내 잡는 용도" },
      { name: "케이퍼", origin: "스페인산", note: "" },
    ],
    freeFrom: ["합성보존료", "인공색소", "MSG(향미증진제)", "발색제(아질산나트륨)"],
    recipe: [
      "전날 밤 발효종으로 반죽해 18시간 저온 숙성합니다.",
      "당일 아침 사워도우를 구워 한 김 식힙니다.",
      "크림치즈에 제주 레몬즙과 제스트를 섞어 발라요.",
      "훈제연어 → 루꼴라 → 케이퍼 순으로 올립니다.",
      "포장 직전 후추를 살짝 갈아 마무리합니다.",
    ],
    nutrition: [
      { label: "열량", value: "약 420kcal" },
      { label: "나트륨", value: "약 540mg (저염 기준)" },
      { label: "단백질", value: "약 22g" },
    ],
    storage: "냉장(0~5℃) 보관, 받은 당일 섭취 권장",
    shelfLife: "제조일 포함 2일",
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
    ingredientDetails: [
      {
        name: "천연발효 사워도우",
        origin: "매장 직접 발효 · 국산 밀가루(우리밀)",
        note: "18시간 저온 숙성",
      },
      {
        name: "유정란",
        origin: "국산 동물복지 인증 농장 (충남 홍성)",
        note: "방사 사육 닭이 낳은 신선란",
      },
      { name: "당근", origin: "국산 (제주)", note: "당일 채썰어 새콤하게 절임" },
      { name: "로메인", origin: "국산 (강원 평창)", note: "" },
      {
        name: "마요네즈",
        origin: "국산 (유정란 베이스)",
        note: "사용량을 일반 대비 30% 줄임",
      },
      { name: "홀그레인 머스터드", origin: "프랑스산", note: "" },
    ],
    freeFrom: ["합성보존료", "인공색소", "MSG(향미증진제)", "정제설탕"],
    recipe: [
      "유정란을 삶아 흰자와 노른자를 따로 다집니다.",
      "마요는 최소한만, 머스터드와 약간의 소금으로 간해요.",
      "당근은 가늘게 채 썰어 식초·약간의 매실청에 절입니다.",
      "구운 사워도우에 로메인 → 에그샐러드 → 절인 당근을 쌓아요.",
      "단면이 예쁘게 나오도록 눌러 포장합니다.",
    ],
    nutrition: [
      { label: "열량", value: "약 390kcal" },
      { label: "나트륨", value: "약 470mg (저염 기준)" },
      { label: "단백질", value: "약 16g" },
    ],
    storage: "냉장(0~5℃) 보관, 받은 당일 섭취 권장",
    shelfLife: "제조일 포함 2일",
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
    ingredientDetails: [
      {
        name: "한우 앞다리살",
        origin: "국산 1등급 한우 (이력번호 제공)",
        note: "주문 시 개체 이력번호를 함께 안내드려요",
      },
      {
        name: "양조간장",
        origin: "국산 (저염 양조간장)",
        note: "나트륨을 일반 간장의 60% 수준으로",
      },
      { name: "배", origin: "국산 (나주)", note: "설탕 대신 천연 단맛·연육 작용" },
      { name: "사과", origin: "국산 (충주)", note: "" },
      { name: "참기름", origin: "국산 참깨 압착", note: "" },
      { name: "다진 마늘", origin: "국산 (의성)", note: "" },
    ],
    freeFrom: ["설탕", "물엿·올리고당", "MSG(향미증진제)", "합성보존료"],
    recipe: [
      "배와 사과를 갈아 즙을 내 저염 간장과 섞습니다.",
      "한우를 양념에 버무려 4시간 이상 냉장 숙성해요.",
      "센 불에 빠르게 볶아 육즙을 가둡니다.",
      "마지막에 참기름을 둘러 향을 입혀 식힌 뒤 포장합니다.",
    ],
    nutrition: [
      { label: "열량", value: "약 260kcal / 100g" },
      { label: "나트륨", value: "약 380mg / 100g (저염)" },
      { label: "단백질", value: "약 19g / 100g" },
    ],
    storage: "냉장(0~5℃) 보관",
    shelfLife: "제조일 포함 3일",
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
    ingredientDetails: [
      {
        name: "두부",
        origin: "국산 콩 100% (Non-GMO)",
        note: "유전자변형 콩을 쓰지 않은 두부만",
      },
      { name: "저염 간장", origin: "국산 양조간장", note: "나트륨 저감 제품" },
      { name: "대파", origin: "국산 (진도)", note: "" },
      { name: "참기름", origin: "국산 참깨 압착", note: "" },
      { name: "통깨", origin: "국산", note: "" },
    ],
    freeFrom: ["설탕", "MSG(향미증진제)", "합성보존료", "수입콩"],
    recipe: [
      "국산콩 두부를 한입 크기로 잘라 물기를 뺍니다.",
      "기름 없이 팬에 노릇하게 구워 겉면을 잡아요.",
      "저염 간장 양념을 자작하게 부어 약불에 졸입니다.",
      "대파와 통깨를 올려 향을 더해 식혀 담습니다.",
    ],
    nutrition: [
      { label: "열량", value: "약 140kcal / 100g" },
      { label: "나트륨", value: "약 290mg / 100g (저염)" },
      { label: "단백질", value: "약 10g / 100g" },
    ],
    storage: "냉장(0~5℃) 보관",
    shelfLife: "제조일 포함 3일",
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
    ingredientDetails: [
      {
        name: "단호박",
        origin: "국산 (제주 · 해남)",
        note: "당도 높은 밤호박 품종만 선별",
      },
      {
        name: "우유",
        origin: "국산 1등급 원유",
        note: "부드러운 질감을 위한 최소량",
      },
      { name: "소금", origin: "국산 천일염", note: "맛을 잡는 극소량" },
    ],
    freeFrom: ["설탕", "물엿·시럽", "합성보존료", "인공향료"],
    recipe: [
      "단호박을 껍질째 쪄서 속을 곱게 긁어냅니다.",
      "체에 한 번 내려 부드러운 식감을 만들어요.",
      "따뜻할 때 우유 한 스푼과 소금 약간만 더합니다.",
      "식힌 뒤 소분해 담습니다. (설탕은 넣지 않아요)",
    ],
    nutrition: [
      { label: "열량", value: "약 90kcal / 100g" },
      { label: "나트륨", value: "약 60mg / 100g" },
      { label: "식이섬유", value: "풍부" },
    ],
    storage: "냉장(0~5℃) 보관, 데워서 급여",
    shelfLife: "제조일 포함 3일",
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
    ingredientDetails: [
      { name: "브로콜리", origin: "국산 (제주)", note: "송이가 단단한 것만 선별" },
      {
        name: "들깨가루",
        origin: "국산 들깨 100%",
        note: "수입 혼합 없이 국산 통들깨를 직접 빻음",
      },
      { name: "들기름", origin: "국산 들깨 압착", note: "" },
      { name: "소금", origin: "국산 천일염", note: "" },
    ],
    freeFrom: ["MSG(향미증진제)", "설탕", "합성보존료", "수입 들깨"],
    recipe: [
      "브로콜리를 송이로 나눠 끓는 물에 살짝 데칩니다.",
      "찬물에 헹궈 색과 아삭함을 잡고 물기를 빼요.",
      "들깨가루·들기름·소금 약간으로 살살 무칩니다.",
      "무친 즉시 식혀 담아 고소함을 가둡니다.",
    ],
    nutrition: [
      { label: "열량", value: "약 110kcal / 100g" },
      { label: "나트륨", value: "약 180mg / 100g (저염)" },
      { label: "비타민C", value: "풍부" },
    ],
    storage: "냉장(0~5℃) 보관",
    shelfLife: "제조일 포함 2일",
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
    ingredientDetails: [
      {
        name: "잔멸치",
        origin: "국산 (남해)",
        note: "끓는 물에 한 번 데쳐 짠기를 덜어냄",
      },
      { name: "아몬드", origin: "미국산", note: "무염·무가당 생견과" },
      { name: "호두", origin: "국산 (천안)", note: "" },
      {
        name: "조청",
        origin: "국산 쌀조청",
        note: "물엿·올리고당 대신 전통 조청만 소량",
      },
      { name: "참기름", origin: "국산 참깨 압착", note: "" },
    ],
    freeFrom: ["물엿·올리고당", "설탕", "MSG(향미증진제)", "합성보존료"],
    recipe: [
      "잔멸치를 끓는 물에 살짝 데쳐 짠기와 비린내를 뺍니다.",
      "마른 팬에 멸치와 견과를 따로 바삭하게 볶아요.",
      "쌀조청을 아주 약간만 둘러 윤기를 냅니다.",
      "참기름으로 마무리해 식힌 뒤 담습니다.",
    ],
    nutrition: [
      { label: "열량", value: "약 230kcal / 100g" },
      { label: "칼슘", value: "매우 풍부" },
      { label: "나트륨", value: "약 320mg / 100g (저염)" },
    ],
    storage: "직사광선 피해 실온 보관 (개봉 후 냉장)",
    shelfLife: "제조일 포함 14일",
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
    ingredientDetails: [
      {
        name: "유정란",
        origin: "국산 동물복지 인증 농장 (충남 홍성)",
        note: "방사 사육 신선란",
      },
      { name: "당근", origin: "국산 (제주)", note: "곱게 다져 넣음" },
      { name: "애호박", origin: "국산 (경남 진주)", note: "" },
      { name: "소금", origin: "국산 천일염", note: "극소량" },
    ],
    freeFrom: ["맛소금·조미료", "MSG(향미증진제)", "설탕", "합성보존료"],
    recipe: [
      "당근과 애호박을 아주 곱게 다집니다.",
      "유정란을 풀어 다진 채소와 소금 약간만 섞어요.",
      "약불에서 여러 번 나눠 부으며 도톰하게 말아냅니다.",
      "한 김 식혀 모양을 잡고 먹기 좋게 잘라 담습니다.",
    ],
    nutrition: [
      { label: "열량", value: "약 170kcal / 100g" },
      { label: "나트륨", value: "약 210mg / 100g (저염)" },
      { label: "단백질", value: "약 13g / 100g" },
    ],
    storage: "냉장(0~5℃) 보관, 살짝 데워 섭취 권장",
    shelfLife: "제조일 포함 2일",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const won = (n: number) => `${n.toLocaleString("ko-KR")}원`;
