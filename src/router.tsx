import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Cart from "./pages/Cart/Cart";
import LoginPage from "./pages/LoginPage";
import { Profile } from "./pages/Profile";
import RegistrationPage from "./pages/RegistrationPage";
import AuthProvider from "./context/Auth/AuthProvider";
import RequireAuth from "./context/RequireAuth";
import ShopItemDetail from "./pages/ItemDetail";
import ItemListPage from "./pages/ItemListPage";
import MainPage from "./pages/MainPage";
import CartProvider from "./context/CartProvider";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <App>
          <CartProvider>
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
          </CartProvider>
        </App>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
