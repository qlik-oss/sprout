import { expect, test } from "@playwright/experimental-ct-react";

import { TestComponent } from "./useI18nTest";

test("should provide English translations by default", async ({ mount }) => {
  const component = await mount(
    <TestComponent lang="en" keyToTranslate="input.clear" />
  );

  const translation = component.getByTestId("translation");
  await expect(translation).toContainText("Clear");
});

test("should return the key for unsupported language code 'el' (Greek)", async ({
  mount,
}) => {
  const component = await mount(
    <TestComponent lang="el" keyToTranslate="input.clear" />
  );

  const translation = component.getByTestId("translation");
  await expect(translation).toHaveText("input.clear");
});

test("should return the key itself when no matching translation exists", async ({
  mount,
}) => {
  const component = await mount(
    <TestComponent lang="en" keyToTranslate="non.existent.key" />
  );

  const translation = component.getByTestId("translation");
  await expect(translation).toHaveText("non.existent.key");
});

test.describe("supported languages", () => {
  test("should provide German translations when lang is set to 'de'", async ({
    mount,
  }) => {
    const component = await mount(
      <TestComponent lang="de" keyToTranslate="input.clear" />
    );

    const translation = component.getByTestId("translation");
    await expect(translation).toContainText("Löschen");
  });

  test("should support Spanish translations", async ({ mount }) => {
    const component = await mount(
      <TestComponent lang="es" keyToTranslate="input.clear" />
    );

    const translation = component.getByTestId("translation");
    await expect(translation).toContainText("Borrar");
  });

  test("should support French translations", async ({ mount }) => {
    const component = await mount(
      <TestComponent lang="fr" keyToTranslate="input.clear" />
    );

    const translation = component.getByTestId("translation");
    await expect(translation).toContainText("Effacer");
  });

  test("should support Italian translations", async ({ mount }) => {
    const component = await mount(
      <TestComponent lang="it" keyToTranslate="input.clear" />
    );

    const translation = component.getByTestId("translation");
    await expect(translation).toContainText("Cancella");
  });

  test("should support Japanese translations", async ({ mount }) => {
    const component = await mount(
      <TestComponent lang="ja" keyToTranslate="input.clear" />
    );

    const translation = component.getByTestId("translation");
    await expect(translation).toContainText("クリア");
  });

  test("should support Korean translations", async ({ mount }) => {
    const component = await mount(
      <TestComponent lang="ko" keyToTranslate="input.clear" />
    );

    const translation = component.getByTestId("translation");
    await expect(translation).toContainText("지우기");
  });

  test("should support Dutch translations", async ({ mount }) => {
    const component = await mount(
      <TestComponent lang="nl" keyToTranslate="input.clear" />
    );

    const translation = component.getByTestId("translation");
    await expect(translation).toContainText("Wissen");
  });

  test("should support Polish translations", async ({ mount }) => {
    const component = await mount(
      <TestComponent lang="pl" keyToTranslate="input.clear" />
    );

    const translation = component.getByTestId("translation");
    await expect(translation).toContainText("Wyczyść");
  });

  test("should support Portuguese translations", async ({ mount }) => {
    const component = await mount(
      <TestComponent lang="pt" keyToTranslate="input.clear" />
    );

    const translation = component.getByTestId("translation");
    await expect(translation).toContainText("Limpar");
  });

  test("should support Russian translations", async ({ mount }) => {
    const component = await mount(
      <TestComponent lang="ru" keyToTranslate="input.clear" />
    );

    const translation = component.getByTestId("translation");
    await expect(translation).toContainText("Очистить");
  });

  test("should support Swedish translations", async ({ mount }) => {
    const component = await mount(
      <TestComponent lang="sv" keyToTranslate="input.clear" />
    );

    const translation = component.getByTestId("translation");
    await expect(translation).toContainText("Rensa");
  });

  test("should support Turkish translations", async ({ mount }) => {
    const component = await mount(
      <TestComponent lang="tr" keyToTranslate="input.clear" />
    );

    const translation = component.getByTestId("translation");
    await expect(translation).toContainText("Temizle");
  });

  test("should support Simplified Chinese (zh-CN)", async ({ mount }) => {
    const component = await mount(
      <TestComponent lang="zh-CN" keyToTranslate="input.clear" />
    );

    const translation = component.getByTestId("translation");
    await expect(translation).toContainText("清除");
  });

  test("should support Traditional Chinese (zh-TW)", async ({ mount }) => {
    const component = await mount(
      <TestComponent lang="zh-TW" keyToTranslate="input.clear" />
    );

    const translation = component.getByTestId("translation");
    await expect(translation).toContainText("清除");
  });
});
