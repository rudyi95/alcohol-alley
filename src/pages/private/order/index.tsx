import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

import { setCheckedOutItems } from "src/redux/actions/index";

import { useStyles } from "./style";

// This component shows the items user checked out from the cart.
const Order: React.FC = () => {
  const checkedOutItems = useSelector((state: any) => state.order.checkedOutItems);
  const dispatch = useDispatch();
  const classes = useStyles();

  let totalPrice = checkedOutItems.reduce((accumulator: number, item: any) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  return (
    <div className={classes.root}>
      <div className={classes.orderCost}>Вартість замовлення</div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Назва</TableCell>
            <TableCell>Ціна</TableCell>
            <TableCell>Кількість</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {checkedOutItems.map((item: any, index: number) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.quantity}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <div className={classes.total}>Підсумок: {totalPrice} грн.</div>
      <Button
        color="primary"
        variant="outlined"
        disabled={totalPrice === 0}
        onClick={() => console.log("purchased")}
      >
        Підтвердити
      </Button>
      <Button
        color="secondary"
        variant="outlined"
        disabled={totalPrice === 0}
        // onClick={() => dispatch(setCheckedOutItems([]))}
      >
        Скасувати
      </Button>
    </div>
  );
};

export default Order;
