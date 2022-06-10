import Button from "../../components/Button";
import { ItemListProps } from "../../components/ItemList";
import Paper from "../../components/Paper";

const CartList = (props: ItemListProps) => {
  let items = props.items;
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

  return (
    <div>
      <Paper>
        {
        items.map((item, index) => (
          <div key={index} className="cart-item">
            Test data
            <img src={item.imageUrl} alt="" />
            <span>{item.title}</span>
            <span>{item.description}</span>
            <span>${item.price}</span>
            <Button variant="destructive">Delete</Button>
          </div>
        ))
        }
        <Button>Proceed to Purchase</Button>
      </Paper>
    </div>
  );
};

export default CartList;
