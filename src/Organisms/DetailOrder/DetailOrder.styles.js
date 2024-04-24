import {Colors} from '@helpers/Colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: Colors.PRIMARY_HOVER,
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
  },
  container_bot: {
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row_last: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    gap: 10,
  },
});
