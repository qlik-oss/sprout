import { tokens } from "@qlik/design-tokens";
import tokenData from "@qlik/design-tokens/generated/tokens/json/sprout-tokens.json";
import { useStyleOverride } from "@qlik/sprout-react-hooks";

type TokenKey = keyof typeof tokens;

function getCSSVar(key: string) {
  return key.replace("--sprout-", "").replace(/_/g, "-") as TokenKey;
}

const ARGS: Record<string, string> = Object.keys(tokenData as Record<string, { $value: string; $type: string }>).reduce<
  Record<string, string>
>((acc, key) => {
  const cssVar = getCSSVar(key);
  acc[cssVar] = tokenData[key as keyof typeof tokenData].$value;
  return acc;
}, {});

const ARG_TYPES = Object.keys(tokenData).reduce<Record<string, { control: string; defaultValue: string }>>(
  (acc, key) => {
    const cssVar = getCSSVar(key);
    const token = tokenData[key as keyof typeof tokenData];
    acc[cssVar] = {
      control: token.$type === "color" ? "color" : "text",
      defaultValue: token.$value,
    };
    return acc;
  },
  {},
);

export default {
  title: "Hooks/useStyleOverride",
};

export const Default = {
  render: (props: Record<string, string>) => {
    useStyleOverride(props, "#foo");
    return (
      <div
        id="foo"
        style={{
          blockSize: "100vh",
          inlineSize: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: tokens.common_background_color_default,
          color: tokens.common_foreground_color_default,
        }}
      >
        useStyleOverride hook
      </div>
    );
  },
  args: ARGS,
  argTypes: ARG_TYPES,
  parameters: {
    layout: "fullscreen",
  },
};
