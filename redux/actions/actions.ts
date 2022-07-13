import { LOADING_CHANGE } from '../constants';
import { LOCATION_CHANGE } from '../constants';


export function changeLoading(loading : any) {
    console.log(loading);
    
    return {
        type: LOADING_CHANGE,
        payload: loading
    }
}

export function changeUserLocation(location : any) {
    return {
        type: LOCATION_CHANGE,
        payload: location
    }
}