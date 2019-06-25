import React from 'react';
import PropTypes from 'prop-types';

const GuessWords = ({ guessedWords }) => {
  let contents;
  if (guessedWords.length === 0) {
    contents = (
      <span data-test='guess-instructions'>Try to guess the secret word</span>
    );
  }

  return <div data-test='component-guessed-words'>{contents}</div>;
};

GuessWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessWords;
