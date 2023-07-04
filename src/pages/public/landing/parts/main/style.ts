import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    height: "100%",
    background: "#030305",
  },
  leftMain: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  logoIcon: {
    width: 625,
    height: "auto",

    [theme.breakpoints.down("lg")]: {
      width: 425,
    },

    [theme.breakpoints.down("md")]: {
      width: 325,
    },

    [theme.breakpoints.down("sm")]: {
      width: 225,
    },
  },
  rightMain: {
    width: 247,

    "& img": {
      width: "100%",
      height: "auto",
    },
  },
}));
