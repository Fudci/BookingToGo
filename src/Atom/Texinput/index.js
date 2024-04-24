import {TextInput as TextInputRN} from 'react-native';
import React from 'react';

const TextInput = ({
  size,
  center,
  value,
  setvalueText,
  paddingLeft,
  secureTextEntry = false,
  placeholder,
  style,
  onFocus,
  onChangeText,
}) => {
  return (
    <TextInputRN
      placeholder={placeholder}
      secureTextEntry={secureTextEntry ? true : false}
      value={value}
      placeholderTextColor={'grey'}
      onChangeText={onChangeText}
      style={[
        {
          paddingLeft: paddingLeft ? paddingLeft : 10,
          fontSize: size ? size : 14,
          textAlign: center,
          flex: 1,
        },
        style,
      ]}
    />
  );
};

export default TextInput;
