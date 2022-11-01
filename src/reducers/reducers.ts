import { GET_LOCATIONS, ADD_LOCATION, MARKER_KEY, REMOVE_LOCATIONS } from '../constants/constants';
import { mmkvStorage } from '../storage/Storage';
import { AnyAction } from 'redux';

const initialState = {
  locations: []
};

function mapReducer(state = initialState, action: AnyAction) {


  switch (action.type) {

    case GET_LOCATIONS:

      return {
        ...state,
        locations: action.payload,
      };

    case ADD_LOCATION:

      mmkvStorage.setMarker(MARKER_KEY, JSON.stringify([...state.locations, action.payload]))

      return {
        ...state,
        locations: [...state.locations, action.payload]
      }

    case REMOVE_LOCATIONS:

      mmkvStorage.deleteKeys();
      // return {
      //   ...state,
      //   locations: [...state.locations, action.payload]
      // }

      return {
        ...initialState
      }
        
    default:
      return state;
  }
}

export default mapReducer;
