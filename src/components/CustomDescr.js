import React from 'react';
import {Text, View} from 'react-native';
import AppStyles from '../utils/AppStyle';

const CustomDescr = props => {
  return (
    <View style={AppStyles.descr}>
      <Text style={AppStyles.descrText}>{props.title}</Text>
    </View>
  );
};

export default CustomDescr;

