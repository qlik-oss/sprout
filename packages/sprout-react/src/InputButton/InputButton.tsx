// eslint-disable-next-line @typescript-eslint/no-redeclare
import { type MouseEvent, type Ref, forwardRef } from "react";

import { useControl } from "@qlik/sprout-react-hooks";
import sprout from "@qlik/sprout-css-modules";

import { ProgressCircular } from "../Progress";
import type { HTMLButtonProps } from "../htmlTypes";

import style from "./InputButton.module.css";

export type InputButtonProps = Omit<
  HTMLButtonProps,
  "type" | "onClick" | "size"
> & {
  "aria-label"?: string;
  size?: "xs" | "s";
  loading?: boolean;
  initialLoading?: boolean;
  onLoadingChange?: (loading: boolean) => void;
  onClick: (
    event: MouseEvent<HTMLButtonElement>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-invalid-void-type
  ) => void | Promise<any>;
};

export const InputButton = forwardRef<HTMLButtonElement, InputButtonProps>(
  InputButtonBase,
);

function InputButtonBase(
  {
    onClick,
    disabled,
    loading,
    initialLoading,
    onLoadingChange,
    "aria-label": ariaLabel,
    size,
    ...props
  }: InputButtonProps,
  ref?: Ref<HTMLButtonElement>,
) {
  const controlledLoading = useControl(
    { loading, initialLoading, onLoadingChange },
    {
      valueKey: "loading",
      defaultValueKey: "initialLoading",
      onChangeKey: "onLoadingChange",
      selector: (value) => value,
    },
  );

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const clickOutput = onClick(event);
    if (clickOutput instanceof Promise) {
      controlledLoading.onChange(true);
      clickOutput
        .then(() => {
          controlledLoading.onChange(false);
        })
        .catch((error: unknown) => {
          // eslint-disable-next-line no-console
          console.error(error);
          controlledLoading.onChange(false);
        });
    }
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      data-size={size}
      disabled={disabled || loading}
      type="button"
      className={sprout.classNames(
        "items-center",
        "bg-transparent",
        "cursor-pointer",
        "inline-flex",
        "justify-center",
        "m-0",
        "p-s",
        "radius-pill",
        "text-default",
        {
          [style.input_button]: true,
        },
      )}
      aria-label={ariaLabel}
      {...props}
    >
      <span>
        {loading ? (
          <ProgressCircular size="s" />
        ) : (
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.1464 13.8536L2.14642 2.85355L2.85353 2.14645L13.8535 13.1464L13.1464 13.8536Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.8535 2.85355L2.85353 13.8536L2.14642 13.1464L13.1464 2.14645L13.8535 2.85355Z"
                  fill="currentColor"
                />
              </g>
            </g>
          </svg>
        )}
      </span>
    </button>
  );
}

InputButtonBase.displayName = "InputButton";
