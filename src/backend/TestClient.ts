import Category from "../models/Category";
import ShopItem from "../models/ShopItem";
import { itemCategories, items,testCategories } from "../testData";
import IBackendClient from "./IBackendClient";

class TestClient implements IBackendClient {
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