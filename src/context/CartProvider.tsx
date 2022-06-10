import { useState } from "react";
import useCart, { CartContext } from "../hooks/useCart";

type AppChildren = {
  children: JSX.Element;
};

const CartProvider = (props: AppChildren) => {
    const [cart, setCart] = useState<number[]>([]);
    
  return (
    <CartContext.Provider value={{cart, setCart}}>
        {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
