import  { createStore, combineReducers } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

// Create a function to configure and deploy store
export const ConfigureStore = () => {
    
    const store = createStore(
      // Reducer,
      // initialState
      combineReducers({
        dishes: Dishes,
        comments: Comments,
        promotions: Promotions,
        leaders: Leaders
      })  
    );
    
    return store;

}
