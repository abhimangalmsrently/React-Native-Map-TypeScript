import React, { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import AppStyles from '../utils/AppStyle';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../utils/Colors';


const CustomMap = (props: any) => {

    const animatedScale = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        animatedScale.setValue(1);
    }, []);

    const markerHandler = (coordinate: any) => {

        animatedScale.setValue(0.5);

        Animated.spring(animatedScale, {
            toValue: 1,
            bounciness: 24,
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
            region={props.regionProps}

            onLongPress={(coordinate) => markerHandler(coordinate)} //for animation and action
            >

            {props.locationListProps.map((marker: any, index: any) => (
                <Marker key={index}
                    coordinate={{
                        latitude: marker.latitude,
                        longitude: marker.longitude,
                    }}
                    title={marker.title}
                    description={marker.Description}>
                    {props.lastMarkerProps === marker ? //check if it is, last added marker
                        <Animated.View style={{ transform: [{ scale: animatedScale }] }}>
                            <Icon name="place" size={28} color={Colors.primaryColor} />
                        </Animated.View> :
                        <Icon name="place" size={28} color={Colors.primaryColor} />
                    }

                </Marker>
            ))}
        </MapView>
    )
}

export default CustomMap;