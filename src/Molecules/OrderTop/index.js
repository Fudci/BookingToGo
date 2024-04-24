import {View, Image} from 'react-native';
import React, {useMemo} from 'react';
import styles from './OrderTop.styles';
import Text from '@atom/Text';
import {Colors} from '@helpers/Colors';

const OrderTop = ({item}) => {
  var start = new Date(item?.chosen_hotel_params?.check_in);
  var end = new Date(item?.chosen_hotel_params?.check_out);

  var differenceMs = end - start;
  var differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

  const guest =
    item?.chosen_hotel_params.guest_children +
    item?.chosen_hotel_params.guest_adult;

  const imageSource = item?.chosen_hotel_detail.images[0];
  const detail = `${item?.chosen_hotel_params.total_room} Kamar • ${item?.chosen_hotel_room.room_name} • ${guest} Tamu • ${differenceDays} Malam `;
  return (
    <View style={styles.container}>
      <Image
        style={{width: 60, height: 60, borderRadius: 10}}
        source={{
          uri: imageSource?.thumbnail,
        }}
      />
      <View>
        <Text style={{fontWeight: '700'}} color={Colors.PRIMARY_MAIN}>
          {item?.chosen_hotel_detail?.hotel_name}
        </Text>
        <Text style={styles.text_desc} color={Colors.PLACEHOLDER}>
          {item?.chosen_hotel_room?.room_name}
          {item?.chosen_hotel_room?.meal &&
            ` with ${item?.chosen_hotel_room?.meal}`}
        </Text>
        <Text style={styles.text_desc} color={Colors.PLACEHOLDER}>
          {detail}
        </Text>
      </View>
    </View>
  );
};

export default OrderTop;
