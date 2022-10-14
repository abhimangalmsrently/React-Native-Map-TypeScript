import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AppStyles from '../utils/AppStyle';

const CustomHeader = props => {
  return (
    <View style={AppStyles.header}>
      <Text style={AppStyles.headerText}>{props.title}</Text>
    </View>
  );
};

export default CustomHeader;

