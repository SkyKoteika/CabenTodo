import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Cart from "./components/Cart/Cart";
import LoginPage from "./components/LoginPage";
import { Profile } from "./components/Profile";
import PurchasePage from "./components/Purchase";
import RegistrationPage from "./components/RegistrationPage";
import AuthProvider from "./hoc/AuthProvider";
import RequireAuth from "./hoc/RequireAuth";
import ShopItemDetail from "./pages/ItemDetail";
import ItemListPage from "./pages/ItemListPage";
import MainPage from "./pages/MainPage";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <App>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="items" element={<ItemListPage />} />
            <Route path="items/:itemId" element={<ShopItemDetail />} />
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/signup" element={<RegistrationPage />} />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route
              path="/cart"
              element={
                <RequireAuth>
                  <Cart />
                </RequireAuth>
              }
            />
          </Routes>
        </App>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
