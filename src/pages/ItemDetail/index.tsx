import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSearchParams, Link } from "react-router-dom";
import useBackend from "../../hooks/useBackend";
import Category from "../../models/Category";
import ShopItem from "../../models/ShopItem";
import "./ItemDetailPage.css";


const ShopItemDetail = () => {
    //  let [params, _] = useSearchParams();
    let [item , setItem] = useState<ShopItem>()
    let {itemStr} = useParams();
    // let itemStr = params.itemId
    //   let itemStr = params.itemId;
    // let itemId = ItemStr ? +ItemStr: null;
    console.log(itemStr)
    let itemId = itemStr ? (parseInt(itemStr), 10) : null;
    let backend = useBackend();
    console.log(itemId)

    useEffect(() => {
       backend.getShopItemDetail(itemId).then(setItem);
    }, [itemId]
    );

   

    return (
        <div className="item-detail">
            <div className="left-panel">
                <img className="panel-img" src={item?.imageUrl} />
            </div>
            <div className="right-panel">
                <div className="item_name"><span>{item?.title}</span></div>
                <div className="description_text"><span>{item?.description}</span></div>
                <div className="price"><span>{item?.price}$</span></div>
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