import React, { createContext, useContext } from 'react';

const ThemeContext = createContext({
  themeMode: '',
  darkTheme: () => {},
  lightTheme: () => {},
});


function useTheme() {
  return useContext(ThemeContext);
}

export default useTheme;

export const ThemeProvider = ThemeContext.Provider;