/**
 * @method getLetterMatchCount
 * @param  {string} guessedWord - Guessed Word
 * @param  {string} secretWord - Secret Word
 * @returns {number} = Number of letter matched between guessed word and secret word
 */

export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetters = secretWord.split('');
  const guessedLetterSet = new Set(guessedWord.split(''));
  return secretLetters.filter(letter => guessedLetterSet.has(letter)).length;
};
