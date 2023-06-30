import React from "react";

import { CircularLoader } from "src/components/loader";
import { CustomPlug } from "src/components/plug";

interface IProps {
  loading: boolean;
  isEmpty: boolean;
  plug?: string;
  children: React.ReactNode;
}
export const DataRender: React.FC<IProps> = ({ loading, isEmpty, plug, children }) => {
  return loading ? (
    <CircularLoader />
  ) : isEmpty ? (
    <CustomPlug text={plug || "No data"} />
  ) : (
    <>{children}</>
  );
};
