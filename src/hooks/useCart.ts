import { createContext, useContext, useState } from "react";

interface ICartContext {
    cart: number[]
    setCart: (cart: number[]) =>void
}

export const CartContext = createContext<ICartContext>({cart: [], setCart: () => {}});

const useCart = (): ICartContext => useContext(CartContext);

export default useCart;

