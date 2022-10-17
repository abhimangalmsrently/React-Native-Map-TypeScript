import {GET_LOCATIONS, ADD_LOCATION} from '../constants/constants';

const initialState = {
  locations: []
};

function mapReducer(state = initialState, action : any) {

  switch (action.type) {
    
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
      };

    case ADD_LOCATION:
  console.log("ADD_LOCATION", state)

      return {
        ...state,
        locations: [...state.locations, action.payload]
      } 
    default:
      return state;
  }
}

export default mapReducer;
