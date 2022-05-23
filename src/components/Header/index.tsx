import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBackend from "../../hooks/useBackend";
import Category from "../../models/Category";
import CategoryList from "../CategoryList";
import "./header.css";
import image from "../Icons/logoCaben_Todo1.png";
import { ReactComponent as Cart } from "../Icons/Cart.svg";
import { ReactComponent as UserSVG } from "../Icons/User.svg";
import { ReactComponent as SignIn } from "../Icons/SignIn.svg";
import { ReactComponent as Admin } from "../Icons/Admin.svg";
import User from "../../models/User";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const backend = useBackend();
  // const [user, setUser] = useState<User>()
  const user = useAuth();

  useEffect(() => {
    backend.getCategories().then(setCategories);
  }, []);

  return (
    <header>
      <Link to="/">
        <img src={image} alt="Caben-Todo" className="LogoCaben_Todo" />
      </Link>
      <CategoryList categories={categories} />
      <Link to="/cart" className="CartLink">
        <Cart className="SVGlogo" width={26} height={26} />
      </Link>
      { user
          ? <UserComponent/>
          : <LoginComponent />
      }
    </header>
  );
};

const LoginComponent = () => {
  return(
  <Link to="/signin" className="signIn">
    <SignIn className="SVGlogo" width={26} height={26} />
  </Link>
  );
};

const UserComponent = () => {
  return(
  <Link to="/profile" className="signIn">
    <UserSVG className="SVGlogo" width={26} height={26} />
  </Link>
  )
};

export default Header;
