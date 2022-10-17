import {all, put, takeLatest} from 'redux-saga/effects';
import {getlocationList, addNewLocation} from '../actions/actions'

import {locationsList}  from '../utils/MarkerLocations';

import { mmkvStorage } from '../storage/Storage';
import { MARKER_KEY } from '../constants/constants';


 
function* getMarkerLocations() {
  let response = locationsList;
    
      const markerLocation = mmkvStorage.getMarkers(MARKER_KEY);
      response = markerLocation;
   

  yield put(getlocationList(response));
}


function* addMarkerLocation(newMarker: any) {
  yield put(addNewLocation(newMarker.payload));
}


function* sagaListener() {
  yield takeLatest('callGetLocation', getMarkerLocations);
  yield takeLatest('callAddMarkerLocation', addMarkerLocation);
}

function* sagaWatchers() {
  yield all([sagaListener()]);
}

export default sagaWatchers;
