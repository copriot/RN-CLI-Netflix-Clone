import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/getStarted';
import {GETSTARTED, SIGNIN, WATCHLIST} from '../utils/routes';
import SignIn from '../screens/signIn';
import WatchList from '../screens/watchList';
import Header from '../components/router/header';
import ThemeColors from '../theme/themeColors';
import {Edit2} from 'iconsax-react-native';

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
        options={{
          headerStyle: {backgroundColor: ThemeColors.BLACK},
          headerRight: () => <Edit2 size="24" color={ThemeColors.WHITE} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
