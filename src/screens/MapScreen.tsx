import React, { useRef, useState } from 'react';
import { View, 
  Animated, 
  Easing, 
  PermissionsAndroid } from 'react-native';
import CustomButton from '../components/CustomButton';
import AppStyles from '../utils/AppStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Geolocation from 'react-native-geolocation-service';
import { useSelector, useDispatch } from 'react-redux';
import {
  getMarkerLocations,
  addMarkerLocation,
  removeMarkers,
} from '../actions/actions';
import CustomMap from '../components/CustomMap';
import { LongPressEvent } from 'react-native-maps';
import StateModel from '../model/StateModel';

 // Request Location Permission
 const requestLocationPermission = async () =>{

  try{
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        title: 'Location permission',
        message: 'This app requires location permission',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',

      },
    );

    if(granted==='granted'){
      console.log('Location granted');
      return true;
    }else{
      console.log('Location Denied');
      return false;
    }

  }catch(err){
    return false;
  }
};

const MapScreen = () => {

  let locationList = useSelector((state: StateModel) => state.locations);
  
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false); // show loading

  const [region,setRegion] = useState({
    latitude: 0.0,
    longitude: 0.0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0922,
 });

  const [lastMarker, setLastMarker] = useState({key: 0, latitude: 0 , longitude: 0, title : "", description: ""});  //last added marker


  let initialRegion = {
    latitude: 20.5937,
    longitude: 78.9629,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };


  const getCurrentLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
           
            setRegion({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0922,
            })
          
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
  };


  const spinValue = new Animated.Value(0);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1], //spin value
    outputRange: ['0deg', '360deg'],
  });

  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    },).start(() => setLoading(false));

  };
  /**---------useEffect----------*/

  React.useEffect(() => {
    getCurrentLocation();
    getLocations();
  }, []);

  React.useEffect(() => {
    spin();
  });

  if (locationList && locationList.length) {
    initialRegion = {
      latitude: locationList[locationList.length - 1].latitude,
      longitude: locationList[locationList.length - 1].longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
  }else{
    initialRegion = region;
  }

  const addMarker = (coordinate: LongPressEvent) => {
    
    setLoading(true);
    const newMarker = {
      key: Math.random(),
      latitude: coordinate.nativeEvent.coordinate.latitude,
      longitude: coordinate.nativeEvent.coordinate.longitude,
      title: 'Unknown location',
      description: 'No Descrpition',
    };
    setLastMarker(newMarker);
    // adding new marker to MMKV
    dispatch(addMarkerLocation(newMarker));
  };

  const getLocations = () => {
    // get marker locations from MMKV
    dispatch(getMarkerLocations());
  };

  const removeMarkerLocations = () => {
    // to remove markers
    setLoading(true);
    dispatch(removeMarkers());
    // getLocations();
  };
  return (
    <View style={AppStyles.centeredView}>
      <CustomMap
        locationListProps={locationList}
        initialRegionProps={initialRegion}
        regionProps={initialRegion}
        lastMarkerProps={lastMarker} //for last added marker
        onLongPressProps={(coordinate: LongPressEvent) => {
          addMarker(coordinate);
        }}
      />
      {loading && (
        <Animated.View style={[{ position: 'absolute', right: 0, margin: 8 }, { transform: [{rotate}] }]}>
          <AntDesign name={'loading1'} color={'blue'} size={30} />
        </Animated.View>
      )}
      <CustomButton
        title={'Show markers'}
        onClick={() => removeMarkerLocations()}
      />
    </View>
  );
};

export default MapScreen;
