// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import { BREAKPOINTS, MEDIA_QUERIES, SPACING } from "../../constants/index";

const LayoutInner = glamorous.div({
  padding: SPACING.SCALE_2,
  minWidth: BREAKPOINTS.SMALLSCREEN,
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

const Layout = ({ children }) => <LayoutInner>{children}</LayoutInner>;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
