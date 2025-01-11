import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ThemeColors from '../../theme/themeColors';
import Button from '../../components/ui/button';
import {WATCHLIST} from '../../utils/routes';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 5}}>
        <Image
          style={{height: '100%', width: '100%', resizeMode: 'cover'}}
          source={require('../../assets/images/getStartedScreen.png')}
        />
        <View
          style={{
            width: '100%',
            height: '15%',
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: 5,
          }}>
          <Text
            style={{
              fontSize: 24,
              color: ThemeColors.WHITE,
              textAlign: 'center',
              fontWeight: 'bold',
              letterSpacing: 1.08,
            }}>
            Unlimited entertainment, one low price.
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: ThemeColors.WHITE,
              textAlign: 'center',
              fontWeight: '500',
            }}>
            All of Netflix, starting at just 149$.
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: ThemeColors.BLACK,
          justifyContent: 'center',
        }}>
        <Button
          title="GET STARTED"
          onPress={() => navigation.navigate(WATCHLIST)}
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({container: {flex: 1}});
