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

  form: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },

  headText: {
    margin: 50,
    letterSpacing: 5,
    textAlign: "center",
    opacity: 0.5,
  },

  items: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    rowGap: 10,
  },
}));
