import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
export type CartType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};
type CartStates = {
  cart: Array<CartType> | [];
};
type CartAction = {
  addCart: (item: CartType) => void;
};
export const cartStore = create<CartStates & CartAction>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        addCart: (item: CartType) =>
          set((state) => ({
            cart: [item, ...state.cart],
          })),
      }),
      {
        name: "cart-store",
      }
    )
  )
);
