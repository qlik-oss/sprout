/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

type UseControlOptions = {
  valueKey?: string;
  defaultValueKey?: string;
  onChangeKey?: string;
  selector?: (...args: any) => any;
};
export type UseControlReturns<T> = {
  value?: T;
  defaultValue?: T;
  onChange: (...args: any) => void;
};

/**
 * useControl give you a controlled API for your component
 * so either you can use it as a controlled or uncontrolled component.
 * @param props - The props of the component.
 * @param opts - The options for the hook.
 * @returns The value and onChange function into an object.
 * @example
 * const { value, onChange } = useControl(props, {
 *  valueKey: "value",
 *  defaultValueKey: "defaultValue",
 *  onChangeKey: "onChange",
 * });
 */
export function useControl<T>(props: any, opts?: UseControlOptions): UseControlReturns<T> {
  const propsValue = props[opts?.valueKey || "value"];
  const defaultValue = props[opts?.defaultValueKey || "defaultValue"];
  const onChangeFn = props[opts?.onChangeKey || "onChange"];

  const isControlled = propsValue !== undefined && onChangeFn !== undefined;
  const [state, setState] = useState<T>(defaultValue);

  // in case no onChange but a value is passed let's sync
  useEffect(() => {
    if (propsValue !== undefined && !isControlled && propsValue !== state) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setState(propsValue);
    }
  }, [propsValue, isControlled, state]);

  const onChange = (value: any, ...args: any) => {
    let safeValue = value;

    if (opts?.selector) {
      safeValue = opts.selector(value, ...args);
    }
    if (onChangeFn) {
      onChangeFn(value, ...args);
    }
    if (!isControlled) {
      setState(safeValue);
    }
  };

  // fully controlled
  if (isControlled) {
    return {
      value: propsValue,
      onChange: onChangeFn,
    };
  }
  // no control at all let's provide a controlled API for free
  return {
    onChange,
    value: state,
  };
}
