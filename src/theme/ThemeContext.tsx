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
  primary: '#1E3D59', // Azul oscuro de Star Wars
  background: '#F5F5F5',
  cardBackground: '#FFFFFF', // Fondo blanco para las tarjetas en modo claro
  text: '#000000', // Negro para mejor contraste en modo claro
  textSecondary: '#666666', // Texto gris oscuro para modo claro
  border: '#2C5A7A', // Borde azul más claro
  tabBarBackground: '#1E3D59',
  tabBarActive: '#FFFFFF',
  tabBarInactive: '#FFFFFF', // Cambiado a blanco para el texto no seleccionado
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