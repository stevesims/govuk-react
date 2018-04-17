// References:
// https://govuk-elements.herokuapp.com/buttons/
//
// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/design-patterns/_buttons.scss
// https://github.com/alphagov/govuk-frontend/blob/master/src/components/button/_button.scss
// https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_buttons.scss

import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';
import { withWhiteSpace } from '@govuk-react/hoc';
import { NTA_LIGHT } from '@govuk-react/constants';
import {
  BUTTON_COLOUR,
  BUTTON_COLOUR_DARKEN_15,
  WHITE,
  YELLOW,
} from 'govuk-colours';

// TODO should be using constants for some of the below values
const GButton = glamorous.button(
  {
    backgroundColor: BUTTON_COLOUR,
    border: 'none',
    boxShadow: `0 2px 0 ${BUTTON_COLOUR_DARKEN_15}`,
    color: WHITE,
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: NTA_LIGHT,
    fontWeight: 400,
    fontSize: '1em',
    lineHeight: '1.25',
    outlineOffset: '-1px',
    outline: '1px solid transparent',
    padding: '.526315em .789473em .263157em',
    textDecoration: 'none',
    WebkitAppearance: 'none',
    WebkitFontSmoothing: 'antialiased',
    '[disabled]': {
      opacity: '.5',
      pointerEvents: 'none',
    },
    ':focus': {
      outline: `3px solid ${YELLOW}`,
    },
  },
  ({ start }) => ({
    fontWeight: start ? '700' : undefined,
    fontSize: start ? '24px' : undefined,
    lineHeight: start ? '1.25' : undefined,
    padding: start ? '0.36842em 0.84211em 0.21053em' : undefined,
  }),
  ({ iconUrl }) => ({
    backgroundImage: iconUrl ? `url( ${iconUrl})` : undefined,
    backgroundRepeat: iconUrl ? 'no-repeat' : undefined,
    backgroundPosition: iconUrl ? '100% 50%' : undefined,
    paddingRight: iconUrl ? '2.15789em' : undefined,
  }),
);

// TODO: start and iconUrl props
const Button = ({ className, ...props }) => <GButton className={className} {...props} />;

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  className: undefined,
  children: 'Button',
};

export default withWhiteSpace({ marginBottom: 4 })(Button);