import {View, Text} from 'react-native';
import React from 'react';
import Button from '@atom/Button';
import RemixIcon from 'react-native-remix-icon';

const ButtonIcon = ({name, color,padding}) => {
  return (
    <Button
      style={{
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
      }}>
      <RemixIcon name={name} size={20} color={color} />
    </Button>
  );
};

export default ButtonIcon;
