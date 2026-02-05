/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";

type UseValueControlOptions<P> = {
  defaultValueKey?: keyof P;
  valueKey?: keyof P;
  onChangeKey?: keyof P;
  selector?: (event: any) => string;
};

/**
 * useValueControl is a simplified version of useControl
 * that is specifically designed for value and onChange
 * handling for form elements. This is for internal use only.
 *
 * @param props - The props of the component.
 * @param options - The options for the hook.
 * @returns An object containing the value and onChange function.
 */
export function useValueControl<P extends Record<string, any>>(
  props: P,
  {
    defaultValueKey = "defaultValue",
    valueKey = "value",
    onChangeKey = "onChange",
    selector = (event: any) => event.target.value,
  }: UseValueControlOptions<P> = {},
): Partial<P> {
  const isControlled = typeof props[valueKey] !== "undefined";
  const defaultValue = props[defaultValueKey];
  const hasDefaultValue = typeof defaultValue !== "undefined";
  const [internalValue, setInternalValue] = useState<string>(hasDefaultValue ? defaultValue : "");
  const value = isControlled ? props[valueKey] : internalValue;
  const onChangeProp = props[onChangeKey];

  const onChange = useCallback(
    (event: any, ...args: any) => {
      if (onChangeProp) {
        onChangeProp(event, ...args);
      }

      if (!isControlled) {
        setInternalValue(selector(event));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isControlled, onChangeProp],
  );

  if (isControlled) {
    return {
      [valueKey]: value,
      [onChangeKey]: onChange,
    } as Partial<P>;
  }

  return {
    [defaultValueKey]: defaultValue,
    [onChangeKey]: onChange,
  } as Partial<P>;
}
