/**
 inspired by https://mortenbarklund.com/blog/react-typescript-props-spread/
 dead website so found a copy here https://web.archive.org/web/20241202204644/https://mortenbarklund.com/blog/react-typescript-props-spread/

| Interface                      | Easy to Write  | Excludes Ref | Includes Specific Properties  | Excludes Invalid Properties  |
|--------------------------------|----------------|--------------|-------------------------------|------------------------------|
| ComponentPropsWithoutRef<"*">  | ✅             | ✅            | ✅                            | ✅                           |
| ComponentProps<"*">            | ✅             | 🚫            | ✅                            | ✅                           |
| HTMLAttributes<HTML*Element>   | 🤔             | 🚫            | ✅                            | ✅                           |
| JSX.IntrinsicElements["*"]     | 🤬             | 🚫            | ✅                            | ✅                           |
| HTMLAttributes<HTML*Element>   | ✅             | 🚫            | 🚫                            | ✅                           |
| HTMLProps<HTML*Element>        | ✅             | 🚫            | ✅                            | 🤯                           |
 */
import type { ComponentPropsWithoutRef } from "react";

export type DataAttributes = Record<`data-${string}`, string>;

/**
 * Note: color is a legacy attribute. but still part of the spec and supported by font tag and hr tag.
 */
type ExcludedProps = "className" | "style" | "color";

export type HTMLDivProps = Omit<
  ComponentPropsWithoutRef<"div">,
  ExcludedProps
> &
  DataAttributes;
export type HTMLSpanProps = Omit<
  ComponentPropsWithoutRef<"span">,
  ExcludedProps
> &
  DataAttributes;
export type HTMLButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  ExcludedProps
> &
  DataAttributes;
export type HTMLInputProps = Omit<
  ComponentPropsWithoutRef<"input">,
  ExcludedProps
> &
  DataAttributes;
export type HTMLNavProps = Omit<
  ComponentPropsWithoutRef<"nav">,
  ExcludedProps
> &
  DataAttributes;
export type HTMLHRProps = Omit<ComponentPropsWithoutRef<"hr">, ExcludedProps> &
  DataAttributes;
export type HTMLUlProps = Omit<ComponentPropsWithoutRef<"ul">, ExcludedProps> &
  DataAttributes;
export type HTMLLiProps = Omit<ComponentPropsWithoutRef<"li">, ExcludedProps> &
  DataAttributes;
export type HTMLTextareaProps = Omit<
  ComponentPropsWithoutRef<"textarea">,
  ExcludedProps
> &
  DataAttributes;
export type HTMLImageProps = Omit<
  ComponentPropsWithoutRef<"img">,
  ExcludedProps
> &
  DataAttributes;
export type HTMLLabelProps = Omit<
  ComponentPropsWithoutRef<"label">,
  ExcludedProps
> &
  DataAttributes;
export type HTMLAnchorProps = Omit<
  ComponentPropsWithoutRef<"a">,
  ExcludedProps
> &
  DataAttributes;

export type HTMLTableProps = Omit<
  ComponentPropsWithoutRef<"table">,
  ExcludedProps
> &
  DataAttributes;
export type HTMLTableHeadProps = Omit<
  ComponentPropsWithoutRef<"thead">,
  ExcludedProps
> &
  DataAttributes;
export type HTMLTableBodyProps = Omit<
  ComponentPropsWithoutRef<"tbody">,
  ExcludedProps
> &
  DataAttributes;
export type HTMLTableRowProps = Omit<
  ComponentPropsWithoutRef<"tr">,
  ExcludedProps
> &
  DataAttributes;
export type HTMLTableDataProps = Omit<
  ComponentPropsWithoutRef<"td">,
  ExcludedProps
> &
  DataAttributes;
export type HTMLTableHeaderProps = Omit<
  ComponentPropsWithoutRef<"th">,
  ExcludedProps
> &
  DataAttributes;
export type HTMLSectionProps = Omit<
  ComponentPropsWithoutRef<"section">,
  ExcludedProps
> &
  DataAttributes;
