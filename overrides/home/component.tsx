import React from "$veda-ui/react";
import { NavLink } from "$veda-ui/react-router-dom";
import styled from "$veda-ui/styled-components";
import { glsp, themeVal, media } from "$veda-ui/@devseed-ui/theme-provider";
import { Button } from "$veda-ui/@devseed-ui/button";
import { CollecticonArrowRight } from "$veda-ui/@devseed-ui/collecticons";
import Hug from "$veda-ui-scripts/styles/hug";
import { VarHeading } from "$veda-ui-scripts/styles/variable-components";
import { variableGlsp } from "$veda-ui-scripts/styles/variable-utils";

import Partners from "./partners";
import Keypoints from "./keypoints";

const HomeContent = styled(Hug)`
  padding: ${variableGlsp(2.5, 0)};
  grid-row-gap: ${variableGlsp(2)};

  ${media.mediumUp`
    grid-row-gap: ${variableGlsp(3)};
  `}
`;

const IntroHeadline = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${glsp(2)};
  align-items: center;
  grid-column: content-start / content-end;

  p {
    font-size: 1.25rem;
  }

  ${media.mediumUp`
    grid-column: content-start /content-7;
  `}

  ${media.largeUp`
    grid-column: content-start / content-9;
  `}
`;

const ActionsBlock = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
`;

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
      <HomeContent>
        <IntroHeadline>
          <VarHeading size="xxlarge">
            Start exploring scientist-curated GHG datasets on a map environment
          </VarHeading>
          <p>
            The U.S. GHG Center is a one-stop data and analysis system for
            exploring and analyzing U.S. government and other curated datasets.
            Three primary demonstration areas are used to organize and introduce
            the data included in the center for this release.
          </p>
        </IntroHeadline>
        <Keypoints />
        <ActionsBlock>
          <Button
            forwardedAs={NavLink}
            to="/data-catalog"
            size="large"
            variation="primary-fill"
          >
            Browse the Data Catalog <CollecticonArrowRight />
          </Button>
        </ActionsBlock>
      </HomeContent>
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
