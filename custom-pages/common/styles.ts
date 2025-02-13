import { NavLink } from "$veda-ui/react-router-dom";
import styled, { css } from "$veda-ui/styled-components";

const MouseEventStyle = css`
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 3px solid #1565EF;
  }
  &:active {
    color: black;
  }
`

export const AccessibilityLink = styled(NavLink)`
  text-decoration: underline;
  ${MouseEventStyle}
`;

export const AccessibilityMenuItem = styled(NavLink)`
  text-decoration: none;
  ${MouseEventStyle}
  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: underline;
  }
`;
