import {Text, TextInput, View} from 'react-native';
import inputStyle from '../../styles/componentsStyle/inputStyle';
const Input = props => {
  const {title, error} = props;
  return (
    <View style={inputStyle.container}>
      <Text style={inputStyle.title}>{title}</Text>
      <TextInput style={inputStyle.input} {...props} />
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default Input;
