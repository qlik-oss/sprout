// inspired by https://mortenbarklund.com/blog/react-typescript-props-spread/
import type { ComponentPropsWithoutRef } from "react";

export type DataAttributes = Record<`data-${string}`, string>;

/**
 * Note: color is a legacy attribute. but still part of the spec and supported by font tag and hr tag.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
type EXCLUDED_PROPS = "className" | "style" | "color";

export type HTMLDivProps = Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS> & DataAttributes;
export type HTMLSpanProps = Omit<ComponentPropsWithoutRef<"span">, EXCLUDED_PROPS> & DataAttributes;
export type HTMLUlProps = Omit<ComponentPropsWithoutRef<"ul">, EXCLUDED_PROPS> & DataAttributes;
export type HTMLLiProps = Omit<ComponentPropsWithoutRef<"li">, EXCLUDED_PROPS> & DataAttributes;
export type HTMLTableHeaderProps = Omit<ComponentPropsWithoutRef<"th">, EXCLUDED_PROPS> & DataAttributes;

export type HTMLSelectProps = Omit<ComponentPropsWithoutRef<"select">, EXCLUDED_PROPS> & DataAttributes;
