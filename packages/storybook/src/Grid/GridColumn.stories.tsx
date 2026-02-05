import type { ReactNode } from "react";

import { Grid, type GridProps, classNames } from "@qlik/sprout-css-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { GridColumnArgTypes } from "./Grid.argTypes";

const meta: Meta = {
  title: "Components/Grid/Composition/Grid.Column",
  component: Grid.Column,
  argTypes: GridColumnArgTypes,
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

export const GridColumn: StoryObj<GridProps["Column"]> = {
  render: (props) => {
    return (
      <Grid.Container className={classNames("bg-default", "text-default")}>
        <Grid.Column {...props}>
          <Item>demo</Item>
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
  args: {
    s: "col_span_16",
    m: "col_span_8",
    l: "col_span_4",
  },
  argTypes: GridColumnArgTypes,
};
