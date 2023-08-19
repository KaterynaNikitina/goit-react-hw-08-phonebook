import React from 'react';
import { Div, Span } from './Greeting.styled';
import { StyledNavLink } from 'components/Navigation/Navigation.styled';
import { selectAuthentificated } from 'redux/selectors';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const { isLoggedIn } = useSelector(selectAuthentificated);
  return (
    <Div>
      <h1>
        Welcome to the <Span>PHONEBOOK</Span>
      </h1>

      {!isLoggedIn && (
        <>
          <h2>
            <StyledNavLink to="/register" className="text-info">
              <Span>Sign Up</Span>
            </StyledNavLink>
            or
            <StyledNavLink to="/login" className="text-info">
              <Span>Log In</Span>
            </StyledNavLink>
            to get started.
          </h2>
        </>
      )}
    </Div>
  );
};

export default Greeting;
