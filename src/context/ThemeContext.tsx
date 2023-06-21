import { createContext, useContext, useState } from "react";

import { darkTheme, theme } from "@/theme";

type ThemeContextType = {
  darkMode: boolean;
  theme: typeof theme | typeof darkTheme;
  toggleDarkMode: () => void;
};

type ProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const ThemeProvider = ({ children }: ProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const themeObj = {
    darkMode,
    theme: darkMode ? darkTheme : theme,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={themeObj}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
