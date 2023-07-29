import { usePickerContext } from "../../../context/PickerContext";

export const PreviewContent = () => {
  const { content, setContent } = usePickerContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }

  return (
    <div>
      <h3 className="text-2xl mb-2">Write your custom text</h3>
      <input value={content} onChange={handleChange} type="text" className="border p-2 rounded" />
    </div>
  );
};
