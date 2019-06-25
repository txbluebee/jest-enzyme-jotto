/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from 'check-prop-types'

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