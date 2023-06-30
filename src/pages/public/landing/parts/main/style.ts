import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
    height: "100%",
    maxHeight: 300,
    background: "#030305",
  },
  leftMain: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  logoIcon: {
    width: 625,
    height: "auto",
  },
  rightMain: {
    width: "20%",

    "& img": {
      width: "auto",
      height: "100%",
    },
  },
});
