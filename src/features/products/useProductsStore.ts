import { create } from 'zustand';

export type Product = {
id: number;
title: string;
price: number;
description: string;
category: string;
image: string;
};

type ProductStore = {
products: Product[];
setProducts: (products: Product[]) => void;
fetchProducts: () => Promise<void>;
};

export const useProductStore = create<ProductStore>((set) => ({
products: [],
setProducts: (products) => set({ products }),

fetchProducts: async () => {
    try {
    const res = await fetch('https://fakestoreapi.com/products');
    const data: Product[] = await res.json();
    set({ products: data });
    } catch (error) {
    console.error('Error al cargar productos:', error);}}
}));
