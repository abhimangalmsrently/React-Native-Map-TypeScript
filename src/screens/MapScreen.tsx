import React, { useRef } from 'react';
import { View, FlatList, Alert, NativeEventEmitter } from 'react-native';
import CustomButton from '../components/CustomButton';
import AppStyles from '../utils/AppStyle';
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';

import { useSelector, useDispatch } from 'react-redux';
import { getMarkerLocations, addMarkerLocation, removeMarkers } from '../actions/actions';
import { getPreciseDistance } from 'geolib';
import CustomMap from '../components/CustomMap';

const MapScreen = () => {

  const locationList = useSelector((state: any) => state.mapReducer.locations);
  let initialRegion = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922 / 1,
    longitudeDelta: 0.0521 / 1
  }

  const dispatch = useDispatch();
  const mapRef = useRef(null);

  React.useEffect(() => {
    dispatch(getMarkerLocations());

  }, []);

  if (locationList.length) {
    initialRegion = {
      latitude: locationList[locationList.length - 1].latitude,
      longitude: locationList[locationList.length - 1].longitude,
      latitudeDelta: 0.0922 / 1,
      longitudeDelta: 0.0521 / 1
    }

  }

  const addMarker = (coordinate: any) => {

    const newMarker = {
      key: Math.random(),
      latitude: coordinate.nativeEvent.coordinate.latitude,
      longitude: coordinate.nativeEvent.coordinate.longitude,
      title: 'Unknown location',
      Description: 'No Descrpition',
    }

    // adding new marker to MMKV
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

      Alert.alert(
        'Distance is between ' +
        locationList[locationList.length -1].title +
        ' & ' +
        locationList[locationList.length -2].title +
        ' is ' +
        distance,
      );
    }
  }

  const getLocations = () => {
    
    // get marker locations from MMKV
    dispatch(getMarkerLocations());

    //calculate distance between 2 markers
    calculateDistance();

  };

  const removeMarkerLocations = () => {
    // to remove markers
    dispatch(removeMarkers());
  }

  return (
    <View style={AppStyles.centeredView}>
      <CustomMap 
        locationListProps = {locationList}
        initialRegionProps = {initialRegion}
        regionProps = {initialRegion}
        onLongPressProps = {(coordinate: any) => {
          addMarker(coordinate);
        }} />
      <CustomButton 
        title={'Show markers'} 
        onClick={() => getLocations()} />
    </View>
  );
};

export default MapScreen;
