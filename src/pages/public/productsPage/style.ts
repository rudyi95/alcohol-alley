import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    textAlign: "center",
    padding: 48,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  sorting: {
    display: "flex",
    columnGap: "10px",
  },
  productsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: 10,
  },
});
