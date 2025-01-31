import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import WatchListItem from '../../components/watchList/watchListItem';
import {useSelector} from 'react-redux';
import ThemeColors from '../../theme/themeColors';
import {height} from '../../utils/constants';

const WatchList = () => {
  const {watchList} = useSelector(state => state.watchList);

  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        ListHeaderComponent={
          <Text
            style={{
              color: ThemeColors.WHITE,
              fontSize: 30,
              textAlign: 'center',
              marginVertical: height * 0.02,
            }}>
            Who's Watching ?
          </Text>
        }
        numColumns={2}
        data={watchList}
        renderItem={({item}) => <WatchListItem item={item} />}
      />
    </View>
  );
};

export default WatchList;

const styles = StyleSheet.create({});
