import { expect, test } from "vitest";

import sprout from "@qlik/sprout-css-modules";

import { getFlexProps } from "./flex";

test("getFlexProps should support classNames", () => {
  expect(getFlexProps({}).className).toBe("flex border_box row");
  expect(getFlexProps({ className: sprout.col }).className).toBe(
    "col flex border_box row",
  );
});
