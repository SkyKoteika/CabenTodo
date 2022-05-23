import { Link } from "react-router-dom";
import ShopItem from "../../models/ShopItem";
import "./style.css";

export type ItemListProps = {
    items: ShopItem[]
}

const ItemList = (props: ItemListProps) => {
    let items = props.items;

    return (
        <div className="item-list">
            {
                items.map(item => (
                    <Link key={item.id} to={`/items/${item.id}`}>
                        <div className="item">
                            <img src={item.imageUrl} alt='image' />
                            <span className="description">{item.title}: ${item.price}</span>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default ItemList;
