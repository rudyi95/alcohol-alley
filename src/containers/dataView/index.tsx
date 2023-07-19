import React from "react";

import { Loader, Plug } from "src/shared/ui";

interface IProps {
  loading: boolean;
  isEmpty: boolean;
  plug?: string;
  children: React.ReactNode;
}
export const DataRender: React.FC<IProps> = ({ loading, isEmpty, plug, children }) => {
  return loading ? <Loader /> : isEmpty ? <Plug text={plug || "No data"} /> : <>{children}</>;
};
