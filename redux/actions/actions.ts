import { LOADING_CHANGE } from '../constants';
import { LOCATION_CHANGE } from '../constants';
import { LOCATION_SETTING} from '../constants'

export function changeLoading(loading : any) {  
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

export function changeLocationSetting(location_setting : any) {  
    return {
        type: LOCATION_SETTING,
        payload: location_setting
    }
}