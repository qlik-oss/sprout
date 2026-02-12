import type { ReactNode } from "react";

import { Grid, type GridProps, classNames } from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { GridContainerArgTypes } from "./Grid.argTypes";

const meta: Meta = {
  title: "Components/Grid/Composition/Grid.Container",
};
export default meta;

function Item({ children }: { children: ReactNode }) {
  return (
    <div
      className={classNames(
        "border-default",
        "border-box",
        "flex",
        "items-center",
        "p-m",
      )}
    >
      {children}
    </div>
  );
}

export const GridContainer: StoryObj<GridProps["Container"]> = {
  argTypes: GridContainerArgTypes,
  parameters: {
    chromatic: {
      modes: {
        breakpoint_s: {
          viewport: "s", // 480
        },
        breakpoint_m: {
          viewport: "m", // 768
        },
        breakpoint_l: {
          viewport: "l", // 1280
        },
        breakpoint_xl: {
          viewport: "xl", // 1768
        },
      },
    },
  },
  render: (props) => {
    return (
      <Grid.Container {...props}>
        <Grid.Column s="col_span_16" m="col_span_8" l="col_span_4">
          <Item>s=col_span_16 m=col_span_8 l=col_span_4</Item>
        </Grid.Column>
        <Grid.Column s="col_span_16" m="col_span_8" l="col_span_4">
          <Item>s=col_span_16 m=col_span_8 l=col_span_4</Item>
        </Grid.Column>
        <Grid.Column s="col_span_16" m="col_span_8" l="col_span_4">
          <Item>s=col_span_16 m=col_span_8 l=col_span_4</Item>
        </Grid.Column>
        <Grid.Column s="col_span_16" m="col_span_8" l="col_span_4">
          <Item>s=col_span_16 m=col_span_8 l=col_span_4</Item>
        </Grid.Column>
      </Grid.Container>
    );
  },
};
