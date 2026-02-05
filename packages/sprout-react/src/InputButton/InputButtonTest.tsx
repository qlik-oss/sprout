import { InputButton, type InputButtonProps } from "./InputButton";

export function InputButtonTest({
  onMouseDown,
  ...props
}: InputButtonProps & { onMouseDown: (type: string) => void }) {
  return (
    <InputButton
      {...props}
      onMouseDown={(event) => {
        onMouseDown(
          (event.target as Element).attributes.getNamedItem("type")?.value ||
            "unknown",
        );
      }}
    />
  );
}
