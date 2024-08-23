import { useContext } from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import Button from "./Button";
import { ThemeContext } from "../../context/ThemeProvider";

const DisplayMode = () => {
  // Extracts theme and theme change function from ThemeContext.
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button
      variant={theme === "dark" ? "dark" : "transparent"}
      onClick={() => toggleTheme()}
    >
      {theme === "dark" ? <RiSunLine /> : <RiMoonLine />}
    </Button>
  );
};

export default DisplayMode;
