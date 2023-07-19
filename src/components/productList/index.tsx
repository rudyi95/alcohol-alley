import React from "react";

// import Item from "../Item";
import { CardComponent } from "src/containers/logicComponents";

import { useAppSelector } from "src/utils/hooks/redux";

import { useStyles } from "./style";

const ProductList: React.FC = () => {
  const classes = useStyles();
  const { items } = useAppSelector((state) => state.items);

  return (
    <div className={classes.root}>
      {items.data.map((item: Item) => {
        return <CardComponent key={item._id} data={item} />;
      })}
    </div>
  );
};

export default ProductList;
