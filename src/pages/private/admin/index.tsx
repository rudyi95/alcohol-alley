import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminItems from "src/pages/private/admin/items";
import Dashboard from "src/pages/private/admin/dashboard";

const AdminRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="items" element={<AdminItems />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
