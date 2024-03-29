import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const viteConfig = ({ mode }) => {
  const isGhPagesBuild =
    loadEnv(mode, process.cwd()).VITE_GH_PAGES_BUILD === "true";

  return defineConfig({
    server: {
      proxy: {
        "/api/v1": {
          target: "http://localhost:8080/api/v1",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/v1/, ""),
        },
      },
    },
    base: isGhPagesBuild ? "/oj-lab-front/" : "/",
    build: {
      // https://stackoverflow.com/questions/76694615/module-level-directives-cause-errors-when-bundled-use-client-was-ignored-caus
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
            return;
          }
          warn(warning);
        },
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  });
};

export default viteConfig;
