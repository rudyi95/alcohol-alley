import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    cursor: "pointer",
    color: "black",
  },
  disabled: {
    color: "grey",
    cursor: "not-allowed",
  },
});
