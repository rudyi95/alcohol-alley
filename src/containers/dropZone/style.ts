import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    border: "1px dashed #8A94A6",
    margin: 1,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 300,
    [theme.breakpoints.down("sm")]: {
      minHeight: 285,
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: 210,
    },
  },
  input: {
    height: "100%",
  },
  textContainer: {
    height: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: 30,
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      "& svg": {
        display: "none",
      },
    },
  },
  textGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: 14,
  },
  normalContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  thumbsContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  thumb: {
    width: "100%",
    height: "100%",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  img: {
    display: "block",
    height: "100%",
    width: "100%",
    maxWidth: 540,
  },
  video: {
    height: "100%",

    "& > div": {
      width: "100% !important",
      height: "auto !important",
    },

    "& iframe, video": {
      borderRadius: 8,
    },
  },
  removeBtn: {
    position: "absolute",
    top: -5,
    right: -5,
    background: theme.palette.secondary.main,
    width: 24,
    height: 24,
    borderRadius: 50,
    border: "none",
    zIndex: 1001,
    cursor: "pointer",

    "& svg": {
      width: 8,
      height: 8,
      color: "#FFF",
    },
  },
  hideBorder: {
    border: "none",
  },
  onlyShowPreview: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1000,
  },
  documentContent: {
    minHeight: 0,
    padding: "16px 0",
  },
  documentText: {
    display: "flex",
    flexDirection: "column",
    rowGap: 14,
  },
  documentContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 28,
  },
}));
