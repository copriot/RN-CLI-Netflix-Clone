import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IMAGE_BASE_URL} from '../../service/url';
import {height, width} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {MOVIEDETAIL} from '../../utils/routes';

const MovieItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(MOVIEDETAIL, {movieId: item.id})}
      style={styles.container}>
      <Image
        style={{
          width: width * 0.3,
          height: height * 0.2,
          borderRadius: 5,
          resizeMode: 'cover',
        }}
        source={{uri: IMAGE_BASE_URL + item?.backdrop_path}}
      />
    </TouchableOpacity>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  container: {backgroundColor: 'gray', margin: 10},
});
