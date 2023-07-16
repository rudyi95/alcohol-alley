import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface IProps {
  maxWidth?: number;
}

export const useStyles = makeStyles((theme: Theme) => ({
  root: (props: IProps) => ({
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 8,
    padding: 0,
    maxWidth: props.maxWidth,

    "& span": {
      // color: theme.palette.textSecondary2.main,
    },

    "& .Mui-error": {
      // color: theme.palette.error[800],
    },
    "& .MuiFormHelperText-root": {
      // color: theme.palette.error[800],
    },
  }),
  textField: {
    width: "inherit",

    "& > div": {
      borderRadius: 8,
      // backgroundColor: theme.palette.grey[100],
      color: "inherit",

      "& input": {
        textFillColor: "inherit",
      },
    },

    "& fieldset": {
      // borderColor: theme.palette.grey[300],
    },
    "& .Mui-error fieldset": {
      // borderColor: `${theme.palette.error[800]} !important`,
    },
    "& .MuiFormHelperText-root.Mui-error": {
      // color: theme.palette.error[800],
    },

    "& input::-ms-reveal, input::-ms-clear": {
      display: "none",
    },
  },
}));
