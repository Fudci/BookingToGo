import {View, FlatList} from 'react-native';
import React, {useEffect, useRef} from 'react';
import styles from './StepBooking.styles';
import Text from '@atom/Text';

const StepBooking = ({stepValue}) => {
  const flatListRef = useRef(null);

  useEffect(() => {
    if (stepValue == 1) {
      setTimeout(() => {
        flatListRef?.current?.scrollToIndex({
          animated: true,
          index: 1,
          viewOffset: 120,
        });
      }, 50);
    } else {
      setTimeout(() => {
        flatListRef?.current?.scrollToIndex({
          animated: true,
          index: stepValue,
        });
      }, 50);
    }
  }, [stepValue]);

  const renderItem = ({item, index}) => {
    return (
      <View style={[styles.container_flatlist(index)]}>
        <View style={styles.wrapperIdx(index, stepValue)}>
          <Text color={'white'}>{index + 1}</Text>
        </View>
        <Text color={'black'}>{item.name}</Text>
        {index !== 2 && <View style={styles.line(index, stepValue)}></View>}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        ref={flatListRef}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        style={{width: '100%'}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={[
          {id: 0, name: 'Detail Pesanan'},
          {id: 1, name: 'Pembayaran'},
          {id: 2, name: 'Konfirmasi'},
        ]}
        renderItem={renderItem}
      />
    </View>
  );
};

export default StepBooking;
