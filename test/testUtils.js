import checkPropTypes from 'check-prop-types'
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../src/reducers'
import { middlewares } from '../src/configureStore'

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer, middlewares
 * @function storeFactory
 * @param  {object} initialState
 * @returns {Store} - Reudx Store
 */

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState)
}

/*
 * Return node(s) with the given data-test attribute.
 * @params{ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @params{string} val - value of data-test attribute for seatch
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingPorps) => {
  const propError = checkPropTypes(component.propTypes, conformingPorps, 'prop', component.name);
  expect(propError).toBeUndefined();
}