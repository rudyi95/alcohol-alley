import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import { Box, Container, Typography } from "@mui/material";
import { upperFirst } from "lodash";

import { SimpleCard } from "src/components/card";
import { getItemsAll } from "src/redux/services/itemsService";

import { useAppDispatch, useAppSelector } from "src/utils/hooks/redux";

import { useStyles } from "./style";
import { BreadCrumbs } from "src/components/breadCrumbs";
import Details from "src/pages/private/details";

const ProductsPage: React.FC = () => {
  const classes = useStyles();
  const { category, id } = useParams();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.items);

  useEffect(() => {
    dispatch(getItemsAll({ category }));
  }, [dispatch, category]);

  if (id) {
    return <Details />;
  }

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Box className={classes.header}>
        <BreadCrumbs
          links={[
            { text: "Main Page", url: "/" },
            { text: `${upperFirst(category)}`, url: location.pathname, current: true },
          ]}
        />
        <Box className={classes.sorting}>
          <Typography>CATEGORY</Typography>
          <Typography>SORT BY</Typography>
        </Box>
      </Box>

      <Box className={classes.productsContainer}>
        {items.data.map((item) => {
          return <SimpleCard key={item._id} data={item} />;
        })}
      </Box>
    </Container>
  );
};

export default ProductsPage;
