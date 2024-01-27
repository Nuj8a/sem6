import React from "react";
import { Slider } from "@nextui-org/react";

export default function SliderTheme() {
  return (
    <Slider
      size="sm"
      label="Select brightness"
      defaultValue={60}
      classNames={{
        base: "max-w-md gap-3",
        track: "border-s-secondary-100",
        filler: "bg-gradient-to-r from-white-100 to-black-500",
      }}
      renderThumb={(props) => (
        <div
          {...props}
          className="group p-[3px] flex justify-center items-center top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
        >
          <span className="transition-transform bg-gradient-to-br shadow-small from-secondary-100 to-secondary-500 rounded-full w-2 h-2 block group-data-[dragging=true]:scale-80" />
        </div>
      )}
    />
  );
}
