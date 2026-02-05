/* eslint-disable react-hooks/refs */
import type { ReactNode, Ref } from "react";
import { forwardRef, useEffect, useState } from "react";

import { tokens } from "@qlik/design-tokens";

import {
  FloatingPrimitive,
  type FloatingPublicProps,
} from "../FloatingPrimitive";
import { useOpenControl } from "../hooks/useOpenControl";
import { renderOrClone } from "../renderOrClone";

import styles from "./Tooltip.module.css";

export type TooltipPlacement = FloatingPublicProps["placement"];

export type TooltipProps = Omit<FloatingPublicProps, "title"> & {
  title: ReactNode;
  id?: string;
  /** @deprecated please use initialOpen */
  isDisplayedForTesting?: boolean;
};

const WARMUP_CACHE: {
  delay: number;
  hovered: boolean;
  timeout?: NodeJS.Timeout;
} = {
  delay: 300,
  hovered: false,
};

export const Tooltip = forwardRef<HTMLButtonElement, TooltipProps>(TooltipBase);

function TooltipBase(
  {
    children,
    title,
    open,
    onOpenChange,
    initialOpen,
    isDisplayedForTesting,
    placement = "top",
    ...rest
  }: TooltipProps,
  ref?: Ref<HTMLButtonElement>,
) {
  const controlled = useOpenControl({
    open,
    onOpenChange,
    defaultOpen: initialOpen || isDisplayedForTesting || false,
  });
  const [isMounted, setIsMounted] = useState(
    isDisplayedForTesting || initialOpen || controlled.open,
  );
  const [isDisplayed, setIsDisplayed] = useState(
    isDisplayedForTesting || initialOpen || controlled.open,
  );

  // warmup hover using singleton WARMUP_CACHE
  useEffect(() => {
    if (isMounted && !WARMUP_CACHE.hovered) {
      WARMUP_CACHE.timeout = setTimeout(() => {
        WARMUP_CACHE.hovered = true;
        setIsDisplayed(true);
      }, WARMUP_CACHE.delay);
    } else if (isMounted && WARMUP_CACHE.hovered) {
      clearTimeout(WARMUP_CACHE.timeout);
      WARMUP_CACHE.timeout = undefined;
      setIsDisplayed(true);
    } else {
      setIsDisplayed(false);
      if (WARMUP_CACHE.hovered) {
        WARMUP_CACHE.timeout = setTimeout(() => {
          WARMUP_CACHE.hovered = false;
        }, WARMUP_CACHE.delay);
      }
    }
    return () => {
      clearTimeout(WARMUP_CACHE.timeout);
      WARMUP_CACHE.timeout = undefined;
    };
  }, [isMounted, isDisplayed]);

  useEffect(() => {
    if (controlled.open !== isMounted) {
      setIsDisplayed(controlled.open);
      setIsMounted(controlled.open);
    }
  }, [controlled.open, isMounted]);

  if (!title) {
    return renderOrClone(children, {}, ref);
  }

  return (
    <FloatingPrimitive
      hideBackdrop
      trigger="hover"
      placement={placement}
      placementUpdate="dropdown"
      arrowProps={{
        className: styles.arrow,
      }}
      zIndex="z-context"
      role="tooltip"
      className={styles.container}
      data-displayed={isDisplayed}
      content={title}
      open={isMounted}
      onOpenChange={(value) => {
        setIsMounted(value);
        controlled.onOpenChange?.(value);
        if (onOpenChange) {
          onOpenChange(value);
        }
      }}
      maxWidth={tokens.container_sizing_xxs}
      {...rest}
    >
      {children ? renderOrClone(children, {}, ref) : null}
    </FloatingPrimitive>
  );
}

TooltipBase.displayName = "Tooltip";
