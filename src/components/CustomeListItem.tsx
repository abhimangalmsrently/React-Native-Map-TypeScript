import React from 'react';
import {View, Text} from 'react-native';
import LocationModel from '../model/LocationModel';
import AppStyles from '../utils/AppStyle';

const CustomListItem = (props : LocationModel) => {
  return (
    <View style={AppStyles.listItem}>
      <Text style={AppStyles.headerText}>{props.title}</Text>
      <Text style={AppStyles.descrText}>{props.latitude}</Text>
      <Text style={AppStyles.descrText}>{props.longitude}</Text>
    </View>
  );
};

export default CustomListItem;