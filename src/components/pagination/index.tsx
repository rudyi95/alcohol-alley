import React, { BaseSyntheticEvent } from "react";
import { TablePagination } from "@mui/material";

interface IProps {
  totalCount: number;
  pagination: {
    page: number;
    items: number;
  };
  onChange: React.Dispatch<
    React.SetStateAction<{
      page: number;
      items: number;
    }>
  >;
}

export const CustomPagination: React.FC<IProps> = ({ totalCount, pagination, onChange }) => {
  const onChangeHandler = (e: BaseSyntheticEvent) => {
    const pageCeiled = Math.ceil(totalCount / e.target.value);
    if (totalCount < e.target.value * pageCeiled && pagination.page !== 0) {
      onChange({
        ...pagination,
        items: e.target.value,
        page: pageCeiled - 1,
      });
      return;
    }
    onChange({ ...pagination, items: e.target.value });
  };

  const changePageHandler = (e: unknown, page: number) => {
    onChange({ ...pagination, page });
  };

  return (
    <TablePagination
      component="div"
      rowsPerPageOptions={[5, 10, 25]}
      count={totalCount}
      rowsPerPage={pagination.items}
      page={pagination.page}
      onPageChange={changePageHandler}
      onRowsPerPageChange={onChangeHandler}
    />
  );
};
