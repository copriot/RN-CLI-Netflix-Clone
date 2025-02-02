import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ThemeColors from '../../theme/themeColors';
import {useSelector} from 'react-redux';
import MovieItem from '../movies/movieItem';

const Section = ({item}) => {
  const {topRatedMovies, popularMovies, upcomingMovies} = useSelector(
    state => state.movies,
  );
  console.log(upcomingMovies);
  const setData = () => {
    switch (item.id) {
      case 1:
        return topRatedMovies;
      case 2:
        return popularMovies;
      case 3:
        return upcomingMovies;
      default:
        return topRatedMovies;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <FlatList
        horizontal
        data={setData()}
        renderItem={({item}) => <MovieItem item={item} />}
      />
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {marginVertical: 20},
  title: {
    color: ThemeColors.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: 20,
  },
});
