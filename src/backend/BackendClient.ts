import axios from "axios";
import Category from "../models/Category";
import ShopItem from "../models/ShopItem";
import { Slide } from "../models/Slide";
import Token from "../models/token";
import User from "../models/User";
import IBackendClient from "./IBackendClient";

class BackendClient implements IBackendClient {
  baseUrl = "http://localhost:8080";

  async getSaleSliderData(): Promise<Slide[]> {
    return await axios
      .get<Slide[]>(this.baseUrl + "/saledata")
      .then((response) => response.data);
  }

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

  async getCartItems(cart: number[]): Promise<ShopItem[]> {
    return await axios
      .get<ShopItem[]>(this.baseUrl + "/CartItems", { params : { cart }})
      .then((response) => response.data);
  }

  async getShopItemDetail(itemId: number | null): Promise<ShopItem> {
    return await axios
      .get<ShopItem>(this.baseUrl + `/items/${itemId}`)
      .then((response) => response.data);
  }
  async postSignIn(username: string, password: string): Promise<Token> {
    return await axios
      .post<Token>(this.baseUrl + `/signin`, {
        username: username,
        password: password,
      })
      .then((response) => response.data);
  }
  async postSignUp(
    username: string,
    email: string,
    password: string
  ): Promise<User> {
    return await axios
      .post<User>(this.baseUrl + `/signup`, {
        username: username,
        password: password,
        email: email,
      })
      .then((response) => response.data);
  }
  async postCheckUser(token: string): Promise<User> {
    return await axios
      .request({
        url: this.baseUrl + `/checkUser`,
        method: "post",
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data);
  }
}

export default BackendClient;
