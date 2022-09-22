// Redux Action Scripts

// Importing all export const as ActionTypes
import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';


// Redux Action Object - addComment
// Returning a JS Object, in which an action has to be
// An Arrow Function can have ({}) - this is to return an object
export const addComment = (comment) => ({

    type: ActionTypes.ADD_COMMENT,
    payload: comment

});

// [COMMENT ACTIONS]
export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }

    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {

            if (response.ok) {
                console.log('Post comment OK: ', response);
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
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log('Post comment ', error.message);
            alert('Your comments could not be posted:', error.message);
        });

}

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
    type: ActionTypes.PROMOS_LOADING
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

// [LEADERS ACTIONS]

// What actions would I need to define leaders-related data?
// 1. leadersLoading
// 2. leadersFailed
// 3. addLeaders
// 4. fetchLeaders

export const fetchLeaders = () => (dispatch) => {

    // Load leaders
    dispatch(leadersLoading(true));

    // Fetch
    return fetch(baseUrl + 'leaders')
        .then(response => {
            // if response is good return response
            if (response.ok) {
                return response;

                // else throw error
            } else {
                var error = new Error('Error ' + response.status + ": " + response.text);
                error.response = response;
                throw error;
            }

        }, error => {
            // throw error
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)));

}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders

});

// [FEEDBACK ACTION]
export const addFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
})

export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {

    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    }

    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                console.log('Feedback OK');
                return response
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                console.log('Feedback Error');
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                console.log('No response from server');
                throw errmess;
            })
        .then(response => response.json())
        .then(response=> {
            dispatch(addFeedback(response))
            alert("Thank you for your feedback! " + JSON.stringify(response));
        })
        .catch(error => {
            console.log('Post comment ', error.message);
            alert('Your feedback could not be submitted: ', error.message)
        })



}
