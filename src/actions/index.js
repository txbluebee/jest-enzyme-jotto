import axios from 'axios';

import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD'
};

/**
 * Return Reudx Thunk function that dispatches GUESS_WORK action
 *  and (conditionally ) CORRECT_GUESS action
 * @function guessWord
 * @param  {string} guessedWord - Guessed Word
 * @returns {function} - Redux Thunk function
 */
export const guessWord = guessedWord => (dispatch, getState) => {
  const secretWord = getState().secretWord;
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
  dispatch({
    type: actionTypes.GUESS_WORD,
    payload: { guessedWord, letterMatchCount }
  });
  if (guessedWord === secretWord) {
    dispatch({ type: actionTypes.CORRECT_GUESS });
  }
};


/**
 * Function that dispatches SET_SECRET_WORD action
 * @function getSecretWord
 * @returns {object} - Action object contains successful response from server
 */

export const getSecretWord = () => async dispatch => {
  const response = await axios.get('http://localhost:3030');
  dispatch({
    type: actionTypes.SET_SECRET_WORD,
    payload: response.data
  });
};
