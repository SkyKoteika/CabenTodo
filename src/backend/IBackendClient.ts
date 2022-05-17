import Category from "../models/Category";
import ShopItem from "../models/ShopItem";
import Token from "../models/token";
import User from "../models/User";

interface IBackendClient {
    getCategories() : Promise<Category[]>
    getShopItems(categoryId: number | null) : Promise<ShopItem[]>
    getShopItemDetail(itemId: number | null) : Promise<ShopItem>
    postSignUp(username: string,email:string, password: string) : Promise<User>
    postSignIn(username: string, password: string) : Promise<Token>
    postCheckUser(): Promise<User>
}

export default IBackendClient;