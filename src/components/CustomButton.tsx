import React from 'react';
import {TouchableOpacity} from 'react-native';
import AppStyles from '../utils/AppStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../utils/Colors';

const CustomButton = (props: any) => {
  return (
    <TouchableOpacity
      style={AppStyles.buttonTheme}
      onPress={() => props.onClick()}>
      {/* <Text style={AppStyles.buttonTextTheme}>{props.title}</Text> */}
      <Icon name="reload" size={20} color={Colors.white} />
    </TouchableOpacity>
  );
};

export default CustomButton;
