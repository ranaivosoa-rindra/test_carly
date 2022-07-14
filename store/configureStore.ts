import { legacy_createStore as createStore, combineReducers} from 'redux';
import {loadingReducer, locationSettingReducer, currentUserlocationReducer} from '../redux/reducers/reducer';
 

const rootReducer = combineReducers({
  loading: loadingReducer,
  location_setting: locationSettingReducer,
  currentUserLocation : currentUserlocationReducer
});
 

export const store = createStore(rootReducer);