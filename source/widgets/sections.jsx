import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {sections} from '../utils/constants';

import {defaultScreenStyle} from '../styles/defaultScreenStyle';
import Section from '../components/widgets/section';

const Sections = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={sections}
        renderItem={({item}) => <Section item={item} />}
      />
    </View>
  );
};

export default Sections;

const styles = StyleSheet.create();
