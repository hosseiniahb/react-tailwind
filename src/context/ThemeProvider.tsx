import { createContext, ReactNode, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type T_ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export type T_InitialContext = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

const initialContext: T_InitialContext = {
  theme: "light",
  toggleTheme: () => {},
};

export const ThemeContext = createContext<T_ThemeContextType>(initialContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // State variable to save the current theme
  const [theme, setTheme] = useLocalStorage<string>("theme", "light");

  useEffect(() => {
    // If the html document does not have the dark class, we add the class based on a series of conditions to change the theme

    const existThemeClassName = document.querySelector("html")?.className;
    if (existThemeClassName === "dark" && theme === "light") {
      document.querySelector("html")?.classList.remove("dark");
    } else {
      document.querySelector("html")?.classList.add("dark");
    }
  }, [theme]);

  // Function Toggle to change the theme
  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
