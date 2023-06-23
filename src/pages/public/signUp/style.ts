import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& .MuiFormControl-root": {
      marginBottom: 30,
      padding: "2px 0px",
      paddingBottom: 5,
      backgroundColor: "transparent",
      border: "none !important",
      outline: "none",
      borderBottom: "1.5px solid",
      borderBottomColor: "grey",
      fontWeight: 700,
      color: "#585858",
      opacity: 0.55,
    },
    "& button": {
      padding: "20px 30px",
      outline: "none",
      border: "none",
      fontSize: "medium",
      fontWeight: 600,
      letterSpacing: 5,
      borderRadius: 5,
      cursor: "pointer",
      color: "grey",
      "&:hover": {
        border: "none",
      },
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "50px 100px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    width: "25em",
    height: "40em",
  },
  avatar: {
    marginBottom: 10,
  },
  headText: {
    marginBottom: 50,
    letterSpacing: 5,
    textAlign: "center",
    opacity: 0.5,
  },

  items: {
    display: "flex",
    flexDirection: "column",
  },
});
