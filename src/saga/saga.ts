import {all, put, takeLatest} from 'redux-saga/effects';
import {getlocationList, addNewLocation, removeMarkerLocations} from '../actions/actions'

import {locationsList}  from '../utils/MarkerLocations';

import { mmkvStorage } from '../storage/Storage';
import { MARKER_KEY } from '../constants/constants';
import AddMarkerActionModel from '../model/AddMarkerActionModel';



function* getMarkerLocations() {
  let response = locationsList;
    
  if(mmkvStorage.contains(MARKER_KEY)){
    const markerLocation = mmkvStorage.getMarkers(MARKER_KEY);
    response = markerLocation;
  }else{
    response = [];
  }
     
  yield put(getlocationList(response));
}


function* addMarkerLocation(newMarker: AddMarkerActionModel) {
  console.log('_____________',newMarker);

  yield put(addNewLocation(newMarker.payload));
}

function* removeMarkers() {
yield put(removeMarkerLocations())
}

/**--------------------listener and watcher---------------------- */

function* sagaListener() {
  yield takeLatest('callGetLocation', getMarkerLocations);
  yield takeLatest('callAddMarkerLocation', addMarkerLocation);
  yield takeLatest('callRemoveMarkers', removeMarkers);
}

function* sagaWatchers() {
  yield all([sagaListener()]);
}

export default sagaWatchers;
