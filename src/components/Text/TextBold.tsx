import {scale} from '@modules/themes/responsive';
import Colors from 'modules/themes/colors';
import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

type TextBoldProps = {
  children: string;
  style?: TextStyle;
};

const TextBold = ({children, style}: TextBoldProps): React.ReactNode => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default TextBold;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SFProText-Bold',
    fontSize: scale(12),
    color: Colors.textColor,
  },
});
