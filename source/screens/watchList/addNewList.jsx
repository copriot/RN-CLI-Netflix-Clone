import {ScrollView, View, Text} from 'react-native';

import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import {NewListSchema} from '../../utils/validationSchema';
import {addNewList} from '../../store/slice/watchListSlice';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import ThemeColors from '../../theme/themeColors';

const AddNewList = () => {
  const dispatch = useDispatch();
  return (
    <View style={defaultScreenStyle.container}>
      <Formik
        initialValues={{
          id: Date.now(),
          title: 'Funny',
        }}
        validationSchema={NewListSchema}
        onSubmit={values => dispatch(addNewList(values))}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <ScrollView>
            <View style={{marginVertical: 'auto'}}>
              <Text
                style={{
                  color: ThemeColors.WHITE,
                  fontSize: 30,
                  textAlign: 'center',
                  marginVertical: 10,
                }}>
                {' '}
                Ready to watch?
              </Text>
              <Text
                style={{
                  color: ThemeColors.WHITE,
                  fontSize: 24,
                  textAlign: 'center',
                  marginVertical: 10,
                }}>
                Enter your email to create or sign in to your account.
              </Text>
            </View>
            <Input
              error={errors.title}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              title="Watch List Name"
            />
            <View>
              <Button onPress={handleSubmit} title="Create" status="primary" />
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default AddNewList;
