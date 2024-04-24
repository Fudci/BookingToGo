import {Colors} from '@helpers/Colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.PLACEHOLDER,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    gap: 10,
  },
});
