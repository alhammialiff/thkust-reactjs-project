
import { DISHES } from '../shared/dishes';

// The kwargs simply refers to - if the state is undefined, return DISHES, the default state
export const Dishes = (state = DISHES, action) => {
    
    switch(action.type){
        default:
            return state;
    }

}