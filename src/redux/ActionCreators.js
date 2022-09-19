// Redux Action Scripts

// Importing all export const as ActionTypes
import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';


// Redux Action Object - addComment
// Returning a JS Object, in which an action has to be
// An Arrow Function can have ({}) - this is to return an object
export const addComment = (dishId, rating, author, comment) => ({

    type: ActionTypes.ADD_COMMENT,
    payload: {

        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment

    }

});

// Thunk function - This is a Thunk as it contains an inner function returning dispatch()
export const fetchDishes = () => (dispatch) => {

    // First, Thunk function dispatches dishesLoading
    dispatch(dishesLoading(true));

    setTimeout(() => {
        // Second, Thunk function dispatches addDishes(DISHES) after two secs
        dispatch(addDishes(DISHES));
    }, 2000);

}

// Function meaning - Tell users dishes are loading and wait till it is loaded
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING,
});

// Function meaning - Tell users dishes failed to load
export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

// Function meaning - Returns dishes to be added
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});