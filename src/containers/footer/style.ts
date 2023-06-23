import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    height: 246,
    background: "#030305",
    padding: 53
  },
  footerInner: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    rowGap: 14,
    color: "#FFF",
  },
});
