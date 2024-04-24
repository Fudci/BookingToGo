import {View, Image, Alert} from 'react-native';
import React, {useEffect} from 'react';
import styles from './SplashScreen.styles';
import Images from '@helpers/Images';
import {storage} from '@helpers/HelpersMmkv';
import {useMMKVString} from 'react-native-mmkv';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [token, setToken] = useMMKVString('@token');

  useEffect(() => {
    if (token) {
      navigation.replace('Home');
    } else {
      navigation.replace('Login');
    }
  }, [storage]);

  return (
    <View style={styles.container}>
      <Image source={Images.LOGO} style={styles.logo} />
    </View>
  );
};

export default SplashScreen;
