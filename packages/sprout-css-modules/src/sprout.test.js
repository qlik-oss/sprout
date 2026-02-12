import { expect, test } from "vitest";
import flex from "./css/flex.module.css";
import sprout from "./sprout.js";

test("sprout export all the classes from css modules + className function", () => {
  expect(sprout.classNames).toBeDefined();
  expect(flex["flex-row"]).toBe("flex-row");
  expect(sprout["flex-row"]).toBe("flex-row");
  expect(sprout.classNames("flex-row", "border_box")).toBe("flex-row border_box");
  expect(
    sprout.classNames({
      "flex-row": true,
      border_box: true,
    }),
  ).toBe("flex-row border_box");
});
