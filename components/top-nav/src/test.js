import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import CrownIcon from '@govuk-react/icon-crown';

import TopNav, { asAnchor, LogoAnchor, NavLinkAnchor } from './';

const emptyNode = [];
const nullNode = null;
const Anchor = asAnchor('a');
const wrapper = <TopNav company="example" search="example" serviceTitle="example">example</TopNav>;
const wrapperMultiple = (
  <TopNav active={1}>
    <Anchor href="/section">Section 1</Anchor>
    <Anchor href="/section">Section 1</Anchor>
  </TopNav>
);

const wrapperLogoAnchor = (
  <TopNav>
    <LogoAnchor href="/logo-link">Logo link</LogoAnchor>
  </TopNav>
);

const wrapperNavLinkAnchor = (
  <TopNav>
    <NavLinkAnchor href="/nav-link">Nav link</NavLinkAnchor>
  </TopNav>
);

const wrapperEmptyNode = (
  <TopNav>
    <Anchor href="/section">Section 1</Anchor>
    {emptyNode}
    {nullNode}
    example
  </TopNav>
);

const WrapperLogoAnchor = mount(wrapperLogoAnchor);
const WrapperNavLinkAnchor = mount(wrapperNavLinkAnchor);
const WrapperMultiple = mount(wrapperMultiple);

describe(TopNav, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('should render an unordered list without ghost/duff children', () => {
    expect(mount(wrapperEmptyNode).find('ul li')).toHaveLength(2);
  });

  it('matches the <TopNav> with multiple <Anchor> tags snapshot', () => {
    expect(WrapperMultiple).toMatchSnapshot('enzyme.mount');
  });

  it('matches the props passed to the list of Anchor tags', () => {
    WrapperMultiple.find(Anchor).forEach((anchor) => {
      expect(anchor.props().href).toEqual('/section');
      expect(anchor.props().children).toEqual('Section 1');
    });
  });

  it('matches the <TopNav> with a <LogoAnchor> tag snapshot', () => {
    expect(WrapperLogoAnchor).toMatchSnapshot('enzyme.mount');
  });

  it('matches the props passed to LogoAnchor', () => {
    expect(WrapperLogoAnchor.find(LogoAnchor).props().href).toEqual('/logo-link');
    expect(WrapperLogoAnchor.find(LogoAnchor).props().children).toEqual('Logo link');
  });

  it('matches the <TopNav> with a <NavLinkAnchor> tag snapshot', () => {
    expect(WrapperNavLinkAnchor).toMatchSnapshot('enzyme.mount');
  });

  it('matches the props passed to NavLinkAnchor', () => {
    expect(WrapperNavLinkAnchor.find(NavLinkAnchor).props().href).toEqual('/nav-link');
    expect(WrapperNavLinkAnchor.find(NavLinkAnchor).props().children).toEqual('Nav link');
  });

  it('with icon title', () => {
    expect(mount(<TopNav company={
      <TopNav.IconTitle
        icon={<CrownIcon width="36" height="32" />}
      >
        GOV.UK
      </TopNav.IconTitle>}
    />)).toMatchSnapshot('icon title');
  });
});
