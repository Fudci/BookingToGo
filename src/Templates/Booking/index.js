import React, {useEffect, useState} from 'react';
import Container from '@atom/Container';
import Header from '@organisms/Header';
import styles from './Booking.styles';
import StepBooking from '@organisms/StepBooking';
import {useGetHotelByIdQuery} from 'src/Services/hotelApi';
import DetailOrder from '@organisms/DetailOrder';
import {FlatList} from 'react-native-gesture-handler';
import DetailOrderer from '@organisms/DetailOrderer';
import {Pressable, View} from 'react-native';
import RemixIcon from 'react-native-remix-icon';

const Booking = props => {
  const {data, error, isLoading} = useGetHotelByIdQuery();

  const hotelDetail = data?.chosen_hotel?.data?.get_chosen_hotel;

  const [dataVisitors, setdataVisitors] = useState(props?.route?.params?.data);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setdataVisitors(props?.route?.params?.data);
  }, [props?.route?.params?.data]);

  const renderItem = ({item, index}) => {
    return (
      <React.Fragment>
        {index == 0 && <DetailOrder item={hotelDetail} />}
        {index == 1 && (
          <DetailOrderer visitors={dataVisitors} item={hotelDetail} />
        )}
      </React.Fragment>
    );
  };

  const next = () => {
    setStep(prev => {
      if (prev < 2) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  };
  const prev = () => {
    setStep(prev => {
      if (prev <= 2 && prev >= 0) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };

  return (
    <Container>
      <Header title={'Payment Details'} />
      <StepBooking stepValue={step} />
      <FlatList data={[1, 2]} renderItem={renderItem} />
      <View style={styles.wrapper_step}>
        <Pressable onPress={next}>
          <RemixIcon name="ri-arrow-right-s-line" />
        </Pressable>
        <Pressable onPress={prev}>
          <RemixIcon name="ri-arrow-left-s-line" />
        </Pressable>
      </View>
    </Container>
  );
};

export default Booking;
