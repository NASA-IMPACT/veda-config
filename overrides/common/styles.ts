import { Link, NavLink } from "$veda-ui/react-router-dom";
import styled from "$veda-ui/styled-components";

export const AccessibilityLink = styled(NavLink)`
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 3px solid #1565EF;
  }
  &:active {
    color: black;
  }
`;

export const AccessibilityMenuItem = styled(NavLink)`
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:focus {
    outline: 3px solid #1565EF;
  }
  &:active {
    color: black;
    text-decoration: underline;
  }
`;