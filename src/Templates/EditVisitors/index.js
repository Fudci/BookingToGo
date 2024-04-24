import {View, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';
import Container from '@atom/Container';
import Header from '@organisms/Header';
import ButtonCustom from '@molecules/ButtonCustom';
import CardEditVisitor from '@organisms/CardEditVisitor';
import Text from '@atom/Text';
import styles from './EditVisitors.styles';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '@helpers/Colors';

const EditVisitors = props => {
  const navigation = useNavigation();
  const {data} = props?.route?.params;

  const [dataVisitors, setDataVisitors] = useState(data);

  const onDelete = e => {
    const NewFilter = dataVisitors.filter((el, idx) => {
      return idx !== e;
    });
    setDataVisitors(NewFilter);
  };

  const renderItem = ({item, index}) => {
    return (
      <CardEditVisitor
        setData={setDataVisitors}
        data={dataVisitors}
        item={item}
        index={index}
        onDelete={e => onDelete(e)}
      />
    );
  };

  const AddDate = () => {
    setDataVisitors([
      ...dataVisitors,
      {
        id: Math.random(22, 999),
        name: '',
        title: 'Mr',
      },
    ]);
  };
  return (
    <Container style={styles.container}>
      <Header title={'Tambah Data Tamu'} />
      <Text style={styles.text_title}>Data Tamu</Text>
      <FlatList
        data={dataVisitors}
        renderItem={renderItem}
        ListFooterComponent={() => (
          <Pressable onPress={AddDate} style={{gap: 10, alignSelf: 'center', marginTop: 10}}>
            <Text color={Colors.BUTTON_COLOR}> + Tambah Data Tamu</Text>
          </Pressable>
        )}
      />
      <View
        style={{
          bottom: 20,
          position: 'absolute',
          width: '100%',
          paddingHorizontal: 16,
        }}>
        <ButtonCustom
          title={'Simpan'}
          onPress={() => navigation.navigate('Booking', {data: dataVisitors})}
        />
      </View>
    </Container>
  );
};

export default EditVisitors;
