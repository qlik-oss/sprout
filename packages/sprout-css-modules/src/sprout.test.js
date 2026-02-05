import { expect, test } from "vitest";
import flex from "./flex.module.css";
import sprout from "./sprout.js";

test("sprout export all the classes from css modules + className function", () => {
  expect(sprout.classNames).toBeDefined();
  expect(flex.row).toBe("row");
  expect(sprout.row).toBe("row");
  expect(sprout.classNames("row", "border_box")).toBe("row border_box");
  expect(
    sprout.classNames({
      row: true,
      border_box: true,
    }),
  ).toBe("row border_box");
});
