import { LOADING_CHANGE } from '../constants';
import { LOCATION_CHANGE } from '../constants';
import { LOCATION_SETTING } from '../constants';



const initialState = {
    loading: false,
    location_setting: false,
    currentUserLocation: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
    }
};


export const loadingReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOADING_CHANGE:
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
}


export const currentUserlocationReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            console.log(action.payload);
            return {
                ...state,
                currentUserLocation: action.payload
            };
        default:
            return state;
    }
}


export const locationSettingReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOCATION_SETTING:
            return {
                ...state,
                location_setting: action.payload
            };
        default:
            return state;
    }
}