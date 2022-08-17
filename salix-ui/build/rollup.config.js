import { join } from "path";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import scss from "rollup-plugin-scss";
import css from "rollup-plugin-css-only";
import esbuild from "rollup-plugin-esbuild";
import vuePlugin from "rollup-plugin-vue";
import del from "rollup-plugin-delete";
import replace from "@rollup/plugin-replace";

import pkg from "../package.json";
const deps = Object.keys(pkg.dependencies);

const baseOutput = (format) => ({
  format,
  file: `dist/${format}/index.js`,
});

export default ({ format }) => {
  const output =
    format === "esm"
      ? baseOutput(format)
      : {
          ...baseOutput(format),
          name: "Salix",
          exports: "named",
          globals: {
            vue: "Vue",
          },
        };
  return {
    input: join(__dirname, "..", "src/components/index.ts"),
    output,
    plugins: [
      del({ targets: "dist/" + format }),
      terser(),
      nodeResolve(),
      scss({
        exclude: ["node_modules"],
        outputStyle: "compressed",
      }),
      css(),
      vuePlugin({
        include: /\.vue$/,
        target: "browser",
        css: false,
        exposeFilename: false,
      }),
      esbuild({
        minify: false,
        sourceMap: true,
        include: /\.[jt]sx?$/, // default, inferred from `loaders` option
        exclude: /node_modules/, // default
        target: "es2016",
        tsconfig: "src/components/tsconfig.json",
        loaders: {
          ".js": "jsx",
        },
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
        preventAssignment: true,
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
      }),
    ],
    external(id) {
      return /^vue/.test(id) || deps.some((k) => new RegExp("^" + k).test(id));
    },
  };
};
