"use client";

import { createContext, useContext, useState } from "react";
import type { Product } from "@/lib/products";

type DetailContextValue = {
  product: Product | null;
  open: (p: Product) => void;
  close: () => void;
};

const DetailContext = createContext<DetailContextValue | null>(null);

export function ProductDetailProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [product, setProduct] = useState<Product | null>(null);
  return (
    <DetailContext.Provider
      value={{
        product,
        open: (p) => setProduct(p),
        close: () => setProduct(null),
      }}
    >
      {children}
    </DetailContext.Provider>
  );
}

export function useProductDetail() {
  const ctx = useContext(DetailContext);
  if (!ctx)
    throw new Error("useProductDetail must be used within ProductDetailProvider");
  return ctx;
}
