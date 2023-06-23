import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {},
  fixed: {
    width: "320px",
    minWidth: 0,
  },
  withIcon: {},
  iconRight: {
    "& span": {
      flexDirection: "row-reverse",
    },
  },
});
