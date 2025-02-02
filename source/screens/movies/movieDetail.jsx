import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useEffect} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieData} from '../../store/actions/movieActions';
import ThemeColors from '../../theme/themeColors';
import {IMAGE_BASE_URL} from '../../service/url';

import {height, width} from '../../utils/constants';
import {ArrowLeft} from 'iconsax-react-native';

const MovieDetail = ({route, navigation}) => {
  const {movieId} = route?.params;
  const {pendindgDetailData, movieDetailData} = useSelector(
    state => state.movies,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieData({movieId: movieId}));
  }, []);
  return (
    <View style={defaultScreenStyle.detailScreen}>
      {pendindgDetailData ? (
        <View style={styles.container}>
          <ActivityIndicator color={ThemeColors.GRAY} size={'large'} />
        </View>
      ) : (
        <ScrollView>
          <Image
            style={{
              width: width,
              height: height * 0.55,
              resizeMode: 'cover',
            }}
            source={{
              uri:
                IMAGE_BASE_URL + movieDetailData?.poster_path || backdrop_path,
            }}
          />
          <View
            style={{
              position: 'absolute',
              width: 100,
              height: 100,
              borderRadius: 100,
              right: 30,
              top: 50,
              backgroundColor: ThemeColors.LIGHTBLUE,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.title}>{movieDetailData.vote_average}</Text>
          </View>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{
              position: 'absolute',
              width: 50,
              height: 50,
              borderRadius: 100,
              left: 30,
              top: 50,
              backgroundColor: ThemeColors.WHITE,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ArrowLeft />
          </Pressable>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{movieDetailData.original_title}</Text>
            <Text style={styles.overview}>{movieDetailData.tagline}</Text>
            <Text style={styles.overview}>{movieDetailData.overview}</Text>
            <Text style={styles.section}>Language</Text>
            {movieDetailData?.spoken_languages?.map((item, index) => (
              <Text style={styles.overview} key={index}>
                {item?.name}
              </Text>
            ))}
            <Text style={styles.section}>Production Countries</Text>
            {movieDetailData?.production_countries?.map((item, index) => (
              <Text style={styles.overview} key={index}>
                {item?.name}
              </Text>
            ))}
            <Text style={styles.section}>Genres</Text>
            {movieDetailData?.genres?.map((item, index) => (
              <View>
                <Text style={styles.overview} key={index}>
                  {item?.name}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeColors.BLACK,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ThemeColors.WHITE,
    alignSelf: 'center',
  },
  infoContainer: {
    padding: 10,
    marginTop: 15,
  },
  overview: {
    fontSize: 16,
    fontWeight: '500',
    color: ThemeColors.WHITE,
    marginVertical: 10,
  },
  section: {
    color: ThemeColors.RED,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
