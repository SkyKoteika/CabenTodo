import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useBackend from '../../hooks/useBackend';
import Category from '../../models/Category';
import CategoryList from '../CategoryList';
import UserLogo from '../Icons/UserLogo';
import './header.css'
import image from './logoCaben_Todo1.png'

const Header = () => {
   const [categories, setCategories] = useState<Category[]>([]);
   const backend = useBackend();

   useEffect(() => {
      backend.getCategories().then(setCategories);
   }, [])

   return (
      <header>
         <Link to="/">
            <img src={image} alt="Caben-Todo" className="LogoCaben_Todo" />
         </Link>
         <CategoryList categories={categories} />
         <Link to={"/"}>
           {/* <UserLogo height={30} /> */}
         </Link>
      </header>
   );
}

export default Header;