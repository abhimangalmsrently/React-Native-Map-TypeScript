import {GET_LOCATIONS, ADD_LOCATION, REMOVE_LOCATIONS} from '../constants/constants';

/**
 * *----calls from events
 */
export const getMarkerLocations = () => { 
        return{
            type: 'callGetLocation',
        
        };
};

export const addMarkerLocation = (newMarker : any) => {
    return{
        type: 'callAddMarkerLocation',
        payload: newMarker
    };
}

export const removeMarkers = () => {
    return{
        type: 'callRemoveMarkers' 
    };
}



/**
 * *----calls from Saga to call Reducer
 */
export const getlocationList = (response : any) => { 
        return{
            type: GET_LOCATIONS,
            payload: response,
          };
    
};

export const addNewLocation = (newMarker : any) => { 

    return{
        type: ADD_LOCATION,
        payload: newMarker,
      };
};

export const removeMarkerLocations = () => { 

    return{
        type: REMOVE_LOCATIONS
      };
};
