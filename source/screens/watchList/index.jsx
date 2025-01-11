import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import WatchListItem from '../../components/watchList/watchListItem';
import {useSelector} from 'react-redux';

const WatchList = () => {
  const {watchList} = useSelector(state => state.watchList);

  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={watchList}
        renderItem={({item}) => <WatchListItem item={item} />}
      />
    </View>
  );
};

export default WatchList;

const styles = StyleSheet.create({});
