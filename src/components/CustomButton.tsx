import React from 'react';
import { TouchableOpacity } from 'react-native';
import AppStyles from '../utils/AppStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../utils/Colors';

import { Animated } from "react-native";
import { useRef, useEffect } from 'react';
import ButtonClickModel from '../model/ButtonClickModel';

const CustomButton = (props: ButtonClickModel) => {

  const animatedScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedScale.setValue(1);
  }, []);

  const markerHandler = () => {

    animatedScale.setValue(0.8);
    Animated.spring(animatedScale, {
      toValue: 1,
      bounciness: 20,
      speed: 24,
      useNativeDriver: true
    }).start();

    props.onClick()

  }
  return (


      <TouchableOpacity
        style={AppStyles.buttonTheme}
        onPress={markerHandler}>
    <Animated.View style={{ transform: [{ scale: animatedScale }] }}>

        {/* <Text style={AppStyles.buttonTextTheme}>{props.title}</Text> */}
        <Icon name="refresh" size={24} color={Colors.white} />
        </Animated.View>

      </TouchableOpacity>



  );
};

export default CustomButton;
