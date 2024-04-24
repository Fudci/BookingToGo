import {Colors} from '@helpers/Colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  imageTop: {
    width: '100%',
    height: 120,
  },
  image: {
    width: '50%',
    height: 200,
    resizeMode: 'contain',
    zIndex: 2,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 40,
  },
  wrapperTop: {
    paddingHorizontal: 16,
    width: '100%',
    gap: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  text_forgot_pass: {
    color: 'blue',
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  wrapper_middle: {
    gap: 20,
    flex: 1,
    paddingVertical: 20,
  },
  text_change_acc: {
    color: Colors.PRIMARY_HOVER,
    alignSelf: 'center',
  },
  wrapper_btt_change_acc: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text_without_log: {
    color: Colors.BUTTON_COLOR,
    alignSelf: 'center',
    marginTop: 50,
    fontWeight: '800',
    textDecorationLine: 'underline',
    zIndex: 9,
    opacity: 2,
  },
  wrapper_btt: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 10,
  },
  text_dth_acc: {
    color: 'black',
    alignSelf: 'center',
  },
  text_crt_acc: {
    color: 'black',
    alignSelf: 'center',
    textDecorationLine: 'underline',
    fontWeight: '700',
  },
  image_btt: {
    opacity: 0.3,
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -70,
    zIndex: -1,
  },
});
