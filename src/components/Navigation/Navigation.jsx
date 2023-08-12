import React from 'react';
import UserMenu from 'components/UserMenu/UserMenu';
import { StyledNavLink } from 'components/Navigation/Navigation.styled';

import { useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/selectors';

const Navigation = () => {
 
  const authentificated = useSelector(selectAuthentificated);

  return (
    <div>
      <nav>
        {!authentificated ? (
          <>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/register">Sign Up</StyledNavLink>
            <StyledNavLink to="/login">Log In</StyledNavLink>
          </>
        ) : (
          <>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            <UserMenu />
          </>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
