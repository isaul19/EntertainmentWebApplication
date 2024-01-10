import { definePreset } from "@pandacss/dev";

export const pandaPreset = definePreset({
  theme: {
    tokens: {
      colors: {
        cs: {
          red: {
            value: "#FC4747",
          },
          "pure-white": {
            value: "#FFFFFF",
          },
          "dark-blue": {
            value: "#10141E",
          },
          "greyish-blue": {
            value: "#5A698F",
          },
          "semi-dark-blue": {
            value: "#161D2F",
          },
        },
      },
    },
  },
});
