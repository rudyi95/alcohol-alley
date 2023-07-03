import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: 246,
    background: "#030305",
    padding: 53,

    [theme.breakpoints.down("md")]: {},
  },
  footerInner: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      rowGap: 20,
    },
  },
  column: {
    display: "flex",
    flexDirection: "column",
    rowGap: 14,
    color: "#FFF",
  },
  logoContainer: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  footerLinks: {
    display: "flex",

    [theme.breakpoints.up("md")]: {
      gap: "10vw",
    },
  },
}));
