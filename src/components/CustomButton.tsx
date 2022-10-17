import React from 'react';
import {Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import AppStyles from '../utils/AppStyle';

const CustomButton = (props: any)  => {
  return (
    <TouchableOpacity
      style={AppStyles.buttonTheme}
      onPress={() => props.onClick()}>
      <Text style={AppStyles.buttonTextTheme}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
