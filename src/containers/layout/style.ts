import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  content: {
    position: "relative",
    flex: "1 0 auto",
    background: "#efefef",
  },
}));
