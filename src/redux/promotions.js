// import { PROMOTIONS } from '../shared/promotions';
import * as ActionTypes from './ActionTypes';


export const Promotions = (state = {
    isLoading: false,
    errMess: null,
    promotion: []
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_PROMOS:
            // Return previous state plus new state
            return { ...state, isLoading: false, errMess: null, promotions: action.payload }
        case ActionTypes.PROMOS_LOADING:
            // Return previous state plus new state
            return { ...state, isLoading: true, errMess: null, promotions: [] }
        case ActionTypes.PROMOS_FAILED:
            // Return previous state plus new state
            return { ...state, isLoading: false, errMess: action.payload, promotions: [] }
        default:
            return state
    }

}