import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: "#030305",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
    gap: 10,
  },
  iconsGroup: {
    display: "flex",
    alignItems: "center",
    columnGap: 43,
    
    [theme.breakpoints.down('md')]: {
      columnGap: 13,
    }
  },
  logo: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));
