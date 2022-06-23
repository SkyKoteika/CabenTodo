import { useCallback } from "react";
import Button from "../../components/Button";
import { ItemListProps } from "../../components/ItemList";
import Paper from "../../components/Paper";
import useCart from "../../hooks/useCart";
import { ReactComponent as Trash } from "../../images/trash.svg";
import { deleteCookie, setCookie } from "../../utils/cookie";


const CartList = (props: ItemListProps) => {
  let items = props.items;
  const {cart, setCart} = useCart();  
  console.log("items", items)
  console.log("items length:", items.length)
  if( items === undefined || items === null || items.length === 0 ){
    return (
    <Paper>
    <div className="cart_placeholder">
      <span>Cart is empty</span>
    </div>
    </Paper>
    );
  }

//   const setNewCart = useCallback( (index ) => {
//     cart.splice(cart.indexOf(index),1);
//     return cart;
// },[cart])
const setNewCart = (index: number) => {
    cart.splice(index,1);
    setCookie("cart", cart, 30)
  return cart;
}

// const DelFromCart = useCallback(() => setCart(setNewCart()),[setCart, setNewCart]);




  return (
    <div className="Cart">
      <Paper>
        {
        items.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.imageUrl} alt="" className="cart-img" />
            <span className="cart-text">{item.title}</span>
            <span className="cart-text">{item.description}</span>
            <span className="cart-text">${item.price}</span>
            <Button variant="destructive" className="delete" onClick={() => setCart(setNewCart(index))} ><Trash  className="trash" width={22} height={22} /></Button>
          </div>
        ))
        }
        <Button className="Purchase-butt">Proceed to Purchase</Button>
      </Paper>
    </div>
  );
};

export default CartList;
