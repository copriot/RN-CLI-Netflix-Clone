import {StyleSheet} from 'react-native';
import ThemeColors from '../theme/themeColors';

const defaultScreenStyle = StyleSheet.create({
  container: {flex: 1, backgroundColor: ThemeColors.BLACK, padding: 10},
  detailScreen: {flex: 1, backgroundColor: ThemeColors.BLACK},
});

export {defaultScreenStyle};
