import { useEffect, useState } from "react";
import useBackend from "../../hooks/useBackend";
import useCart from "../../hooks/useCart";
import ShopItem from "../../models/ShopItem";
import CartList from "./CartList";
import "./cartCSS.css"
import { checkCookie, getCookie, setCookie } from "../../utils/cookie";

const Cart = () => {
  const { cart } = useCart();
  let [items, setItems] = useState<ShopItem[]>([]);
  const backend = useBackend();

  useEffect(() => {
    if(!cart || cart.length === 0){
      if(checkCookie("cart") !== undefined){
        let cartString = getCookie("cart");
        if(cartString !== null){
          let Cart = cartString.split(",");
          cart.length = Cart.length;
          for(let i = 0; i<cart.length; i++){
            cart[i] = +Cart[i];
          }
        }else{
          return;
        }
      }else{
        return;
      }
    }
    backend.getCartItems(cart).then(setItems);
  }, [cart, backend]);

  
  console.log(items)
  return <CartList items={items} />
};

export default Cart;
