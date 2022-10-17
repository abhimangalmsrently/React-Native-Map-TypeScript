import {createStore, combineReducers, applyMiddleware} from 'redux';
import mapReducer from '../reducers/reducers';
import saga from 'redux-saga';
import sagaWatchers from '../saga/saga';

const rootReducer = combineReducers({mapReducer});

const sagaMiddleware = saga();

const middleWare = applyMiddleware(sagaMiddleware);

const configureStore = createStore(rootReducer, {},  middleWare); 

export default configureStore;


sagaMiddleware.run(sagaWatchers);