import { useState } from "react";
import { type ColorResult, TwitterPicker } from "react-color";

import { IconButton, Popover } from "@qlik/sprout-css-react";

import styles from "./ColorPicker.module.css";

export function ColorPicker({
  defaultSelectedColor,
  onChange,
  colors,
}: {
  defaultSelectedColor?: string;
  onChange?: (color: string) => void;
  colors?: Array<string>;
}) {
  const [selectedColor, setSelectedColor] = useState<string>(
    defaultSelectedColor || "#fff",
  );

  const handleChangeComplete = (color: ColorResult) => {
    setSelectedColor(color.hex);
    onChange?.(color.hex);
  };

  return (
    <Popover
      content={
        <TwitterPicker
          colors={colors}
          color={selectedColor}
          onChangeComplete={handleChangeComplete}
        />
      }
      placement="bottom-start"
    >
      <IconButton
        label="Select color"
        asDropdown
        icon={
          <svg width="16" height="16" viewBox="0 0 16 16">
            <rect
              className={styles["color-picker-selected-color-box"]}
              fill={selectedColor}
              x="0"
              y="0"
              width="16"
              height="16"
            />
          </svg>
        }
      />
    </Popover>
  );
}
