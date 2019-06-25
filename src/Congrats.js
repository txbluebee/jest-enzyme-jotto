import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message
 * @function
 * @params {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` proo is false)
 */
const Congrats = ({ success }) => (
  <div data-test='component-congrats' className="alert alert-success">
    {success && (
      <span data-test='congrats-message'>
        Congratulations! You guessed the word!
      </span>
    )}
  </div>
);

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congrats;
