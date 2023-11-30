import { NavLink } from "$veda-ui/react-router-dom";
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