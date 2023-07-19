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
} from "@mui/material";

import { CustomPagination } from "src/components/pagination";

import { deleteItem, getItemsAll } from "src/redux/services/itemsService";

import { useAppDispatch, useAppSelector } from "src/utils/hooks/redux";

import { useStyles } from "./style";
import { useNavigate } from "react-router-dom";
import { DRINK_CATEGORY } from "src/utils/constants/constants";
import { Button } from "src/shared/ui/button";

const getCategoryLabel = (value: string) => {
  const label = DRINK_CATEGORY.find((item) => item.value === value)?.label;

  return label || "";
};

const Upload: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { items } = useAppSelector((state) => state.items);
  const { data, totalCount } = items;

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
                    <Box sx={{ width: "100px", height: "150px" }}>
                      <img
                        src={row.image?.url || "https://via.placeholder.com/255x143?text=No+Img"}
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
                    <Button id={row._id} onClick={handleDelete} text="Delete" />
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      id={row._id}
                      onClick={() => {
                        navigate(`/admin/edit-item/${row._id}`);
                      }}
                      text="Edit"
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomPagination totalCount={totalCount} pagination={pagination} onChange={setPagination} />
    </div>
  );
};

export default Upload;
