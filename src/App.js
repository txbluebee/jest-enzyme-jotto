import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import { getSecretWord } from './actions';

const mapState = ({ success, secretWord, guessedWords }) => ({
  success,
  secretWord,
  guessedWords
});

class App extends React.Component {
  render() {
    const { success, guessedWords } = this.props;
    return (
      <div className='container'>
        <h1>Jotto</h1>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

export default connect(
  mapState,
  { getSecretWord }
)(App);
