import { createContext, useState, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ThemeContext = createContext<any>(null);

const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<string>("dark");
  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
