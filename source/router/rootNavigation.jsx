import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/getStarted';
import {ADDNEWLIST, GETSTARTED, SIGNIN, TAB, WATCHLIST} from '../utils/routes';
import SignIn from '../screens/signIn';
import WatchList from '../screens/watchList';
import Header from '../components/router/header';
import ThemeColors from '../theme/themeColors';
import {Edit2} from 'iconsax-react-native';
import {Image} from 'react-native';
import AddNewList from '../screens/watchList/addNewList';
import TabNavigation from './tabNavigation';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerTintColor: ThemeColors.WHITE,
        headerStyle: {backgroundColor: ThemeColors.BLACK},
      })}>
      <Stack.Screen
        options={{headerShown: false}}
        name={GETSTARTED}
        component={GetStarted}
      />
      <Stack.Screen name={SIGNIN} component={SignIn} />
      <Stack.Screen
        name={WATCHLIST}
        component={WatchList}
        options={({route, navigation}) => ({
          headerStyle: {backgroundColor: ThemeColors.BLACK},
          headerRight: () => (
            <Edit2
              size="24"
              color={ThemeColors.WHITE}
              onPress={() => navigation.navigate(ADDNEWLIST)}
            />
          ),
          headerTitle: () => (
            <Image
              source={require('../assets/images/Netflix.png')}
              style={{width: 100, height: 40}}
              boyutları
              resizeMode="contain"
            />
          ),
        })}
      />

      <Stack.Screen
        name={ADDNEWLIST}
        component={AddNewList}
        options={{
          headerTitle: () => (
            <Image
              source={require('../assets/images/Netflix.png')}
              style={{width: 100, height: 40}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Stack.Screen
        name={TAB}
        component={TabNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
