import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ThemeColors from '../../theme/themeColors';

const CategoryItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    color: ThemeColors.WHITE,
    fontSize: 22,
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        shadowOpacity: 0.8,
        shadowColor: ThemeColors.WHITE,
        shadowRadius: 4,
        shadowOffset: {width: -4, height: -4},
      },
      android: {
        elevation: 8,
      },
    }),
  },
});
