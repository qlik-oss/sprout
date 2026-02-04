import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  build: {
    lib: {
      formats: ["umd"],
      fileName: () => "sprout-css-modules.js",
      entry: "src/sprout.js",
      name: "QlikTrialSproutCSSModules",
    },
  },
  plugins: [mkcert(), cssInjectedByJsPlugin()],
  preview: {
    port: 59007,
    host: "localhost",
  },
  server: {
    cors: {
      origin: [/localhost(:\d+)?$/, /qlik-stage\.com$/],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      accessControlAllowOrigin: "*",
      credentials: true,
    },
    https: true,
  },
});
