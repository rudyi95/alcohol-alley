import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 200,
    height: 200,
    cursor: "pointer",
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  },
}));
