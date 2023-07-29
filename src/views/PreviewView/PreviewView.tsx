import { useMemo } from "react";

import { usePickerContext } from "../../context/PickerContext";
import { MemoizedPreview } from "./modules";

export const PreviewView = () => {
  const { bgImage, photo, content, version } = usePickerContext();

  return useMemo(() => {
    return <MemoizedPreview {...{ bgImage, photo, content }} />;
  }, [version]);
};
