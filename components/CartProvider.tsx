"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import type { Product } from "@/lib/products";

export type CartLine = {
  slug: string;
  name: string;
  price: number;
  unit: string;
  image?: string;
  accent: string;
  emoji?: string;
  qty: number;
};

type State = { lines: CartLine[] };

type Action =
  | { type: "add"; product: Product; qty?: number }
  | { type: "setQty"; slug: string; qty: number }
  | { type: "remove"; slug: string }
  | { type: "clear" }
  | { type: "hydrate"; state: State };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "hydrate":
      return action.state;
    case "add": {
      const qty = action.qty ?? 1;
      const existing = state.lines.find((l) => l.slug === action.product.slug);
      if (existing) {
        return {
          lines: state.lines.map((l) =>
            l.slug === action.product.slug ? { ...l, qty: l.qty + qty } : l,
          ),
        };
      }
      const p = action.product;
      return {
        lines: [
          ...state.lines,
          {
            slug: p.slug,
            name: p.name,
            price: p.price,
            unit: p.unit,
            image: p.image,
            accent: p.accent,
            emoji: p.emoji,
            qty,
          },
        ],
      };
    }
    case "setQty":
      return {
        lines: state.lines
          .map((l) => (l.slug === action.slug ? { ...l, qty: action.qty } : l))
          .filter((l) => l.qty > 0),
      };
    case "remove":
      return { lines: state.lines.filter((l) => l.slug !== action.slug) };
    case "clear":
      return { lines: [] };
    default:
      return state;
  }
}

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (product: Product, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "bareunsiktak.cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { lines: [] });
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "hydrate", state: JSON.parse(raw) });
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state, ready]);

  const value = useMemo<CartContextValue>(() => {
    const count = state.lines.reduce((s, l) => s + l.qty, 0);
    const subtotal = state.lines.reduce((s, l) => s + l.qty * l.price, 0);
    return {
      lines: state.lines,
      count,
      subtotal,
      open,
      setOpen,
      add: (product, qty) => {
        dispatch({ type: "add", product, qty });
        setOpen(true);
      },
      setQty: (slug, qty) => dispatch({ type: "setQty", slug, qty }),
      remove: (slug) => dispatch({ type: "remove", slug }),
      clear: () => dispatch({ type: "clear" }),
    };
  }, [state, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
