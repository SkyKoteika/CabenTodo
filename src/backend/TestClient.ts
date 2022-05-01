import Category from "../models/Category";
import ShopItem from "../models/ShopItem";
import User from "../models/User";
import { itemCategories, items,testCategories } from "../testData";
import IBackendClient from "./IBackendClient";

class TestClient implements IBackendClient {
    postSignUp(): Promise<User> {
        throw new Error("Method not implemented.");
    }
    postSignIn(): Promise<User> {
        throw new Error("Method not implemented.");
    }
    getShopItemDetail(categoryId: number | null): Promise<ShopItem> {
        throw new Error("Method not implemented.");
    }
    async getCategories(): Promise<Category[]> {
        return testCategories;
    }

    async getShopItems(categoryId: number | null): Promise<ShopItem[]> {
        if(categoryId === null) return items;

        const itemIds = itemCategories.filter(x => x.categoryId === categoryId)
            .map(x => x.itemId);

        return items.filter(item => itemIds.includes(item.id));
    }
}

export default TestClient;