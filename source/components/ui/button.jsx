import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ThemeColors from '../../theme/themeColors';

const Button = props => {
  const {title, status} = props;
  const setColor = status => {
    switch (status) {
      case 'primary':
        ThemeColors.RED;
        return ThemeColors;
      default:
        return ThemeColors.RED;
    }
  };
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: setColor()}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 15,
    borderRadius: 3,
    width: '100%',
  },
  title: {fontSize: 18, fontWeight: '500', color: ThemeColors.WHITE},
});
