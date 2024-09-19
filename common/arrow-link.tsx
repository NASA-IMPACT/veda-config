import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { glsp, themeVal } from "$veda-ui/@devseed-ui/theme-provider";
import { CollecticonArrowRight } from "$veda-ui/@devseed-ui/collecticons";
import { AccessibilityLink } from "../overrides/common/styles";

const ArrowLinkCmp = styled(AccessibilityLink)`
  display: flex;
  align-items: center;
  gap: ${glsp(0.5)};
  color: ${themeVal("color.link")};
  pointer-events: all;
  width: fit-content;
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
