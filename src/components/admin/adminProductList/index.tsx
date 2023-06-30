import React, { BaseSyntheticEvent, useEffect, useState } from "react";

import {
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";

import { EditItemModal } from "src/containers/modals";
import { CustomPagination } from "src/components/pagination";

import { deleteItem, getItemsAll } from "src/redux/services/itemsService";

import { useAppDispatch, useAppSelector } from "src/utils/hooks/redux";
import { itemsCategory } from "src/utils/constants/select";

import { useStyles } from "./style";

const getCategoryLabel = (value: string) => {
  const label = itemsCategory.find((item) => item.value === value)?.label;

  return label || "";
};

const Upload: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.items);
  const { data, totalCount } = items;
  const [value, setValue] = useState<Item>();
  const [open, setOpen] = useState(false);

  const [pagination, setPagination] = useState({ page: 0, items: 10 });

  const handleDelete = (e: BaseSyntheticEvent) => {
    dispatch(
      deleteItem({
        data: e.currentTarget.id,
        func: () => {
          dispatch(getItemsAll({}));
        },
      })
    );
  };

  useEffect(() => {
    dispatch(getItemsAll({ page: pagination.page + 1, limit: pagination.items }));
  }, [dispatch, pagination]);

  return (
    <div className={classes.root}>
      <TableContainer component={Paper} className={classes.table}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell align="right">Promo</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: Item) => {
              return (
                <TableRow key={row._id}>
                  <TableCell component="th" scope="row">
                    <Box sx={{ width: "100px", height: "100px" }}>
                      <img
                        src={row.image || "https://via.placeholder.com/255x143?text=No+Img"}
                        alt=""
                        className={classes.image}
                      />
                    </Box>
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{getCategoryLabel(row.category)}</TableCell>
                  <TableCell align="right">{row.volume}</TableCell>
                  <TableCell align="right">{row.popular ? "Акція" : ""}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">
                    <Button id={row._id} onClick={handleDelete}>
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      id={row._id}
                      onClick={() => {
                        setValue(row);
                        setOpen(true);
                      }}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomPagination totalCount={totalCount} pagination={pagination} onChange={setPagination} />
      {!!value && <EditItemModal handleClose={() => setOpen(false)} open={open} item={value} />}
    </div>
  );
};

export default Upload;
