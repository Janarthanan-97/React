import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer/rootReducer'

// const actionMiddleware = applyMiddleware(setIsActiveFalse, setIsActiveTrue)

const store = createStore(rootReducer);

export default store;