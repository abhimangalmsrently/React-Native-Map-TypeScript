import React from 'react';
import LocationModel from './LocationModel';
import MarkerRegionModel from './MarkerRegionModel';

interface MapPropModel {
    locationListProps: LocationModel[],
    initialRegionProps: MarkerRegionModel,
    regionProps: MarkerRegionModel,
    lastMarkerProps: LocationModel,
    onLongPressProps: Function
}

export default MapPropModel;