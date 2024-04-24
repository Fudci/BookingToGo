import {Colors} from '@helpers/Colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.PRIMARY_HOVER,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  text_desc: {
    fontSize: 12,
    paddingRight: 60,
    flexWrap:'wrap',
    // backgroundColor:'red'
    // width:'100%'
    // flex: 1,
  },
});
