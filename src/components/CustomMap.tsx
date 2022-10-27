import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import MapView, {Marker } from 'react-native-maps';
import AppStyles from '../utils/AppStyle';

const CustomMap = (props: any) => {

    const animatedScale = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        animatedScale.setValue(1);
    }, []);

    const markerHandler = (coordinate: any) => {

        animatedScale.setValue(0.8); 
        Animated.spring(animatedScale, {
            toValue: 1,
            bounciness: 50,
            speed: 10,
            useNativeDriver: true
        }).start();

        props.onLongPressProps(coordinate);

    }

    return (
        <MapView
        ref={props.mapRefProps}
            style={AppStyles.mapStyle}
            zoomEnabled={true}
            showsUserLocation={true}

            initialRegion={props.initialRegionProps}
            region = {props.regionProps}

            onLongPress={(coordinate) => markerHandler(coordinate)}>

            {props.locationListProps.map((marker: any, index: any) => (
               <Animated.View style = {{transform : [{scale: animatedScale}]}}>
                 <Marker key={index}
                    coordinate={{
                        latitude: marker.latitude,
                        longitude: marker.longitude,
                    }}
                    title={marker.title}
                    description={marker.Description}
                />
               </Animated.View>
            ))}
        </MapView>
    )
}

export default CustomMap;