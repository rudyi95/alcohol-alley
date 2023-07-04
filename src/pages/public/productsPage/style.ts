import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    textAlign: "center",
    padding: 45,
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
    display: "flex",
    flexWrap: 'wrap',
    gap: 10,
  },
});
