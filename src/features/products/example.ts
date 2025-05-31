import {create} from "zustand"
import type { Product } from '../products/useProductsStore'; 


export type CartItem = Product & {cantidad:number};

type CartStore = {
cart:CartItem[],
addToCart: (product:Product) => void; 
removeFromCart: (id:number)=> void;
clearCart:() => void
}

export const useCartStore = create<CartStore>((set,get)=>({
    cart:[],

    addToCart:(product) ={
        const cart =get().cart;
        const existing = cart.find((item)=>item.id===product.id)

        if (existing){
            const updated = cart.map((item)=>
                item.id===product.id
            )
        }
    }
}))