import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ThemeColors from '../../theme/themeColors';
import {generateRandomHexColor} from '../../utils/functions';
import {height, width} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {TAB} from '../../utils/routes';

const WatchListItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.replace(TAB)}>
      <View
        style={{
          backgroundColor: generateRandomHexColor(),
          width: width / 2 - 35,
          height: height / 7,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <Image
          style={{width: 100, height: 100}}
          source={require('../../assets/images/smile.png')}
        />
      </View>
      <Text
        style={{
          color: ThemeColors.WHITE,
          fontSize: 18,
          fontWeight: '500',
          marginTop: 10,
        }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default WatchListItem;

const styles = StyleSheet.create({
  container: {
    width: '47%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 20,
  },
});
