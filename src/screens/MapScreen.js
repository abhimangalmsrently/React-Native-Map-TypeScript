import React from 'react';
import {View, FlatList, Alert, NativeEventEmitter} from 'react-native';
import CustomButton from '../components/CustomButton';
import AppStyles from '../utils/AppStyle';
import MapView, {Marker} from 'react-native-maps';

import {useSelector, useDispatch} from 'react-redux';
import {getMarkerLocations, addMarkerLocation} from '../actions/actions';
import {getPreciseDistance} from 'geolib';

import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';

const MapScreen = () => {
  const locationList = useSelector(state => state.mapReducer.locations);
  
  
  const dispatch = useDispatch();

   const addMarker = coordinate => {

    console.log("locations", coordinate.nativeEvent);

    const newMarker = {
      key: Math.random(),
      latitude: coordinate.nativeEvent.coordinate.latitude,
      longitude: coordinate.nativeEvent.coordinate.longitude,
      title: 'Unknown',
      Description: 'No Descrpition',
    }
    dispatch(addMarkerLocation(newMarker));
  };

  const calculateDistance = () => {

    if (locationList && locationList.length) {
      const distance = getPreciseDistance(
        {
          latitude: locationList[0].latitude,
          longitude: locationList[0].longitude,
        },
        {
          latitude: locationList[1].latitude,
          longitude: locationList[1].longitude,
        },
      );

      alert(
        'Distance is between ' +
          locationList[0].title +
          ' & ' +
          locationList[1].title +
          ' is ' +
          distance,
      );
    }
  }

  const getLocations = () => {
    dispatch(getMarkerLocations());

    calculateDistance();

  };

  return (
    <View style={AppStyles.centeredView}>
      <MapView
        onLongPress={coordinate => {
           addMarker(coordinate);


        }}
        style={AppStyles.mapStyle}
        region={{
          latitude: 10.073232,
          longitude: 76.302765,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {locationList.map(marker => (
          <Marker
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            description={marker.Description}
          />
        ))}
      </MapView>
      <CustomButton title={'Show markers '} onClick={() => getLocations()} />
    </View>
  );
};

export default MapScreen;
