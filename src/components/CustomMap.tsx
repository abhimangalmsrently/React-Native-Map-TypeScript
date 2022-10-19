import React from "react";
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';
import AppStyles from '../utils/AppStyle';

const CustomMap = (props: any) => {
    return (
        <MapView
            style={AppStyles.mapStyle}
            zoomEnabled={true}
            showsUserLocation={true}

            initialRegion={props.initialRegionProps}
            region = {props.regionProps}

            onLongPress={(coordinate) => props.onLongPressProps(coordinate)}>

            {props.locationListProps.map((marker: any) => (
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
    )
}

export default CustomMap;