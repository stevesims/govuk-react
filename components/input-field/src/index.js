// https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

import React from 'react';
import PropTypes from 'prop-types';
import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';
import Input from '@govuk-react/input';
import { withWhiteSpace } from '@govuk-react/hoc';

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <InputField name="group0">National Insurance number</InputField>
 * ```
 *
 * Input with hint text
 * ```jsx
 * <InputField
 *    name="group1"
 *    hint={[
 *      'It’s on your National Insurance card, benefit letter, payslip or P60.',
 *      <br />,
 *      'For example, ‘QQ 12 34 56 C’.',
 *    ]}
 *  >
 *    National Insurance number
 *  </InputField>
 * ```
 *
 * Input with hint text & error
 * ```jsx
 *  const meta = {
 *    touched: true,
 *    error: 'Example',
 *  };
 *
 *  <InputField
 *    name="group1"
 *    hint={[
 *      'It’s on your National Insurance card, benefit letter, payslip or P60.',
 *      <br />,
 *      'For example, ‘QQ 12 34 56 C’.',
 *    ]}
 *    meta={meta}
 *  >
 *    National Insurance number
 *  </InputField>
 * ```
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
 * - https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss
 */
const InputField = ({
  meta, children, hint, input, ...props
}) => (
  <Label {...props} error={meta.touched && meta.error}>
    <LabelText>{children}</LabelText>
    {hint && <HintText>{hint}</HintText>}
    {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    <Input error={meta.touched && meta.error} {...input} />
  </Label>
);

InputField.defaultProps = {
  hint: null,
  input: {},
  meta: {},
};

InputField.propTypes = {
  hint: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.any,
  }),
  meta: PropTypes.shape({
    active: PropTypes.bool,
    dirty: PropTypes.bool,
    dirtySinceLastSubmit: PropTypes.bool,
    error: PropTypes.any,
    initial: PropTypes.bool,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    submitError: PropTypes.any,
    submitFailed: PropTypes.bool,
    submitSucceeded: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    visited: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
};

export default withWhiteSpace({ marginBottom: 0 })(InputField);
