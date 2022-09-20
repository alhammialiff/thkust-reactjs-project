// Redux Action Scripts

// Importing all export const as ActionTypes
import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';


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

// [DISHES ACTION TYPES]
// Thunk function - This is a Thunk as it contains an inner function returning dispatch()
export const fetchDishes = () => (dispatch) => {

    // First, Thunk function dispatches dishesLoading
    dispatch(dishesLoading(true));

    // [Commented] To simulate fetching from server
    // setTimeout(() => {
    //     // Second, Thunk function dispatches addDishes(DISHES) after two secs
    //     dispatch(addDishes(DISHES));
    // }, 2000);

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                // Handling response from server that may be an error
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            // Handling error if no response from the server at all 
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));

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

// [COMMENT ACTION TYPES]
// Thunk function - This is a Thunk as it contains an inner function returning dispatch()
export const fetchComments = () => (dispatch) => {

    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                // Handling response from server that may be an error
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            // Handling error if no response from the server at all 
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));

}

// Function meaning - Tell users comments failed to load
export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

// Function meaning - Returns comments to be added
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

// [PROMO ACTION TYPES]
// Thunk function - This is a Thunk as it contains an inner function returning dispatch()
export const fetchPromos = () => (dispatch) => {

    // First, Thunk function dispatches promosLoading
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                // Handling response from server that may be an error
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            // Handling error if no response from the server at all 
            error => {
                var errmess = new Error(error.message);
                throw errmess;
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));

}

// Function meaning - Tell users promos are loading and wait till it is loaded
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING,
});

// Function meaning - Tell users promos failed to load
export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

// Function meaning - Returns promos to be added
export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});


