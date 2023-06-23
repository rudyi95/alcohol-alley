import React, { useEffect, useState } from "react";

import { CustomPagination } from "src/components/pagination";
// import ProductsHeader from "../../../components/ProductsHeader";
import ProductsList from "../../../components/productList";

import { getPopularAll } from "src/redux/services/itemsService";

import { useAppDispatch, useAppSelector } from "src/utils/hooks/redux";

import { useStyles } from "./style";

const ProductList: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [pagination, setPagination] = useState({ page: 0, items: 10 });
  const { itemsPopular } = useAppSelector((state) => state.items);

  useEffect(() => {
    dispatch(getPopularAll({ page: pagination.page + 1, limit: pagination.items }));
  }, [dispatch, pagination]);

  return (
    <div className={classes.root}>
      {/* <ProductsHeader /> */}

      <ProductsList />

      <CustomPagination
        totalCount={itemsPopular.totalCount}
        pagination={pagination}
        onChange={setPagination}
      />
    </div>
  );
};

export default ProductList;
