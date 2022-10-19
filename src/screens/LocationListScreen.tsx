import React from 'react';
import { useEffect } from 'react';
import {View, FlatList, Text} from 'react-native';
import CustomListItem from '../components/CustomeListItem';
import CustomDescr from '../components/CustomDescr';

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
              latitude =  {"Latitude: " + item.latitude}
              longitude = {"Longitude: " + item.longitude}
            />
          );
        }}
      />

 {/* <Text style={AppStyles.centerItem}>Nothing to show!</Text> */}
      
    </View>
  );
};

export default LocationListScreen;
