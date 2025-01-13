import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/constants';
import {ThemeColors} from '../../theme/themeColors';

const addNewListStyle = StyleSheet.create({
  titleContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.95,
    marginVertical: 10,
  },
  title: {
    color: ThemeColors.WHITE,
    fontSize: 26,
    fontWeight: '600',
  },
  subTitle: {
    color: ThemeColors.WHITE,
    fontSize: 18,
    marginTop: 15,
    textAlign: 'center',
  },

  buttonContainer: {
    marginTop: height * 0.07,
  },
});

export default addNewListStyle;
