import {View} from 'react-native';
import React from 'react';
import styles from './DetailOrder.styles';
import Text from '@atom/Text';
import OrderTop from '@molecules/OrderTop';
import RemixIcon from 'react-native-remix-icon';
import {Colors} from '@helpers/Colors';
import moment from 'moment';

const DetailOrder = ({item}) => {
  const checkIn = item?.chosen_hotel_params.check_in;
  const checkout = item?.chosen_hotel_params.check_out;
  const isRefund = item?.chosen_hotel_prices.is_refundable;

  return (
    <View style={styles.container}>
      <Text style={styles.medium} color={'black'}>
        Detail Pesanan
      </Text>
      <OrderTop item={item} />
      <View style={styles.row}>
        <Text style={styles.medium} color={'black'}>
          Check-In
        </Text>
        <Text color={Colors.PLACEHOLDER}>
          {moment(checkIn).format('DD MMMM YYYY')}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.medium} color={'black'}>
          Check-Out
        </Text>
        <Text color={Colors.PLACEHOLDER}>
          {moment(checkout).format('DD MMMM YYYY')}
        </Text>
      </View>
      {isRefund && (
        <View style={styles.row_last}>
          <RemixIcon
            name="ri-refund-2-line"
            color={Colors.BUTTON_COLOR}
            size={20}
          />
          <Text color={Colors.BUTTON_COLOR}>
            Dapat di refund jika dibatalkan
          </Text>
        </View>
      )}
    </View>
  );
};

export default DetailOrder;
