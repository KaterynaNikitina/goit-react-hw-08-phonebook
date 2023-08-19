import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  /* margin-bottom: 16px; */
  border-bottom: 1px solid #2a363b;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 28px;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 20px;

  text-decoration: none;
  color: #2a2a2a;

  cursor: pointer;
  transition: all 0.3s;

  &.active {
    color: #159ff0;
  }
  &:hover {
    color: #b9b8b8;
  }
`;
