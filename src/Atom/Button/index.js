import {Pressable, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({children, style, onPress, disabled}) => {
  return (
    <TouchableOpacity disabled={disabled} style={style} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
