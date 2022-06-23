import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import useBackend from "../hooks/useBackend";
import ShopItem from "../models/ShopItem";


const ItemListPage = () => {
    let [params,] = useSearchParams();
    let [items, setItems] = useState<ShopItem[]>([])
    let categoryStr = params.get("categoryId");
    let categoryId = categoryStr ? +categoryStr: null;
    let backend = useBackend();

    useEffect(() => {
        backend.getShopItems(categoryId).then(setItems);
    }, [categoryId,backend]
    );
    
    return <ItemList items={items} />
}

export default ItemListPage;