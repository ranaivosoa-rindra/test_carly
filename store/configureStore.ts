import {combineReducers } from 'redux';
import { legacy_createStore as createStore } from "redux";
import {loadingReducer, currentUserloactionReducer} from '../redux/reducers/loadingReducer'


const rootReducer = combineReducers(
    { loading: loadingReducer ,location: currentUserloactionReducer }
);

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;