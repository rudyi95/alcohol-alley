import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { calcSize } from "src/utils/helpers/commonHelper";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 50,
    padding: "110px 0",

    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  categoryTitle: {
    fontSize: "64px",
    fontWeight: 500,
    textTransform: "uppercase",

    [theme.breakpoints.down("lg")]: {
      fontSize: calcSize(theme.breakpoints.values.xs, theme.breakpoints.values.md, 34, 54),
    },
  },
  categoryList: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",

    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  },
  categoryContainer: {
    width: "100%",
    position: "relative",
    border: "none",
    cursor: "pointer",

    "& img": {
      width: "100%",
      height: "auto",
    },
  },
  categoryItem: {
    fontSize: "40px",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#FFF",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    [theme.breakpoints.down("lg")]: {
      fontSize: calcSize(theme.breakpoints.values.xs, theme.breakpoints.values.md, 8, 40),
    },
  },
}));
