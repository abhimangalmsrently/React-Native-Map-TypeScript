import React from 'react';
import {TouchableOpacity} from 'react-native';
import AppStyles from '../utils/AppStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../utils/Colors';

import { Animated } from "react-native";
import { useRef, useEffect } from 'react';

const CustomButton = (props: any) => {

  const animatedScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
      animatedScale.setValue(1);
  }, []);

  const markerHandler = () => {

      animatedScale.setValue(0.8); 
      Animated.spring(animatedScale, {
          toValue: 1,
          bounciness: 8,
          speed: 18,
          useNativeDriver: true
      }).start();

      props.onClick()

  }
  return (
    
      <Animated.View style = {{transform : [{scale: animatedScale}]}}>

<TouchableOpacity
      style={AppStyles.buttonTheme}
      onPress={markerHandler}>

      {/* <Text style={AppStyles.buttonTextTheme}>{props.title}</Text> */}
      <Icon name="refresh" size={24} color={Colors.white} />

    </TouchableOpacity>

      </Animated.View>

      
  );
};

export default CustomButton;
