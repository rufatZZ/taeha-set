import clsx from "clsx";

import { useBackgrounds } from "../../../api/use-backgrounds";
import { Error, Loading } from "../../../components";
import { usePickerContext } from "../../../context/PickerContext";
import { ValueType } from "../../../types";

export const BackgroundPicker = () => {
  const { isLoading, data, error } = useBackgrounds();
  const { bgImage, setBgImage } = usePickerContext();

  const isChoosen = (input: ValueType) => input.id === bgImage.id;

  return (
    <div>
      <h3 className="text-2xl mb-2">Select a background photo</h3>
      <div className="content--background-picker flex space-x-4">
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Error content={error} />
        ) : data?.length ? (
          data?.map((image) => (
            <div
              className={clsx(
                "w-24 aspect-square bg-slate-200 border-2 rounded transition hover:opacity-70 hover:cursor-pointer",
                { "border-indigo-500/100": isChoosen(image) }
              )}
              key={image.id}
              onClick={() => setBgImage(image)}
            >
              <img
                className="w-full aspect-square object-cover"
                src={image.src}
                alt={image.name}
              />
            </div>
          ))
        ) : (
          <Error content={"No photo to show"} />
        )}
      </div>
    </div>
  );
};
