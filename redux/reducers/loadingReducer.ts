import { LOADING_CHANGE } from '../constants';
import { LOCATION_CHANGE } from '../constants';


const initialState = {
    loading: false,
    currentUserLocation : {}
};


export const loadingReducer = (state = initialState, action :any) => {
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


export const currentUserloactionReducer = (state = initialState, action :any) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            return {
                ...state,
                loaction: action.payload
            };
        default:
            return state;
    }
}