import { expect, test } from "@playwright/experimental-ct-react";

import { TypographyTest } from "./TypographyTest";

test(`should set the right className`, async ({ mount }) => {
  const comp = await mount(<TypographyTest />);
  await expect(comp).toBeVisible();
  await expect(comp.getByText("heading-xs")).toHaveClass(/heading_xs/);
  await expect(comp.getByText("heading-s")).toHaveClass(/heading_s/);
  await expect(comp.getByText("heading-m")).toHaveClass(/heading_m/);
  await expect(comp.getByText("heading-l")).toHaveClass(/heading_l/);
  await expect(comp.getByText("heading-xl")).toHaveClass(/heading_xl/);
  await expect(comp.getByText("heading-xxl")).toHaveClass(/heading_xxl/);

  await expect(comp.getByText("body-xs")).toHaveClass(/body_xs/);
  await expect(comp.getByText("body-s")).toHaveClass(/body_s/);
  await expect(comp.getByText("body-m")).toHaveClass(/body_m/);
  await expect(comp.getByText("body-l")).toHaveClass(/body_l/);
  await expect(comp.getByText("body-xl")).toHaveClass(/body_xl/);
  await expect(comp.getByText("body-xxl")).toHaveClass(/body_xxl/);

  await expect(comp.getByText("label-xs", { exact: true })).toHaveClass(
    /label_xs/,
  );
  await expect(comp.getByText("label-xs-emphasized")).toHaveClass(
    /label_xs_emphasized/,
  );
  await expect(comp.getByText("label-s", { exact: true })).toHaveClass(
    /label_s/,
  );
  await expect(comp.getByText("label-s-emphasized")).toHaveClass(
    /label_s_emphasized/,
  );
  await expect(comp.getByText("label-m", { exact: true })).toHaveClass(
    /label_m/,
  );
  await expect(comp.getByText("label-m-emphasized")).toHaveClass(
    /label_m_emphasized/,
  );
  await expect(comp.getByText("label-l", { exact: true })).toHaveClass(
    /label_l/,
  );
  await expect(comp.getByText("label-l-emphasized")).toHaveClass(
    /label_l_emphasized/,
  );

  await expect(comp.getByText("color default")).toHaveClass(/default/);
  await expect(comp.getByText("color disabled")).toHaveClass(/disabled/);
  await expect(comp.getByText("color weak")).toHaveClass(/weak/);
});
