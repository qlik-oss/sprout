/* eslint-disable @typescript-eslint/ban-ts-comment */
import { type ReactNode, type Ref, cloneElement, isValidElement } from "react";

import { mergeRefs } from "./Utils/mergeRef";

export type SproutGeneratorFunction<T extends ReactNode, P, R = unknown> = (
  props: P,
  ref?: R,
) => T;

export type ChildOrGenerator<T extends ReactNode, P, R = unknown> =
  | T
  | SproutGeneratorFunction<T, P, R>;

/**
 * This function iterate over props to add keys into a copy of nextProps.
 * This is a limitation of cloneElement it manage overrides so we have to manage merge.
 */
function mergeProps<T extends ReactNode>(
  child: T,
  nextProps: Record<string, unknown> & { ref?: Ref<HTMLElement> },
  nextRef?: Ref<HTMLElement> | undefined,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let props: Record<string, any> & { ref?: Ref<HTMLElement> } = {};
  let refProps: Ref<HTMLElement> | undefined;
  const nextPropsRef: Ref<HTMLElement> | undefined = nextProps.ref;
  let ref: Ref<HTMLElement> | undefined;
  if (isValidElement(child)) {
    props = child.props as Record<string, unknown> & { ref?: Ref<HTMLElement> };
    // @ts-ignore
    ref = child.ref;
    if (props.ref) {
      refProps = props.ref;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const returnProps = Object.keys(nextProps).reduce<Record<string, any>>(
    (acc, key) => {
      if (key === "ref") {
        return acc;
      }
      // @ts-ignore
      if (props[key]) {
        // event handler
        // @ts-ignore
        if (typeof props[key] === "function") {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          acc[key] = (...args: Array<any>) => {
            // @ts-ignore
            if (props[key] && typeof props[key] === "function") {
              // @ts-ignore
              props[key](...args);
            }
            if (nextProps[key] && typeof nextProps[key] === "function") {
              nextProps[key](...args);
            }
          };
        } else {
          // override
          acc[key] = nextProps[key];
        }
      }
      return acc;
    },
    { ...nextProps },
  );

  const toMergeRef = [nextRef, refProps, nextPropsRef];
  if (ref && ref !== refProps && ref !== nextPropsRef) {
    toMergeRef.push(ref);
  }

  returnProps.ref = mergeRefs(toMergeRef.filter(Boolean));
  return returnProps;
}

/**
 * Utility function for `renderOrClone`.
 * This function is a trick to check if given element is a function but without loosing expected signature (generator function).
 * Is is barely like casting function when invoking it but in more elegant way.
 * @param element element to check
 * @returns true if element is a function. Because function's signature is restricted (see type `GeneratorFunction`) we can
 * infer it is a generator function
 */
function isGeneratorFunction<T extends ReactNode, P, R = unknown>(
  element: ChildOrGenerator<T, P, R>,
): element is SproutGeneratorFunction<T, P, R> {
  return typeof element === "function";
}

export function renderOrClone<T extends ReactNode, P, R = Ref<unknown>>(
  children: ChildOrGenerator<T, P, R>,
  props: P,
  ref?: R,
) {
  if (isGeneratorFunction(children)) {
    return children(props, ref);
  }

  if (isValidElement(children) && props) {
    // @ts-ignore
    const newProps = mergeProps(children, props, ref);
    return cloneElement(children, newProps);
  }

  // If here it means "children" is not a function nor a clonable element - so return it
  return children;
}
