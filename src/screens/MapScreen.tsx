import React, { useRef } from 'react';
import { View, Animated, Easing } from 'react-native';
import CustomButton from '../components/CustomButton';
import AppStyles from '../utils/AppStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { useSelector, useDispatch } from 'react-redux';
import {
  getMarkerLocations,
  addMarkerLocation,
  removeMarkers,
} from '../actions/actions';
import CustomMap from '../components/CustomMap';

const MapScreen = () => {
  let locationList = useSelector((state: any) => state.mapReducer.locations);
  const dispatch = useDispatch();

  let initialRegion = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const mapRef = useRef(null);

  const spinValue = new Animated.Value(0);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };
/**---------useEffect----------*/
  React.useEffect(() => {
    getLocations();
  }, []);

  React.useEffect(() => {
    spin();
  });

  if (locationList.length) {
    initialRegion = {
      latitude: locationList[locationList.length - 1].latitude,
      longitude: locationList[locationList.length - 1].longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
  }

  const addMarker = (coordinate: any) => {
    const newMarker = {
      key: Math.random(),
      latitude: coordinate.nativeEvent.coordinate.latitude,
      longitude: coordinate.nativeEvent.coordinate.longitude,
      title: 'Unknown location',
      Description: 'No Descrpition',
    };

    // adding new marker to MMKV
    dispatch(addMarkerLocation(newMarker));
  };

  const getLocations = () => {
    // get marker locations from MMKV
    dispatch(getMarkerLocations());
  };

  const removeMarkerLocations = () => {
    // to remove markers
    dispatch(removeMarkers());
    getLocations();
  };

  return (
    <View style={AppStyles.centeredView}>
      <CustomMap
        mapRefProps={mapRef}
        locationListProps={locationList}
        initialRegionProps={initialRegion}
        regionProps={initialRegion}
        onLongPressProps={(coordinate: any) => {
          addMarker(coordinate);
        }}
      />
      <Animated.View style={[{ position: 'absolute', right: 0, margin: 8 }, { transform: [{ rotate }] }]}>
        <AntDesign name={'loading1'} color={'blue'} size={50} />
      </Animated.View>
      <CustomButton
        title={'Show markers'}
        onClick={() => removeMarkerLocations()}
      />
    </View>
  );
};

export default MapScreen;
