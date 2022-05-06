import axios from "axios";
import Category from "../models/Category";
import ShopItem from "../models/ShopItem";
import User from "../models/User";
import IBackendClient from "./IBackendClient";

class BackendClient implements IBackendClient {
  baseUrl = "http://localhost:8000";
  // baseUrl = "https://firstapp-server-dworzgegoa-lm.a.run.app";

  async getCategories(): Promise<Category[]> {
    return await axios
      .get<Category[]>(this.baseUrl + "/categories")
      .then((response) => response.data);
  }

  async getShopItems(categoryId: number | null): Promise<ShopItem[]> {
    return await axios
      .get<ShopItem[]>(this.baseUrl + "/items", { params: { categoryId } })
      .then((response) => response.data);
  }
  async getShopItemDetail(itemId: number | null): Promise<ShopItem> {
    return await axios
      .get<ShopItem>(this.baseUrl + `/items/${itemId}`)
      .then((response) => response.data);
  }
  async postSignIn(username: string, password: string): Promise<User> {
    return await axios
      .post<User>(this.baseUrl + `/signin`)
      .then((response) => response.data);
  }
  async postSignUp(
    username: string,
    email: string,
    password: string
  ): Promise<User> {
    return await axios
      .post<User>(this.baseUrl + `/signup`)
      .then((response) => response.data);
  }
}

export default BackendClient;
