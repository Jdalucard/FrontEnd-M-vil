import React, { createContext, useContext, useState } from 'react';

export interface Theme {
  primary: string;
  background: string;
  cardBackground: string;
  text: string;
  textSecondary: string;
  border: string;
  tabBarBackground: string;
  tabBarActive: string;
  tabBarInactive: string;
}

const lightTheme: Theme = {
  primary: '#1E3D59', 
  background: '#F5F5F5',
  cardBackground: '#FFFFFF', 
  text: '#000000', 
  textSecondary: '#666666', 
  border: '#2C5A7A', 
  tabBarBackground: '#1E3D59',
  tabBarActive: '#FFFFFF',
  tabBarInactive: '#FFFFFF', 
};

const darkTheme: Theme = {
  primary: '#1E3D59',
  background: '#121212',
  cardBackground: '#1E3D59', 
  text: '#FFFFFF', 
  textSecondary: '#E0E0E0', 
  border: '#2C5A7A',
  tabBarBackground: '#1E3D59',
  tabBarActive: '#FFFFFF',
  tabBarInactive: '#A0A0A0',
};

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 