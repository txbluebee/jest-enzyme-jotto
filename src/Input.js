import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

const mapState = ({ success }) => ({ success });

class Input extends Component {
  renderContent = () => {
    return this.props.success ? null : (
      <form className='form-inline'>
        <input
          className='mb-2 mx-sm-3'
          id='text'
          placeholder='enter guess'
          data-test='input-box'
        />
        <button
          type='submit'
          className='btn btn-primary mb-2'
          data-test='submit-button'
        >
          Submit
        </button>
      </form>
    );
  };

  render() {
    return <div data-test='component-input'>{this.renderContent()}</div>;
  }
}

export default connect(
  mapState,
  { guessWord }
)(Input);
