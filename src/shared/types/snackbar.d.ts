declare type TSnackbarType = "error" | "info" | "success" | "warning";

declare interface ISnackbar {
  className?: string;
  type: TSnackbarType;
  text: string;
  open: boolean;
}
