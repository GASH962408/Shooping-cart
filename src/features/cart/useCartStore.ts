import { create } from 'zustand';
import type { Product } from '../products/useProductsStore';

export type CartItem = Product & { quantity: number };

type CartStore = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],

addToCart: (product) => {
  const cart = get().cart;

  const updatedCart = cart.some((item) => item.id === product.id)
    ? cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    : [...cart, { ...product, quantity: 1 }];

  set({ cart: updatedCart });
},


  removeFromCart: (id) => {
    const cart = get().cart;
    const updated = cart.filter((item) => item.id !== id);
    set({ cart: updated });
  },

  clearCart: () => {
    set({ cart: [] });
  },
}));
