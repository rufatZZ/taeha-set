import { PropsWithChildren } from "react";

export type ReactFunctionComponentWithChildren<T = Record<string, unknown>> =
  React.FC<PropsWithChildren<T>>;

export type ValueType = {
  id: string;
  name: string;
  src: string;
};
