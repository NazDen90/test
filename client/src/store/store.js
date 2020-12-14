import {createStore, applyMiddleware, compose,} from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/app.reducer'


let store = createStore(appReducer, compose(applyMiddleware(thunk)));
export default store;