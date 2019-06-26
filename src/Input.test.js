import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

/**
 * Factory function to create a ShallowWrapper for the Input Component
 * @function setup
 * @param  {object} initialState - Intial State for the setup
 * @returns {ShallowWrapper}
 */

const setup = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Input store={store}/>).dive().dive();
  console.log(wrapper.debug())
}

setup();

describe('render', () => {
  describe('word has not been gussed', () => {
    test('renders component without error', () => {});
    test('rennders input box', () => {});
    test('renders submit button', () => {});
  });

  describe('word has been gussed', () => {
    test('renders component without error', () => {});
    test('does not rennder input box', () => {});
    test('does not render submit button', () => {});
  });
});

describe('update state', () => {});
