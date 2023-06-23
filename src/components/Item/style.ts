import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    minHeight: 200,
    maxHeight: 500,
    maxWidth: 450,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    overflow: "inherit",

    "& .MuiCardHeader-content": {
      width: "100%",
    },
    "& .MuiCardActionArea-root": {
      height: "100%",
    },
    "& .MuiTypography-displayBlock": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    "& .MuiBadge-root": {
      position: "absolute",
      top: 14,
      right: 25,
    },
    "& .MuiCardContent-root": {
      padding: 0,
    },
  },
  content: {
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
  itemImg: {
    width: 140,
    height: 140,
    backgroundSize: "contain",
  },
  info: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  infoContent: {},
  infoActions: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  promotion: {
    margin: 8,
    color: "#1a9349",
    fontWeight: "bold",
  },
  actions: {
    height: 45,
    justifyContent: "space-around",
    padding: 10,
  },
  details: {
    marginRight: 60,
    marginLeft: 8,
  },
});
