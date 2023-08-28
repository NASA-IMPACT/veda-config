import React from "$veda-ui/react";
import Block from "$veda-ui-scripts/components/common/blocks";
import styled from "$veda-ui/styled-components";
import { glsp, themeVal, media } from "$veda-ui/@devseed-ui/theme-provider";
import Hug from "$veda-ui-scripts/styles/hug";
import { VarHeading } from "$veda-ui-scripts/styles/variable-components";
import { variableGlsp } from "$veda-ui-scripts/styles/variable-utils";

import Audience from "./audience";
import ValueProposition from "./value-proposition";
import Partners from "./partners";
const InfoCallout = styled(Hug)`
  background: ${themeVal("color.base-50")};
  box-shadow: inset 0 -1px 0 0 ${themeVal("color.base-100a")};
  padding: ${variableGlsp(2.5, 0)};
`;

const InfoCalloutInner = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: ${glsp(3)};
  grid-column: content-start / content-end;

  ${media.mediumUp`
    grid-column: content-2 /content-8;
    text-align: center;
  `}

  ${media.largeUp`
    grid-column: content-3 / content-11;
    gap: ${glsp(3)};
  `}
`;

const InfoCalloutHeadline = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${glsp()};
  align-items: center;

  p {
    font-size: 1rem;

    ${media.mediumUp`
      font-size: 1.25rem;
    `}
  }
`;

export default function HomeComponent() {
  return (
    <>
      <Block>
        <ContentBlockProse>
          <h2>Welcome</h2>
          
          <Partners />

          <p>
            The U.S. GHG Center is a one-stop data and analysis system for
            exploring and analyzing U.S. government and other curated datasets.
            Three primary demonstration areas are used to organize and introduce
            the data included in the center for this release.
          </p>
        </ContentBlockProse>
      </Block>
      <Audience />
      <ValueProposition />
      <InfoCallout>
        <InfoCalloutInner>
          <InfoCalloutHeadline>
            <VarHeading size="xlarge">
              Joining forces for a better future
            </VarHeading>
            <p>
              The U.S. Greenhouse Gas Center is a multi-agency effort to extend
              accessible and integrated GHG data and modeling capabilities from
              the U.S government and non-public sources for scalable impact. We
              are grateful for the support and expertise of our valued partners,
              including NASA, NIST, NOAA, and EPA.
            </p>
          </InfoCalloutHeadline>
          <Partners variation="positive" />
          <Button
            forwardedAs={NavLink}
            to="/about"
            size="large"
            variation="primary-outline"
          >
            Learn More <CollecticonArrowRight />
          </Button>
        </InfoCalloutInner>
      </InfoCallout>
    </>
  );
}
