import ShopItem from "./models/ShopItem";
import { ShopCategory } from "./components/CategoryList";
import Tops from "./images/Tops.png"
import Hoody from "./images/Hoody.png"
import Hat from "./images/Hat.png"
import Trousers from "./images/Trousers.png"
import Trousers2 from "./images/Trousers2.png"
import Category from "./models/Category";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";


let [params, _] = useSearchParams();
export let [items, setItems] = useState<ShopItem[]>([])
let categoryStr = params.get("categoryId");
export let categoryId = categoryStr ? +categoryStr: null;

// export const items: ShopItem[] = [
//     {
//         id: 1,
//         title: "Top",
//         imageUrl: Tops,
//         price: 100.0,
//         description: "Black Top"
//     },
//     //<-------------------------------------Trousers----------------------------------------------------------------------
//     {
//         id: 2,
//         title: "Trousers",
//         imageUrl: Trousers,
//         price: 100.0,
//         description: "Black Trousers"
//     },
//     {
//         id: 5,
//         title: "Trousers",
//         imageUrl: Trousers2,
//         price: 100.0,
//         description: "Black Trousers"
//     },
//     {
//         id: 6,
//         title: "Trousers",
//         imageUrl: Trousers,
//         price: 100.0,
//         description: "Black Trousers"
//     },
//     {
//         id: 7,
//         title: "Trousers",
//         imageUrl: Trousers2,
//         price: 100.0,
//         description: "Black Trousers"
//     },
//     {
//         id: 8,
//         title: "Trousers",
//         imageUrl: Trousers2,
//         price: 100.0,
//         description: "Black Trousers"
//     },
//     //<-----------------------------------------------------------------------------
//     {
//         id: 3,
//         title: "Hoody",
//         imageUrl: Hoody,
//         price: 100.0,
//         description: "Black Hoody"
//     },
//     {
//         id: 4, 
//         title: "Hat",
//         imageUrl: Hat,
//         price: 100.0,
//         description: "Black Trousers"
//     },
  
// ]

// export const testCategories: Category[] = [
//     { id: 1, name: "Tops", imageUrl: `${Tops}`, title: "Tops" },
//     { id: "hoody", imageUrl: "image_2022-03-26_22-36-49.png", title: "Hoody" },
//     { id: "hats", imageUrl: "image_2022-03-26_22-39-02.png", title: "Hats" },
//     { id: "trousers", imageUrl: "image_2022-03-26_22-37-24.png", title: "Trousers" }
// ]

export const testCategories: Category[] = [
    { id: 1, name: "Tops", },
    { id: 2, name: "Hoody" },
    { id: 3, name: "Hats" },
    { id: 4, name: "Trousers" }
];

type ItemCategoryLink = {
    itemId: number,
    categoryId: number
}

export const itemCategories: ItemCategoryLink[] = [
    {itemId: 1, categoryId: 1},
    {itemId: 2, categoryId: 4},
    {itemId: 5, categoryId: 4},
    {itemId: 6, categoryId: 4},
    {itemId: 7, categoryId: 4},
    {itemId: 3, categoryId: 2},
    {itemId: 4, categoryId: 3},
] 