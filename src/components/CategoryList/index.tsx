import { Link } from "react-router-dom";
import Category from "../../models/Category";
import "./style.css";

export type ShopCategory = {
    id: string
    imageUrl: string
    title: string
}

export type CategoryListProps = {
    categories: Category[]
}

function CategoryList(props: CategoryListProps) {
    return (
        <div className="categories-container">
            <div className="categories-corousel">
                {
                    props.categories.map((category, index) => {
                        return (
                            <Link className="category" key={index} to={`/items?categoryId=${category.id}`}>
                                    <span className="title">{category.name}</span>
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default CategoryList;
