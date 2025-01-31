import {Text, View} from 'react-native';
import React from 'react';
import {DOWNLOADS, HOME, NEWHOT, SEARCH} from '../../utils/routes';
import {
  ArrowCircleDown,
  Home2,
  MessageQuestion,
  SearchNormal1,
  VideoPlay,
} from 'iconsax-react-native';

const TabIcon = ({route, color, size, focused}) => {
  switch (route.name) {
    case HOME:
      return (
        <Home2
          color={color}
          size={focused ? (size = 34) : (size = size)}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case NEWHOT:
      return (
        <VideoPlay
          color={color}
          size={focused ? (size = 34) : (size = size)}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case SEARCH:
      return (
        <SearchNormal1
          color={color}
          size={focused ? (size = 34) : (size = size)}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case DOWNLOADS:
      return (
        <ArrowCircleDown
          color={color}
          size={focused ? (size = 34) : (size = size)}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    default:
      return (
        <MessageQuestion
          color={color}
          size={focused ? (size = 34) : (size = size)}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
  }
  return (
    <View>
      <Text>TabIcon</Text>
    </View>
  );
};

export default TabIcon;
