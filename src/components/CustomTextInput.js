import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import AppStyles from '../utils/AppStyle';

const CustomTextInput = (props) =>{
    return(
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',            
          }}>
          <TextInput
            style = {AppStyles.textInputTheme}
            placeholder={props.placeHolder}
          />
        </View>
    );
}

export default CustomTextInput;