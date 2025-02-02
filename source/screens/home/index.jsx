import {StyleSheet, View} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Categories from '../../widgets/categories';
import Sections from '../../widgets/sections';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {
  getCategories,
  getPopularMovies,
  getTopratedMovies,
  getUpcomingMovies,
} from '../../store/actions/movieActions';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTopratedMovies());
    dispatch(getPopularMovies());
    dispatch(getUpcomingMovies());
  }, []);
  return (
    <View style={defaultScreenStyle.container}>
      <Categories />
      <Sections />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create();
