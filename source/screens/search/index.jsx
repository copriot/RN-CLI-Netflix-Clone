import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import ThemeColors from '../../theme/themeColors';
import {API_KEY, height, width} from '../../utils/constants';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchedMovie, setSearchedMovie] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.length > 2) {
        searchMovie(query);
      }
    }, 500); // Kullanıcı durunca 500ms bekleyip API çağrısı yap

    return () => clearTimeout(timeout); // Eski çağrıları iptal et
  }, [query]);

  const searchMovie = async text => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${text}&api_key=${API_KEY}`,
      );
      const data = await response.json();
      setSearchedMovie(data.results || []);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  return (
    <View style={defaultScreenStyle.container}>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search Movie"
        placeholderTextColor={ThemeColors.RED}
        style={{
          backgroundColor: ThemeColors.WHITE,
          height: height * 0.07,
          borderRadius: 50,
          paddingHorizontal: 20,
          fontWeight: 'bold',
          fontSize: 18,
        }}
      />

      <FlatList
        data={searchedMovie}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={{marginBottom: 10, flex: 1}}>
            <Text
              style={{
                color: ThemeColors.WHITE,
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                marginVertical: 10,
              }}>
              {item.title}
            </Text>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`,
              }}
              style={{
                alignSelf: 'center',
                width: width * 0.7,
                height: height * 0.38,
                resizeMode: 'stretch',
                borderRadius: 20,
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Search;
