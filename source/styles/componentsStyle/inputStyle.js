import {StyleSheet} from 'react-native';
import {height} from '../../utils/constants';
import ThemeColors from '../../theme/themeColors';

const inputStyle = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: ThemeColors.GRAY,
    height: height * 0.1,
    borderRadius: 5,
    padding: 5,
  },
  title: {
    fontSize: 18,
    color: ThemeColors.WHITE,
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    padding: 5,
    fontSize: 20,
    borderRadius: 8,
    fontWeight: '400',
    color: ThemeColors.WHITE,
  },
});

export default inputStyle;
