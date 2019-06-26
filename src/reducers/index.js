import { combineReducers } from 'redux';
import successReducer from './successReducer';
import gussedWordsReducer from './gussedWordsReducer';
import secretWordReducer from './secretWordReducer';

export default combineReducers({
  success: successReducer,
  guessedWords: gussedWordsReducer,
  secretWord: secretWordReducer
});
