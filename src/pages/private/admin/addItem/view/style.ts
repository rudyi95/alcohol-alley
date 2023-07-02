import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px 0",
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  items: {
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
    columnGap: 10,
    flexWrap: "wrap",
  },
  itemOption: {
    width: 150,
  },
  cropModal: {
    maxWidth: 900,
    margin: "20px auto",
  },
  cropModalContainer: {
    padding: 32,
    background: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    gap: "24px 0",
    margin: "0 20px",
  },
  cropButtonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  cropButtonGroup: {
    display: "flex",
    gap: 35,

    "& label": {
      padding: 0,
    },
  },
}));
