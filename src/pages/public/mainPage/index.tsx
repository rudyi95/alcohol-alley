import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";

import { CustomPagination } from "src/components/pagination";
// import ProductsHeader from "../../../components/ProductsHeader";
import ProductsList from "../../../components/productList";

import { FilterContainer } from "src/containers/FilterContainer";

import { getItemsAll } from "src/redux/services/itemsService";

import { useAppDispatch, useAppSelector } from "src/utils/hooks/redux";

import { useStyles } from "./style";

const MainPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [pagination, setPagination] = useState({ page: 0, items: 10 });
  const { items } = useAppSelector((state) => state.items);

  useEffect(() => {
    dispatch(getItemsAll({ page: pagination.page + 1, limit: pagination.items }));
  }, [dispatch, pagination]);

  return (
    <Box className={classes.root}>
      {/* <ProductsHeader /> */}
      <FilterContainer />

      <ProductsList />

      <CustomPagination
        totalCount={items.totalCount}
        pagination={pagination}
        onChange={setPagination}
      />
    </Box>
  );
};

export default MainPage;
