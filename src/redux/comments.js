//Redux Reducer - Comment

import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

// This is where actions are received and acted upon
// 'action' = incoming action
export const Comments = (state = COMMENTS, action) => {

    // Switch case for each action types
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            // comment.id = state.length;
            comment.id = comment.dishId;
            comment.date = new Date().toISOString();
            // Concat pushes a new element to that 
            // array but new object is created
            console.log("Comment: ", comment)
            return state.concat(comment);
        default:
            return state
    }

}