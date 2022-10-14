import {GET_LOCATIONS, ADD_LOCATION} from '../constants/constants';

/**
 * *----calls from events
 */
export const getMarkerLocations = () => { 
        return{
            type: 'callGetLocation',
        
        };
};

export const addMarkerLocation = (newMarker) => {
    return{
        type: 'callAddMarkerLocation',
        payload: newMarker
    };
}



/**
 * *----calls from Saga to call Reducer
 */
export const getlocationList = (response) => { 
        return{
            type: GET_LOCATIONS,
            payload: response,
          };
    
};

export const addNewLocation = (newMarker) => { 

    return{
        type: ADD_LOCATION,
        payload: newMarker,
      };
};
