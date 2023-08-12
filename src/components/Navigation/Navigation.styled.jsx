import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
font-size: 22px;
padding: 10px 20px;
margin-right: 20px;
margin-top: 20px;
border-radius: 10px;
border: 1px solid rgba(0, 0, 0, 0.5);
background-color: blue;
text-decoration: none;
color: #fff;
display: inline-block;
cursor: pointer;
transition: all 0.3s;

&.active {
    background-color: lightblue;
    color: #2a2a2a;
    border-color: darkblue;
}
&:hover {
    color: grey;
}
`
