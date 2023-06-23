import React from "react";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";
import { Phone as PhoneIcon } from "@mui/icons-material";

import { ActionModal } from "src/components/modal";
import { IconButton, ActionButton } from "src/components/common/buttons";

import { useAppSelector } from "src/utils/hooks/redux";
import { ButtonIconType } from "src/types/enums";

import { useStyles } from "./style";
import { NavLink } from "react-router-dom";

interface IProps {
  open: boolean;
  handleClose: () => void;
}

export const CartItemModal: React.FC<IProps> = ({ open, handleClose }) => {
  const classes = useStyles();
  const { items } = useAppSelector((state) => state.order);

  const totalPrice = items.reduce((accumulator: number, item: OrderItem) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  return (
    <ActionModal className={classes.root} open={open} onClose={handleClose}>
      <Box className={classes.content}>
        <AppBar position="static" style={{ backgroundColor: "#3863aa" }}>
          <Toolbar>
            <IconButton
              type={ButtonIconType.shoppingCartOutlined}
              title={""}
              className={classes.cartIcon}
              fontSize={"large"}
            />
            Кошик
          </Toolbar>
        </AppBar>
        <TableContainer>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Назва</TableCell>
                <TableCell align="right">Ціна</TableCell>
                <TableCell align="right">Кількість</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item: OrderItem, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="right">
                      <NavLink to={`/details/${item._id}`}>{item.name}</NavLink>
                    </TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <div className={classes.btnGroup}>
          <ActionButton
            onClick={() => {}}
            text={"Замовити"}
            icon={<PhoneIcon style={{ marginRight: 15 }} />}
            color="primary"
            variant="outlined"
            disabled={totalPrice === 0}
            href="tel: +380632112003"
          />
          <ActionButton
            onClick={() => {
              handleClose();
              // dispatch(setCheckedOutItems(items));
              // navigate("/order");
            }}
            text={"Підтвердити"}
            color="primary"
            variant="outlined"
            disabled={totalPrice === 0}
          />
        </div>
      </Box>
    </ActionModal>
  );
};
