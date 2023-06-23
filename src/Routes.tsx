import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// import ProductList from "src/pages/private/products";
import Details from "src/pages/private/details";
import Login from "src/pages/public/signIn";
import Register from "src/pages/public/signUp";
import AdminDashboard from "src/pages/private/admin";
import AdminItems from "src/pages/private/admin/items";
import ProductsPage from "src/pages/public/productsPage";
// import MainPage from "src/pages/public/mainPage";
import Landing from "src/pages/public/landing";

import { Layout } from "src/containers/layout";
import { useToken } from "./utils/hooks/useToken";

const Routers: React.FC = () => {
  const [token] = useToken();

  return (
    <div className="app">
      <Routes>
        <Route path="/my-shop.github.io" element={<Layout />}>
          <Route path="/my-shop.github.io" element={<Landing />} />

          <Route path="products">
            <Route path=":category" element={<ProductsPage />}>
              <Route path=":id" element={<Details />} />
            </Route>
          </Route>

          <Route
            path="admin"
            element={!!token ? <AdminDashboard /> : <Navigate to="/login" replace />}
          />

          <Route
            path="admin/items"
            element={!!token ? <AdminItems /> : <Navigate to="/login" replace />}
          />

          <Route path="*" element={<div style={{ padding: 20 }}>not found</div>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<div style={{ padding: 20 }}>not found</div>} />
      </Routes>
    </div>
  );
};

export default Routers;
