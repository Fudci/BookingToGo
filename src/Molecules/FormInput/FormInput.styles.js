import { Colors } from '@helpers/Colors';
import {StyleSheet, StatusBar, Dimensions, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY_HOVER,
  },
  text_input: {},
});
