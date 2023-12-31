import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import rootReducer from './reducers/rootReducer.js';

const middleware = [thunk]; 

const enhancer = applyMiddleware(...middleware);

const configureStore = () => createStore(rootReducer, enhancer);

export default configureStore({});
