import { actionTypes } from '../actions';

/**
 * @function successReducer
 * @param { arary } state - Array of guessed words.
 * @param { object } action - action to be reduced
 * @returns { boolean } - new sucess state
 */

export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};
