//Redux Reducer - Comment

// import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

// This is where actions are received and acted upon
// 'action' = incoming action
export const Comments = (state = {
    errMess: null,
    comments: []
}, action) => {

    // Switch case for each action types
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            // Return previous state plus new state
            return { ...state, isLoading: false, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            // comment.id = comment.dishId;
            comment.date = new Date().toISOString();
            // Concat pushes a new element to that 
            // array but new object is created
            console.log("Comment: ", comment)
            return {...state, comments: state.comments.concat(comment)};

        default:
            return state
    }

}