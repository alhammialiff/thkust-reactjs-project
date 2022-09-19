import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

// Create a function to configure and deploy store
export const ConfigureStore = () => {

  const store = createStore(

    // initialState
    // CombineReducers object keys (i.e state.dishes) will be used in MainComponent MapStateToProps(state) 
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      // Importing like below automatically adds in the necessary reducer functions and state info into createStore
      ...createForms({
        feedback: InitialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  );

  return store;

}
