import {View, Text as TextRN} from 'react-native';
import React from 'react';

const Text = ({children, style, color}) => {
  return (
    <TextRN style={[{color: color, flexWrap: 'wrap'}, style]}>
      {children}
    </TextRN>
  );
};

export default Text;
