import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Animated } from 'react-native';

const CustomLoading = (rotate: any) => {
  const spinValue = new Animated.Value(0);
  console.log("🚀 ~ file: CustomLoading.tsx ~ line 6 ~ CustomLoading ~ rotate", rotate)
  const totation = spinValue.interpolate(rotate);
  return (
    <Animated.View style={[{ position: 'absolute', right: 0, margin: 8 }, { transform: rotate }]}>
      <AntDesign name={'loading1'} color={'blue'} size={30} />
    </Animated.View>
  );
};

export default CustomLoading;
