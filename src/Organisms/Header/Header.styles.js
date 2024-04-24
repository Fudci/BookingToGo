import {Colors} from '@helpers/Colors';
import {Platform, StatusBar, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY_MAIN,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Platform.OS == 'ios' ? 32 : StatusBar.currentHeight,
  },
  text_title: {
    fontWeight: '600',
    color: 'white',
    paddingTop:10
  },
  arrow_left: {
    position: 'absolute',
    left: 20,
    paddingTop:10

  },
});
