import {View} from 'react-native';
import React, { useMemo } from 'react';
import RemixIcon from 'react-native-remix-icon';
import styles from './CardVisitor.styles';
import Text from '@atom/Text';

const CardVisitor = ({item, index}) => {
  const TitleName = useMemo(() => {
    if (item.title === 'Mr') {
      return 'Tn.';
    } else {
      return 'Ny.';
    }
  }, [item.title]);

  return (
    <View style={styles.container}>
      <RemixIcon name="ri-user-5-line" size={20} color="black" />
      <Text color="black">
        {TitleName} {item.name}
      </Text>
    </View>
  );
};

export default CardVisitor;
