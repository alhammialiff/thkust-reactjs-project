// Redux Action Scripts

// Importing all export const as ActionTypes
import * as ActionTypes from './ActionTypes';

// Redux Action Object - addComment
// Returning a JS Object, in which an action has to be
// An Arrow Function can have ({}) - this is to return an object
export const addComment =  (dishId, rating, author, comment) =>({
    
    type: ActionTypes.ADD_COMMENT,
    payload: {

        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment

    }

});