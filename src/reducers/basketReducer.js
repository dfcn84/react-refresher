/* Redux reducers */

import { ADD_TO_ORDER } from '../actions/basketActions';

export const basketReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_ORDER: {
      const { item } = payload;
      const newItem = item;
      return state.concat(newItem);
    }      
    default:
      return state;
  }
};