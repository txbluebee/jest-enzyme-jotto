import { actionTypes } from '../actions';

/**
 * @function secretdWordReducer
 * @param  {string} state - State before reducer
 * @param  {object} action - Action send to reducer
 * @returns {string} - New State (secret word payload from action)
 */
export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};
