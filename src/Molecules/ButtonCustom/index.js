import React from 'react';
import Button from '@atom/Button';
import Text from '@atom/Text';
import styles from './ButtonCustom.styles';
import {Colors} from '@helpers/Colors';

const ButtonCustom = ({title, disabled, type, text_style, onPress}) => {
  if (type == 'text') {
    return (
      <Button
        onPress={onPress}
        disabled={disabled}
        style={styles.container_text}>
        <Text
          style={[{color: Colors.TEXT_MAIN, fontWeight: '700'}, text_style]}>
          {title}
        </Text>
      </Button>
    );
  }

  return (
    <Button onPress={onPress} disabled={disabled} style={styles.container}>
      <Text style={{color: Colors.TEXT_MAIN, fontWeight: '700'}}>{title}</Text>
    </Button>
  );
};

export default ButtonCustom;
