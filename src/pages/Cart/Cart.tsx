import { useEffect, useState } from "react";
import useBackend from "../../hooks/useBackend";
import useCart from "../../hooks/useCart";
import ShopItem from "../../models/ShopItem";
import CartList from "./CartList";
import "./cartCSS.css"

const Cart = () => {
  const { cart } = useCart();
  let [items, setItems] = useState<ShopItem[]>([]);
  const backend = useBackend();

  useEffect(() => {
    if(!cart || cart.length === 0) return;

    backend.getCartItems(cart).then(setItems);
  }, [cart, backend]);

  
  console.log(items)
  return <CartList items={items} />
};

export default Cart;
