import {Colors} from '@helpers/Colors';
import {StatusBar, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY_MAIN,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop:30
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode:'contain'
  },
});
