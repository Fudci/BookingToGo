import {Colors} from '@helpers/Colors';
import {DynamicColorIOS, StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  container: {
    // backgroundColor: Colors.BUTTON_COLOR,
    borderRadius: 100,
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: Colors.PRIMARY_MAIN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill_radio_btt: active => ({
    backgroundColor: active ? Colors.PRIMARY_MAIN : 'transparent',
    borderRadius: 100,
    width: 19,
    height: 19,
    // borderWidth: 1,
    borderColor: Colors.PRIMARY_MAIN,
  }),
});
