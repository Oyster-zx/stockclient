/*
 * src/store.js
 * With initialState
*/
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initialState = {};

export default createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
);