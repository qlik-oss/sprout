import { useControl } from "@qlik/sprout-css-hooks";

export type UseToggleProps = {
  toggled?: boolean;
  defaultToggled?: boolean;
  onChange?: (toggled: boolean) => void;
};

export const useToggle = ({
  onChange,
  toggled,
  defaultToggled,
}: UseToggleProps) => {
  const controlled = useControl<boolean>(
    {
      onChange,
      toggled,
      defaultToggled,
    },
    {
      onChangeKey: "onChange",
      valueKey: "toggled",
      defaultValueKey: "defaultToggled",
    },
  );
  return controlled;
};
