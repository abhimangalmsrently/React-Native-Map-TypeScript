import React from 'react';
import { useEffect } from 'react';
import {View, FlatList, Text} from 'react-native';
import CustomListItem from '../components/CustomeListItem';

import AppStyles from '../utils/AppStyle';

import {useSelector} from 'react-redux';

const LocationListScreen = () => {
  const locationList = useSelector((state : any )=> state.mapReducer.locations);

  return (
    <View style={AppStyles.centeredView}>

      <FlatList
        data={locationList}
        renderItem={({item, index}) => {
          return (
            <CustomListItem
              key = {index}
              title = {item.title}
              Description = {item.description}
              latitude =  {item.latitude}
              longitude = {item.longitude}
            />
          );
        }}
      />

 {/* <Text style={AppStyles.centerItem}>Nothing to show!</Text> */}
      
    </View>
  );
};

export default LocationListScreen;
