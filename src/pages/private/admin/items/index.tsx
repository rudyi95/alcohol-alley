import React from "react";
import Header from "src/components/admin/adminHeader";
import ProductList from "src/components/admin/adminProductList";

import { useStyles } from "./style";
const AdminItems: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <ProductList />
    </div>
  );
};

export default AdminItems;
