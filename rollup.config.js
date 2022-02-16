import typescript from "@rollup/plugin-typescript";

export default {
  input: "./src/index.ts",
  output: [
    // 1.cjs -> commonjs
    // 2.esm
    {
      format: "cjs",
      file: "lib/my-vue-next.cjs.js",
    },
    {
      format: "es",
      file: "lib/my-vue-next.esm.js",
    },
  ],
  plugins: [typescript()],
};
