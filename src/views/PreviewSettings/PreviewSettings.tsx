import { usePickerContext } from "../../context/PickerContext";
import { BackgroundPicker, PhotoPicker, PreviewContent } from "./modules";

export const PreviewSettings = () => {
  const { onSubmit } = usePickerContext();

  return (
    <div className="content-settings flex flex-col space-y-6 p-6 gap-x-4 grow">
      <BackgroundPicker />
      <PhotoPicker />
      <PreviewContent />
      <button
        className="w-max px-4 py-2 font-semibold text-sm bg-slate-500 hover:bg-slate-600 transition text-white rounded-md opacity-90"
        onClick={onSubmit}
      >
        Generate Image
      </button>
    </div>
  );
};
