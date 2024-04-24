import {View, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './Login.styles';
import Container from '@atom/Container';
import Images from '@helpers/Images';
import FormInputRegular from '@molecules/FormInput';
import Text from '@atom/Text';
import ButtonCustom from '@molecules/ButtonCustom';
import ButtonIcon from '@molecules/ButtonIcon';
import RemixIcon from 'react-native-remix-icon';
import {navigate} from '@helpers/Navigate';

const Login = () => {
  const [form, setform] = useState({
    email: '',
    password: '',
  });

  return (
    <Container style={styles.container}>
      <Image source={Images.IMAGE_ABSOLUTE_TOP_HOME} style={styles.imageTop} />
      <View style={styles.closeButton}>
        <RemixIcon name="ri-close-line" size={20} color="black" />
      </View>
      <View style={styles.wrapperTop}>
        <View style={{gap: 20}}>
          <FormInputRegular
            setValueForm={e => setform({email: e})}
            placeholder={'Email'}
          />
          <FormInputRegular
            setValueForm={e => setform({password: e})}
            placeholder={'Kata Sandi'}
          />
          <ButtonCustom title={'Masuk'} />
        </View>
        <Text style={styles.text_forgot_pass}>Lupa Password?</Text>
        <View style={styles.wrapper_middle}>
          <View style={{gap: 15}}>
            <Text style={styles.text_change_acc}>Atau gunakan akun</Text>
            <View style={styles.wrapper_btt_change_acc}>
              <ButtonIcon name={'ri-google-fill'} />
              <ButtonIcon name={'ri-apple-fill'} />
              <ButtonIcon name={'ri-facebook-fill'} />
            </View>
          </View>
          <ButtonCustom
            onPress={() => navigate('Booking')}
            text_style={styles.text_without_log}
            type={'text'}
            title={'Masuk Tanpa Login'}
          />
        </View>
        <View style={styles.wrapper_btt}>
          <Text style={styles.text_dth_acc}>Belum punya akun ?</Text>
          <Text style={styles.text_crt_acc}> Buat di sini</Text>
        </View>
      </View>
      <Image
        source={Images.IMAGE_ABSOLUTE_BOTTOM_HOME}
        style={styles.image_btt}
      />
    </Container>
  );
};

export default Login;
