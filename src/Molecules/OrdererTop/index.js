import {Pressable, View} from 'react-native';
import React from 'react';
import styles from './Orderer.styles';
import Text from '@atom/Text';
import ButtonCustom from '@molecules/ButtonCustom';
import {Colors} from '@helpers/Colors';

const OrdererTop = ({item}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontWeight: '700',color:'black'}}>TN. ADRESS</Text>
        <Text style={{fontSize: 12, color: Colors.PLACEHOLDER}}>
          TN. ADRESS
        </Text>
        <Text style={{fontSize: 12, color: Colors.PLACEHOLDER}}>
          TN. ADRESS
        </Text>
      </View>
      <Pressable>
        <Text style={styles.text}>Ubah</Text>
      </Pressable>
    </View>
  );
};

export default OrdererTop;
