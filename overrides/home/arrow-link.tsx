import React from "$veda-ui/react";
import { NavLink } from "$veda-ui/react-router-dom";
import styled from "$veda-ui/styled-components";
import { glsp, themeVal } from "$veda-ui/@devseed-ui/theme-provider";
import { CollecticonArrowRight } from "$veda-ui/@devseed-ui/collecticons";

const ArrowLinkCmp = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${glsp(0.5)};
  color: ${themeVal("color.link")};
  text-decoration: none;
  pointer-events: all;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export function ArrowLink(props) {
  const { children, ...rest } = props;

  return (
    <ArrowLinkCmp {...rest}>
      <CollecticonArrowRight />
      {children}
    </ArrowLinkCmp>
  );
}
