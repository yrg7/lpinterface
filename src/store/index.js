import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cashReducer } from './cashReducer';
import {customerReducer} from './customerReducer'
import { sensorsObjReducer } from './sensorReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { ThunkMiddleware } from 'redux-thunk';
import thunkMiddleware from 'redux-thunk';
const rootReducer=combineReducers({
    cash: cashReducer,
    customers: customerReducer,
    sensorsObj: sensorsObjReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))