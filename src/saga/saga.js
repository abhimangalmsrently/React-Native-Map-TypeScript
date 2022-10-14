import {all, put, takeLatest} from 'redux-saga/effects';
import {getlocationList, addNewLocation} from '../actions/actions'

import locationsList  from '../utils/MarkerLocations';

function* getMarkerLocations() {
    
  const response = locationsList;

  yield put(getlocationList(response));
}


function* addMarkerLocation(newMarker) {

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
