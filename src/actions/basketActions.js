/* Redux actions */

export const ADD_TO_ORDER = 'ADD_TO_ORDER';

export const addToOrder = item => ({
  type: ADD_TO_ORDER,
  payload: { item },
});
    