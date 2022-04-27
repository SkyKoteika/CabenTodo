import Category from "../models/Category";
import ShopItem from "../models/ShopItem";
import User from "../models/User";

interface IBackendClient {
    getCategories() : Promise<Category[]>
    getShopItems(categoryId: number | null) : Promise<ShopItem[]>
    getShopItemDetail(itemId: number | null) : Promise<ShopItem>
    postRegistration() : Promise<User>
    postSignIn() : Promise<User>
}

export default IBackendClient;