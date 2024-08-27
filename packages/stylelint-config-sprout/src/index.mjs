import plugin from "./plugin.mjs";

export { plugin };

const config = {
  plugins: [plugin],
  rules: {
    "sprout/no-hardcoded-values": [true, { severity: "warning" }],
  },
};

export default config;
