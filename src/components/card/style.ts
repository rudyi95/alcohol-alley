import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // height: 290,
    // border: "1px black solid",
    width: 270,
    border: "none",
  },
  imageContainer: {
    width: "100%",
    height: 300,

    // [theme.breakpoints.down("sm")]: {
    //   height: 200,
    // },
  },
  image: {
    height: "100%",
    objectFit: "contain",
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    width: "fit-content",
    display: "-webkit-box !important",
    boxOrient: "vertical",
    lineClamp: 1,
    wordBreak: "break-word",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  text: {
    // color: theme.palette.textSecondary2.main,
  },
  typeInfo: {
    display: "inline-block",
    // color: theme.palette.textSecondary.main,
    // border: `1px solid ${theme.palette.textSecondary2.main}`,
    borderRadius: "8px",
    padding: "0 4px",
    "&>span": {
      lineHeight: "20px",
    },
  },
  learnMoreBtn: {
    height: "auto",
    padding: 0,
  },
  wishBox: {
    position: "absolute",
    width: 36,
    height: 36,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // background: theme.palette.neutral[200],
    zIndex: 1,
    borderRadius: 25,
    right: 8,
    top: 8,

    "& button": {
      padding: 0,
      height: "fit-content",
    },
  },
}));
