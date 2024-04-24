import {Colors} from '@helpers/Colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container_bot: {
    // backgroundColor: 'red',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.PRIMARY_HOVER,
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
  },
  medium: {
    fontWeight: '500',
  },
  text_chng_visitor: {
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
});
