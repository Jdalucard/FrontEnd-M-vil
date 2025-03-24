import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomNavigation } from './BottomNavigation';
import { useTheme } from '../theme/ThemeContext';

interface MainScreenContainerProps {
  children: React.ReactNode; 
}

export const MainScreenContainer: React.FC<MainScreenContainerProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.content, { backgroundColor: theme.background }]}>
        {children}
      </View>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
