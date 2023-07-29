import { PickerContextValueType } from "../../../context/PickerContext";

export const MemoizedPreview: React.FC<PickerContextValueType> = (props) => {
  const { bgImage, photo, content } = props;

  const styles = {
    "--bgImage-url": `url(${bgImage.src})`,
  };

  return (
    <div
      style={styles}
      className="content-preview flex flex-col m-4 p-4 justify-center items-center border-t lg:border-l border-l-gray-200 bg-no-repeat bg-cover bg-[image:var(--bgImage-url)]"
    >
      <h3 className="text-3xl truncate mb-4">{content}</h3>
      <div className="min-w-[240px] w-1/2 aspect-square border rounded bg-slate-50">
        <img src={photo.src} alt={photo.src} />
      </div>
    </div>
  );
};
