import {View, FlatList, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Detailorderrer.styles';
import CardVisitor from '@molecules/CardVisitor';
import OrdererTop from '@molecules/OrdererTop';
import RadioButton from '@molecules/RadioButton';
import Text from '@atom/Text';
import {Colors} from '@helpers/Colors';
import {useNavigation} from '@react-navigation/native';
import {storage} from '@helpers/HelpersMmkv';

const DetailOrderer = ({visitors, item}) => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    forme: true,
    visitor: [],
  });

  useEffect(() => {
    if (visitors) {
      setForm(prevForm => ({
        ...prevForm,
        visitor: visitors,
      }));
    }
  }, [visitors]);

  useEffect(() => {
    const guest =
      item?.chosen_hotel_params.guest_children +
      item?.chosen_hotel_params.guest_adult;
    for (let i = 0; i < guest; i++) {
      const newVisitor = {
        id: Math.random(999, 1111),
        name: 'John Doe',
        title: 'Mr',
      };
      setForm(prevForm => ({
        ...prevForm,
        visitor: [...prevForm.visitor, newVisitor],
      }));
    }
  }, [item?.chosen_hotel_params]);

  const CheckButton = () => {
    setForm(prevForm => ({
      ...prevForm,
      forme: !prevForm.forme,
    }));
  };

  const renderItem = ({item, index}) => {
    return <CardVisitor item={item} />;
  };
  return (
    <View style={styles.container_bot}>
      <Text style={styles.medium}>Detail Pemesan</Text>
      <OrdererTop item={item} />
      <RadioButton
        onPress={CheckButton}
        isActive={!form.forme}
        title={'Saya memesan untuk diri sendiri'}
      />
      <RadioButton
        onPress={CheckButton}
        isActive={form.forme}
        title={'Saya memesan untuk orang lain'}
      />
      <FlatList
        data={form.visitor}
        renderItem={renderItem}
        ListFooterComponent={() => (
          <Pressable
            onPress={() =>
              navigation.navigate('EditVisitors', {data: form.visitor})
            }
            style={{alignSelf: 'flex-end', marginTop: 10}}>
            <Text style={styles.text_chng_visitor} color={Colors.PRIMARY_MAIN}>
              Ubah Data Tamu
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DetailOrderer;
