import {createStore, combineReducers, applyMiddleware} from 'redux';
import mapReducer from '../reducers/reducers';
import saga from 'redux-saga';
import sagaWatchers from '../saga/saga';

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';



const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, mapReducer);

const sagaMiddleware = saga();

const middleWare = applyMiddleware(sagaMiddleware);
export const configureStore = createStore(persistedReducer,  middleWare); 
export const persistor = persistStore(configureStore);

sagaMiddleware.run(sagaWatchers);


// const rootReducer = combineReducers({mapReducer});

// const sagaMiddleware = saga();

// const middleWare = applyMiddleware(sagaMiddleware);

// const configureStore = createStore(rootReducer, {},  middleWare); 

// export default configureStore;


// sagaMiddleware.run(sagaWatchers);