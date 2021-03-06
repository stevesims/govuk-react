// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

import React from 'react';
import styled from 'react-emotion';
import { BREAKPOINTS, MEDIA_QUERIES, SPACING } from '@govuk-react/constants';

const StyledLayout = styled('div')({
  padding: SPACING.SCALE_2,
  minWidth: BREAKPOINTS.SMALLSCREEN,
  boxSizing: 'border-box',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const Layout = props => <StyledLayout {...props} />;

export default Layout;
