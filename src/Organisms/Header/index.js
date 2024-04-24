import {Pressable, View} from 'react-native';
import React from 'react';
import styles from './Header.styles';
import RemixIcon from 'react-native-remix-icon';
import Text from '@atom/Text';
import ButtonIcon from '@molecules/ButtonIcon';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.arrow_left}>
        <RemixIcon name="ri-arrow-left-line" size={20} color="white" />
      </Pressable>
      <Text style={styles.text_title}>{title}</Text>
    </View>
  );
};

export default Header;
