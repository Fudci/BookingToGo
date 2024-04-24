import {View, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './RadioButton.styles';
import Text from '@atom/Text';

const RadioButton = ({isActive, title, onPress}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.container} onPress={onPress}>
        <View style={styles.fill_radio_btt(active)}></View>
      </Pressable>
      <Text color={'black'}>{title}</Text>
    </View>
  );
};

export default RadioButton;
