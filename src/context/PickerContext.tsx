import { createContext, useContext, useState } from "react";

import { ReactFunctionComponentWithChildren, ValueType } from "../types";

export type PickerContextValueType = {
  content: string;
  bgImage: ValueType;
  photo: ValueType;
};

type PickerContextPropsType = {
  version: string;
  setContent: Function;
  setBgImage: Function;
  setPhoto: Function;
  onSubmit: React.MouseEvent<HTMLElement>;
} & PickerContextValueType;

const PickerContext = createContext<PickerContextPropsType | null>(null);

export function usePickerContext() {
  const pickerContext = useContext(PickerContext);

  if (!pickerContext) {
    throw new Error(
      "usePickerContext must be used within the PickerContext.Provider"
    );
  }
  return pickerContext;
}

export const PickerContextProvider: ReactFunctionComponentWithChildren = ({
  children,
}) => {
  const [content, setContent] = useState<string>("Preview");
  const [version, setVersion] = useState<string>("0");
  const [bgImage, setBgImage] = useState<ValueType>({} as ValueType);
  const [photo, setPhoto] = useState<ValueType>({} as ValueType);

  const onSubmit = () => setVersion(crypto.randomUUID());

  return (
    <PickerContext.Provider
      value={{
        content,
        bgImage,
        photo,
        version,
        setBgImage,
        setContent,
        setPhoto,
        onSubmit,
      }}
    >
      {children}
    </PickerContext.Provider>
  );
};
