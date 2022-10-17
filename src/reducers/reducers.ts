import { GET_LOCATIONS, ADD_LOCATION, MARKER_KEY } from '../constants/constants';
import { mmkvStorage } from '../storage/Storage';


const initialState = {
  locations: []
};

function mapReducer(state = initialState, action: any) {

  switch (action.type) {

    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
      };

    case ADD_LOCATION:
      console.log("ADD_LOCATION", state)

      mmkvStorage.setMarker(MARKER_KEY, JSON.stringify([...state.locations, action.payload]))

      return {
        ...state,
        locations: [...state.locations, action.payload]
      }
    default:
      return state;
  }
}

export default mapReducer;
