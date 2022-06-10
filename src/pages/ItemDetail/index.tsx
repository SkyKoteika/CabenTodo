import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useBackend from "../../hooks/useBackend";
import useCart from "../../hooks/useCart";
import ShopItem from "../../models/ShopItem";
import "./ItemDetailPage.css";

type ShopItemParams = "itemId"

const ShopItemDetail = () => {
    const [item, setItem] = useState<ShopItem>()
    const backend = useBackend();
    const { itemId } = useParams<ShopItemParams>();
    const {cart, setCart} = useCart();

    useEffect(() => {        
        if (itemId === null || itemId === undefined || Number.isNaN(+itemId)) {
            return
        }

        backend.getShopItemDetail(+itemId).then(setItem);
    }, [itemId, backend]);

    const setNewCart = useCallback( () => {
        cart.push(+itemId!);
        console.log(cart)
        return cart
    },[cart, itemId])

    const AddToCart = useCallback(() => setCart(setNewCart()),[setCart, setNewCart]);

    return (
        <div className="item-detail">
            <div className="left-panel">
                <img className="panel-img" src={item?.imageUrl} alt="stuff"/>
            </div>
            <div className="right-panel">
                <div className="item_name"><span>{item?.title}</span></div>
                <div className="description_text"><span>{item?.description}</span></div>
                <div className="price"><span>${item?.price}</span></div>
                <div className="line"></div>
                <div className="buttons">
                    <button className="add" onClick={AddToCart}>Purchase</button>
                    <Link className="buy" to={`/purchase`}>Buy in One Click</Link>
                </div>
            </div>

        </div>
    );
};

export default ShopItemDetail;