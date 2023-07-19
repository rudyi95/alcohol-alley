import { makeStyles } from "@mui/styles";

interface IProps {
  size: "SM" | "MD" | "LG";
  noWrap?: boolean
}

export const useStyles = makeStyles({
  root: (props: IProps) => ({
    width: "fit-content",
    borderRadius: 10,
    padding: props.size === "SM" ? "5px 20px" : props.size === "MD" ? "10px 40px" : "10px 70px",
    background: "#DB422E",
    cursor: "pointer",
    whiteSpace: props.noWrap ? 'nowrap' : 'normal'
  }),
});
