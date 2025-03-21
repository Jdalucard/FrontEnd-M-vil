import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

interface TextProps extends RNTextProps {
  variant?: 'title' | 'subtitle' | 'body';
}

export const Text: React.FC<TextProps> = ({ variant = 'body', style, ...props }) => {
  const { theme } = useTheme();

  const getVariantStyle = () => {
    switch (variant) {
      case 'title':
        return {
          fontSize: 24,
          fontWeight: '700' as const,
          color: theme.text,
        };
      case 'subtitle':
        return {
          fontSize: 18,
          fontWeight: '600' as const,
          color: theme.text,
        };
      case 'body':
      default:
        return {
          fontSize: 16,
          color: theme.text,
        };
    }
  };

  return <RNText style={[styles.text, getVariantStyle(), style]} {...props} />;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'System',
  },
});
