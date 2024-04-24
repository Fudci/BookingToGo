import {Colors} from '@helpers/Colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  wrapper_step: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 10,
    justifyContent:'flex-end'
  },
  btn: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_MAIN,
  },
});
