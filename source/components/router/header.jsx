import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ThemeColors from '../../theme/themeColors';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: 400,

    backgroundColor: ThemeColors.BLACK,
  },
});
