import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    justifyItems: "center",
    alignItems: "center",
    rowGap: 10,
  },
});
