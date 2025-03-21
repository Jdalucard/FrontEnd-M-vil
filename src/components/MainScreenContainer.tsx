import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomNavigation } from './BottomNavigation';

interface MainScreenContainerProps {
  children: React.ReactNode;
}

export const MainScreenContainer: React.FC<MainScreenContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
  },
});
