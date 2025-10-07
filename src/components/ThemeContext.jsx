// Import React functions for creating context and managing state/effects
import { createContext, useState, useEffect } from "react";

// Create a context to share theme state across components
export const ThemeContext = createContext();

// ThemeProvider component to wrap the app and provide theme functionality
export const ThemeProvider = ({ children }) => {
  // State to manage current theme, default is "dark"
  const [theme, setTheme] = useState("dark");

  // Side effect to apply theme to the root HTML element whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Function to toggle between "dark" and "light" themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Provide theme state and toggle function to all child components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
