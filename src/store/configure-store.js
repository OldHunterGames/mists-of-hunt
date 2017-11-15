// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'reducers';

const createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
    typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const configureStore = (initialState = {}) => (
    createStoreWithMiddleware(rootReducer, initialState)
);

export default configureStore();
