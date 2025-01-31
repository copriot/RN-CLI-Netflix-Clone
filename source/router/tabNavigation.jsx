import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import NewHot from '../screens/newHot';
import Search from '../screens/search';
import Downloads from '../screens/downloads';
import {DOWNLOADS, HOME, NEWHOT, SEARCH} from '../utils/routes';
import ThemeColors from '../theme/themeColors';
import TabIcon from '../components/router/tabIcon';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerStyle: {backgroundColor: ThemeColors.BLACK},
        headerTintColor: ThemeColors.WHITE,
        tabBarStyle: {backgroundColor: ThemeColors.BLACK},
        tabBarActiveTintColor: ThemeColors.WHITE,
        tabBarInactiveTintColor: ThemeColors.GRAY,
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon focused={focused} color={color} size={size} route={route} />
        ),
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={NEWHOT} component={NewHot} />
      <Tab.Screen name={SEARCH} component={Search} />
      <Tab.Screen name={DOWNLOADS} component={Downloads} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
