import { makeStyles } from "@mui/styles";

interface IProps {
  resize: boolean;
}

export const useStyles = makeStyles({
  root: (props: IProps) => ({
    resize: !props.resize ? "none" : "initial",
    borderRadius: 10,
    background: "transparent",
    padding: "16.5px 14px",
    font: "initial",
  }),
});
