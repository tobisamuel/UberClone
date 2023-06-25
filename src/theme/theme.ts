import { scale } from "react-native-size-matters";

const palette = {
  purple: "#5A31F4",
  green: "#0ECD9D",
  red: "#CD0E61",
  black: "#0B0B0B",
  white: "#FFFFFF",
  grey: "rgba(34,34,34,0.5)",
  lightgray: "rgba(100,100,100,0.35)",
  lightergray: "rgba(100,100,100,0.1)",
};

export const theme = {
  colors: {
    background: palette.white,
    foreground: palette.black,
    primary: palette.purple,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
    disabled: palette.lightergray,
    active: palette.lightgray,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  shadows: {
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: scale(-2),
    },
    shadowOpacity: 0.8,
    shadowRadius: scale(7.5),
    elevation: 10,
  },
  textVariants: {
    header: {
      fontFamily: "Raleway",
      fontSize: 36,
      fontWeight: "bold",
    },
    body: {
      color: palette.grey,
      // fontFamily: "Merriweather",
      fontSize: scale(16),
    },
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.black,
    foreground: palette.white,
  },
};

type DefaultTheme = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends DefaultTheme {}
}
