import plugin from "./plugin.mjs";

export { plugin };

const config = {
  plugins: [plugin],
  rules: {
    "sprout/no-hardcoded-values": [true, { severity: "warning" }],
    "sprout/css-variables-exists": [true, { severity: "warning" }],
  },
};

export default config;
