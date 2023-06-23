import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {},

  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: "24px",
    padding: 4,
  },
  cartIcon: {
    color: "white",
    marginRight: 20,
  },
  btnGroup: {
    display: "flex",
    justifyContent: "space-around",
    minWidth: 360,
    "& button": {
      display: "flex",
      alignItems: "center",
    },
  },
}));
