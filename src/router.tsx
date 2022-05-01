import {
    BrowserRouter as Router, Route, Routes,
} from "react-router-dom";
import App from "./components/App";
import LoginPage from "./components/LoginPage";
import PurchasePage from "./components/Purchase";
import RegistrationPage from "./components/RegistrationPage";
import ShopItemDetail from "./pages/ItemDetail";
import ItemListPage from "./pages/ItemListPage";
import MainPage from "./pages/MainPage";


const AppRoutes = () => {
    return (
        <Router>
            <App >
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="items" element={<ItemListPage />} />
                    <Route path="items/:itemId" element={<ShopItemDetail />} />

                </Routes>
            </App>
            <Routes>
                <Route path="signin" element={<LoginPage />} />
                <Route path="signup" element={<RegistrationPage />} />
            </Routes>
        </Router>
    );
}
export default AppRoutes;