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
import { ArrowLink } from "./arrow-link";

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
  grid-column: content-start / content-end;

  ${media.mediumUp`
    grid-column: content-2 / content-8;
  `}

  ${media.largeUp`
    grid-column: content-3 / content-11;
  `}

  p {
    font-size: 1.25rem;
  }
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
          <VarHeading size="xxlarge">Welcome</VarHeading>
          <p>
            The U.S. Greenhouse Gas Center opens up access to trusted,
            authoritative data. This multi-agency effort consolidates greenhouse
            gas information from observations and models. The goal of the US GHG
            Center is providing decision-makers with one stop for data and
            analysis.
          </p>
          <p>
            This initial two-year demonstration phase creates a way to explore
            and analyze U.S. government and other datasets. The US GHG Center
            also encourages stakeholder feedback and ideas for future expansion.
          </p>
          <ArrowLink to="/stories/intro-us-ghg-center">
            Introduction to the U.S. GHG Center
          </ArrowLink>
        </IntroHeadline>
        <Keypoints />
        <ActionsBlock>
          <Button
            forwardedAs={NavLink}
            to="/data-catalog"
            size="xlarge"
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
              The US GHG Center is grateful for the support and expertise of our
              valued, multi-agency collaborators: EPA, NASA, NIST, and NOAA.
            </p>
          </InfoCalloutHeadline>
          <Partners variation="positive" />
          <Button
            forwardedAs={NavLink}
            to="/about"
            size="xlarge"
            variation="primary-outline"
          >
            Learn More <CollecticonArrowRight />
          </Button>
        </InfoCalloutInner>
      </InfoCallout>
    </>
  );
}
