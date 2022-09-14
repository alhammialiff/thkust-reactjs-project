// Redux Reducer is a pure function
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {

    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS

};

// Pure function is a function that returns a parameter (state) as is
export const Reducer = (state = initialState, action) => {
    return state;
};