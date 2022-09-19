// Dishes reducer

import * as ActionTypes from './ActionTypes';

// The kwargs simply refers to - if the state is undefined, return DISHES, the default state
export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes: []
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            // Return previous state plus new state
            return {...state, isLoading: false, errMess: null, dishes: action.payload}
        case ActionTypes.DISHES_LOADING:
            // Return previous state plus new state
            return {...state, isLoading: true, errMess: null, dishes: []}
        case ActionTypes.DISHES_FAILED:
            // Return previous state plus new state
            return {...state, isLoading: false, errMess: action.payload, dishes: []}
        default:
            return state;
    }

}