/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export function useControlled<T>(
  props: T,
  opts: {
    valueKey: keyof T;
    defaultValueKey: keyof T;
    onChangeKey: keyof T;
    defaultValue: T[keyof T];
    selector: (e: any) => T[keyof T];
  },
): T {
  const isControlled = props[opts.valueKey] !== undefined;
  const defaultValue = (props[opts.defaultValueKey] || opts.defaultValue) as T[keyof T];
  const [controlledValue, setControlledValue] = useState<T[keyof T]>(defaultValue);

  const onChange = props[opts.onChangeKey] as ((value: T[keyof T]) => void) | undefined;

  if (isControlled) {
    return props;
  }
  const handleChange = (e: any) => {
    const newValue = opts.selector(e);
    setControlledValue(newValue);
    onChange?.(newValue);
  };

  return {
    [opts.valueKey]: controlledValue,
    [opts.onChangeKey]: handleChange,
  } as T;
}
