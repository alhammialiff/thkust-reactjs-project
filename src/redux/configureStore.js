import  { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

// Create a function to configure and deploy store
export const ConfigureStore = () => {
    
    const store = createStore(
      Reducer,
      initialState  
    );
    
    return store;

}
