import {Colors} from '@helpers/Colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
    // backgroundColor: 'red',
    paddingVertical: 10,
    gap: 10,
    alignItems: 'center',

    // flex:1
  },
  container_flatlist: index => ({
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginLeft: index === 0 ? 150 : 0,
    marginRight: index === 2 ? 150 : 0,
  }),
  wrapperIdx: (index, stepValue) => ({
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: Colors.PRIMARY_MAIN,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    opacity: stepValue >= index ? 1 : 0.3
  }),
  line: (index, stepValue) => ({
    width: 20,
    height: 2,
    backgroundColor: stepValue >= index ? Colors.PRIMARY_MAIN : 'grey',
  }),
});
