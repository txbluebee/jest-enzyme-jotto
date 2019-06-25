import React from 'react';

/**
 * Functional react component for congratulatory message
 * @function
 * @params {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` proo is false)
 */
const Congrats = ({ success }) => (
  <div data-test='component-congrats'>
    {success && (
      <span data-test='congrats-message'>
        Congratulations! You guessed the word!
      </span>
    )}
  </div>
);
export default Congrats;
