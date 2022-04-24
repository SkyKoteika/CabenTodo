import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useBackend from "../../hooks/useBackend";
import ShopItem from "../../models/ShopItem";
import "./ItemDetailPage.css";

type ShopItemParams = "itemId"

const ShopItemDetail = () => {
    const [item, setItem] = useState<ShopItem>()
    const backend = useBackend();
    const { itemId } = useParams<ShopItemParams>();

    useEffect(() => {        
        if (itemId === null || itemId === undefined || Number.isNaN(+itemId)) {
            return
        }

        backend.getShopItemDetail(+itemId).then(setItem);
    }, [itemId]);

    return (
        <div className="item-detail">
            <div className="left-panel">
                <img className="panel-img" src={item?.imageUrl} />
            </div>
            <div className="right-panel">
                <div className="item_name"><span>{item?.title}</span></div>
                <div className="description_text"><span>{item?.description}</span></div>
                <div className="price"><span>${item?.price}</span></div>
                <div className="line"></div>
                <div className="buttons">
                    <button className="add">Purchase</button>
                    <Link className="buy" to={`/purchase`}>Buy in One Click</Link>
                </div>
            </div>

        </div>
    );
};

export default ShopItemDetail;