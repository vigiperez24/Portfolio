// Import necessary React functions for context creation and consumption
import { createContext, useContext } from "react";

// Create a new context for scroll functionality
const ScrollContext = createContext();

// ScrollProvider component to wrap parts of the app that need scroll behavior
export function ScrollProvider({ children }) {
  // Function to scroll smoothly to a section by its ID
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth", // Enables smooth scrolling animation
    });
  };

  // Provide scrollToSection function to all children components
  return (
    <ScrollContext.Provider value={{ scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
}

// Custom hook to access scroll context easily in other components
export function useScroll() {
  return useContext(ScrollContext);
}
