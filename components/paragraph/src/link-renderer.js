import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Anchor from './atoms/anchor';

// Support react-router links
// https://github.com/rexxars/react-markdown/issues/29#issuecomment-231556543
const LinkRenderer = ({ href, children }) => (
  href.match(/^\//)
    ? <Link to={href}>{children}</Link>
    : <Anchor href={href}>{children}</Anchor>
);

LinkRenderer.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string,
};

LinkRenderer.defaultProps = {
  href: '',
  children: '',
};

export default LinkRenderer;
