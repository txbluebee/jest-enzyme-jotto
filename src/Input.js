import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

const mapState = ({ success }) => ({ success });

export class UnconnectedInput extends Component {
  /**
   * Create ref for input box
   * @method
   * @param  {object} props - Component props
   * @returns {undefined}
   */
  constructor(props) {
    super(props);
    this.inputBox = React.createRef();
  }

  submitGuessedWord = e => {
    e.preventDefault();
    const guessedWord = this.inputBox.current.value;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
  };

  renderContent = () => {
    return this.props.success ? null : (
      <form className='form-inline'>
        <input
          className='mb-2 mx-sm-3'
          id='text'
          ref={this.inputBox}
          placeholder='enter guess'
          data-test='input-box'
        />
        <button
          type='submit'
          className='btn btn-primary mb-2'
          data-test='submit-button'
          onClick={this.submitGuessedWord}
        >
          Submit
        </button>
      </form>
    );
  };

  /**
   * @method render
   * @returns {JSX.Element} - Rendered component
   */
  render() {
    return <div data-test='component-input'>{this.renderContent()}</div>;
  }
}

export default connect(
  mapState,
  { guessWord }
)(UnconnectedInput);
