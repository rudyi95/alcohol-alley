import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  root: {
    padding: 24,
    display: "flex",
    flexDirection: "column",
    rowGap: 34,
  },
  mainInfo: {
    display: "flex",
    columnGap: 71,
  },
  image: {
    minWidth: 400,
    width: 400,
    height: 511,

    "& img": {
      width: "100%",
      height: "auto",
    },
  },
  details: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  mainDetails: {
    display: "flex",
    flexDirection: "column",
    rowGap: 34,
  },
  rating: {},
  detailRows: {
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
  },
  detailRow: {
    display: "flex",
    columnGap: 33,
  },
  addBtn: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row-reverse",
    background: "#DB422E",
    borderRadius: 20,
    padding: "10px 70px",
    columnGap: 30,

    "& svg > path": {
      fill: "black",
    },
  },
  description: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  related: {},
}));
