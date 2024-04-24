import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import styles from './Container.styles';

const Container = ({children, light = false, style, isSplash = false}) => {
  return (
    <React.Fragment>
      <StatusBar
        barStyle={light ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <View style={[styles.container(isSplash), style]}>
        {children}
      </View>
    </React.Fragment>
  );
};

export default Container;
