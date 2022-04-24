import Category from "../models/Category";
import ShopItem from "../models/ShopItem";

interface IBackendClient {
    getCategories() : Promise<Category[]>
    getShopItems(categoryId: number | null) : Promise<ShopItem[]>
    getShopItemDetail(itemId: number | null) : Promise<ShopItem>
}

export default IBackendClient;