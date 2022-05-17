import axios from "axios";
import { getCookie, setCookie }from "../components/cookies/cookie";
import Category from "../models/Category";
import ShopItem from "../models/ShopItem";
import Token from "../models/token";
import User from "../models/User";
import IBackendClient from "./IBackendClient";

class BackendClient implements IBackendClient {
  baseUrl = "http://localhost:8080";

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
  async postSignIn(username: string, password: string): Promise<Token> {
    return await axios
      .post<Token>(this.baseUrl + `/signin`, {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data) {
          setCookie("accessToken", response.data.accessToken, 0.001)
          setCookie("refreshToken", response.data.refreshToken, 0.001)
        }

        return response.data;
      });
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
  // async postCheckUser(tokenPayload: string): Promise<User> {
  //   return await axios
  //     .post<User>(this.baseUrl + `/checkUser`, { payload: tokenPayload })
  //     .then((response) => response.data);
  // }
  async postCheckUser(): Promise<User> {
    const token =  getCookie("accessToken");
    return await axios.request({
      url: this.baseUrl + `/checkUser`,
     method: "post",
     withCredentials: true,
     headers:{
        Authorization: `Bearer ${token}`
     }
}).then((response) => response.data)
      
  }
}

export default BackendClient;
