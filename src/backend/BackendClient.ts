import axios from "axios";
import Category from "../models/Category";
import ShopItem from "../models/ShopItem";
import IBackendClient from "./IBackendClient";

class BackendClient implements IBackendClient {

    baseUrl = "http://localhost:8000";
    

    async getCategories(): Promise<Category[]> {
        return await axios.get<Category[]>(this.baseUrl + '/categories')
            .then(response => response.data);
    }

    async getShopItems(categoryId: number | null): Promise<ShopItem[]> {
        return await axios.get<ShopItem[]>(this.baseUrl + '/items', {params: {categoryId}})
            .then(response => response.data);
    }
    async getShopItemDetail(itemId: number | null): Promise<ShopItem> {
        return await axios.get<ShopItem>(this.baseUrl + `/items/${itemId}`)
            .then(response => response.data)
        
    }
}

export default BackendClient;