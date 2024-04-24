import {Pressable, View, Modal} from 'react-native';
import React, {useState} from 'react';
import Text from '@atom/Text';
import styles from './CardEditVisitor.styles';
import RemixIcon from 'react-native-remix-icon';
import {Colors} from '@helpers/Colors';
import TextInput from '@atom/Texinput';
import ButtonCustom from '@molecules/ButtonCustom';

const CardEditVisitor = ({item, index, onDelete, setData, data}) => {
  const [name, setName] = useState(item.name);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const Change_Title = title => {
    const updatedData = [...data];
    updatedData[index].title = title;
    setData(updatedData);
    toggleModal();
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Pressable onPress={toggleModal} style={styles.container_gender}>
          <Text
            style={{zIndex: -1, fontWeight: '600'}}
            color={Colors.PRIMARY_MAIN}>
            {item.title.toUpperCase()}
          </Text>
          <RemixIcon
            name="ri-arrow-down-s-line"
            size={20}
            color={Colors.PRIMARY_MAIN}
          />
        </Pressable>
        <TextInput
          value={name}
          onChangeText={e => {
            const updatedData = [...data];
            updatedData[index].name = e;
            setData(updatedData);
            setName(e);
          }}
          style={styles.text_input}
        />
        <Pressable onPress={() => onDelete(index)}>
          <RemixIcon
            name="ri-delete-bin-line"
            size={20}
            color={Colors.BUTTON_COLOR}
          />
        </Pressable>
      </View>
      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={toggleModal}>
        <View style={styles.modal}>
          <View style={styles.container_modal}>
            <Text style={{textAlign: 'center', fontWeight: '600'}}>
              Ganti Panggilan
            </Text>
            <Pressable
              style={styles.item_container}
              onPress={() => Change_Title('Mr')}>
              <Text color={'black'}>Mr</Text>
            </Pressable>
            <Pressable
              style={styles.item_container}
              onPress={() => Change_Title('Ms')}>
              <Text color={'black'}>Ms</Text>
            </Pressable>
            <ButtonCustom title="Close Modal" onPress={() => toggleModal()} />
          </View>
        </View>
      </Modal>
    </React.Fragment>
  );
};

export default CardEditVisitor;
