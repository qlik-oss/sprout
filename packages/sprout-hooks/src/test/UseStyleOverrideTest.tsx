import { useStyleOverride } from "../useStyleOverride";

export function UseStyleOverrideTest() {
  useStyleOverride(
    {
      common_background_color_default: "#007ACC",
      common_foreground_color_default: "#FFFFFF",
    },
    '[data-testid="use-style-override"]',
  );
  return (
    <div
      data-testid="use-style-override"
      style={{
        blockSize: "100vh",
        inlineSize: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "var(--sprout-common-background-color-default)",
        color: "var(--sprout-common-foreground-color-default)",
      }}
    >
      useStyleOverride hook
    </div>
  );
}
