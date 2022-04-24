import {
    BrowserRouter as Router, Route, Routes,
} from "react-router-dom";

import App from "./components/App";
import PurchasePage from "./components/Purchase";
import ShopItemDetail from "./pages/ItemDetail";
import ItemListPage from "./pages/ItemListPage";
import MainPage from "./pages/MainPage";


const AppRoutes = () => {
    return (
        <Router>
            <App >
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="items" element={<ItemListPage />} >
                        <Route path=":itemId" element={<ShopItemDetail />} />
                    </Route>
                </Routes>
            </App>
            <Routes>
                <Route path="purchase" element={<PurchasePage />} />
            </Routes>
        </Router>
    );
}
export default AppRoutes