import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ThemeColors from '../../theme/themeColors';

const WatchListItem = ({item}) => {
  return (
    <View style={{flex: 1, backgroundColor: ThemeColors.WHITE}}>
      <Text style={{color: ThemeColors.WHITE}}>{item.title}</Text>
    </View>
  );
};

export default WatchListItem;

const styles = StyleSheet.create({});
