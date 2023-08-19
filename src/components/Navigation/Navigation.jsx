import React from 'react';
import UserMenu from 'components/UserMenu/UserMenu';
import {
  Div,
  Header,
  StyledNavLink,
} from 'components/Navigation/Navigation.styled';

import { useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/selectors';

const Navigation = () => {
  const authentificated = useSelector(selectAuthentificated);

  return (
    <Header>
      <nav>
        {!authentificated ? (
          <Div>
            <div>
              <StyledNavLink to="/">Home</StyledNavLink>
            </div>
            <div>
              <StyledNavLink to="/register">Sign Up</StyledNavLink>
              <StyledNavLink to="/login">Log In</StyledNavLink>
            </div>
          </Div>
        ) : (
          <Div>
            <div>
              <StyledNavLink to="/">Home</StyledNavLink>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            </div>
            <Div>
              <UserMenu />
            </Div>
          </Div>
        )}
      </nav>
    </Header>
  );
};

export default Navigation;
