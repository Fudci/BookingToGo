import {Colors} from '@helpers/Colors';
import {Platform, StatusBar, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: isSplash => ({
    flex: 1,
    // backgroundColor: 'white',
    // paddingTop: Platform.OS == 'ios' ? 0 : StatusBar.currentHeight,
  }),
});
