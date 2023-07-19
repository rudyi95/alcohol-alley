import React from "react";
import { useNavigate } from "react-router-dom";
import { CardActionArea, CardContent, CardMedia, Card, Badge } from "@mui/material";
import first from "lodash/first";
import isArray from "lodash/isArray";

import { addToOrder } from "src/redux/services/orderService";

import { useAppDispatch, useAppSelector } from "src/utils/hooks/redux";

import { useStyles } from "./style";
import { Button } from "src/shared/ui/button";
// import Rating from '../common/rating';

interface ItemProps {
  className?: string;
  item: Item;
}

const ItemCard: React.FC<ItemProps> = ({ item }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.order);

  return (
    <Card className={classes.root}>
      {item.popular && <Badge badgeContent={"Акція"} color={"secondary"} />}
      <CardActionArea onClick={() => navigate("/details/" + item._id)}>
        <CardContent className={classes.content}>
          <CardMedia className={classes.itemImg} image={item.image} />
          <div>
            <h3>{item.name}</h3>
          </div>
          <div className={classes.info}>
            <div className={classes.infoContent}>{/* <Rating /> */}</div>
            <div className={classes.infoActions}>
              <Button onClick={() => navigate("/details/" + item._id)} text={"Деталі"} />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "large",
                  fontWeight: "bold",
                }}
              >
                {isArray(item.price) ? first(item.price) : item.price}₴
              </div>
              <Button
                text={"У кошик"}
                onClick={(e: any) => {
                  dispatch(addToOrder(items, { ...item, quantity: 1 }));
                  e.stopPropagation();
                }}
              />
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
