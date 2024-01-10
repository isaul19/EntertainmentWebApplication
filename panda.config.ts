import { defineConfig } from "@pandacss/dev";
import { pandaPreset } from "./panda.preset";

export default defineConfig({
  // Whether to use css reset
  presets: [pandaPreset],
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],
  jsxFramework: "react",

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});
