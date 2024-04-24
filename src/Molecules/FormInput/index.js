import {Pressable, View} from 'react-native';
import React from 'react';
import styles from './FormInput.styles';
import TextInput from '@atom/Texinput';
import Text from '@atom/Text';

const FormInputRegular = ({valueForm, setValueForm, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        setvalueText={setValueForm}
        placeholder={placeholder}
        style={styles.text_input}></TextInput>
    </View>
  );
};

export default FormInputRegular;
