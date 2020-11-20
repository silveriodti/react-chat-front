import React from 'react';
import themes from './themes';

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(themes.dark);
  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };
  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
