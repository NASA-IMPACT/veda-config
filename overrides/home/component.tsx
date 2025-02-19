import React from "$veda-ui/react";
import { NavLink } from "$veda-ui/react-router-dom";
import styled from "$veda-ui/styled-components";
import { glsp, themeVal, media } from "$veda-ui/@devseed-ui/theme-provider";
import { Button } from "$veda-ui/@devseed-ui/button";
import {
  CollecticonArrowRight,
  CollecticonEnvelope,
  CollecticonSpeechBalloon,
} from "$veda-ui/@devseed-ui/collecticons";
import Hug from "$veda-ui-scripts/styles/hug";
import { VarHeading } from "$veda-ui-scripts/styles/variable-components";
import { variableGlsp } from "$veda-ui-scripts/styles/variable-utils";

import {
  GridContainer,
  Grid,
} from '$veda-ui/@trussworks/react-uswds';


import Partners from "./partners";
import Banner from './banner';
import Carousel from './carousel/';


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

const Buttons = styled.div`
  display: flex;
  gap: ${glsp()};
  justify-content: center;
`;

export default function HomeComponent() {  
  return (
    <>
    <Banner />
      <GridContainer containerSize="widescreen">
        {/* <h1 className="font-heading-2xl margin-y-5 text-center">Explore the Latest Updates</h1> */}
        {/* <p className="margin-bottom-4"> Check out the featured content </p> */}        
        {/* <Carousel /> */}
        <Grid col={8} offset={2} className="font-heading-md margin-y-10">

          <h1 className="font-heading-2xl margin-y-6">Contact Us</h1>
          <p className="margin-bottom-4 font-size-md-deprecated">
          <div id="ember150">
            <div>
              <h2 className="margin-y-2">The Disasters Team</h2>
                <a href="https://appliedsciences.nasa.gov/what-we-do/disasters/inside-disasters#block-disastersteam">Disaster Response Coordination Team</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="https://appliedsciences.nasa.gov/what-we-do/disasters/disasters-response-coordination-system">Disasters Response Coordination System Activation Summaries</a>&nbsp;|&nbsp;<a href="mailto:hq-disasters-gis@mail.nasa.gov" rel="nofollow" >Contact Us</a></div>
              <br/>
              <div>
              <h2 className="margin-y-2">NASA Organizations</h2>
                <a href="http://www.nasa.gov/centers/hq/home/">NASA HQ</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <a href="http://appliedsciences.nasa.gov/">NASA Applied Sciences</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <a href="http://science.nasa.gov/earth-science/">NASA Earth Science</a>
            </div>
                

            </div>
          </p>
          {/* <Grid row>
            <Grid col='auto' className="display-flex flex-align-center margin-bottom-2">
              <CollecticonSpeechBalloon size='xlarge' color='#082a64' className="grid-col-auto" />
            </Grid>
            <Grid col='fill' className="display-flex flex-align-center margin-bottom-2">
              <span className="margin-left-4 font-size-md-deprecated"> If you are interested in exploring partnership opportunities with the US GHG Center, please <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeVWCrnca08Gt_qoWYjTo6gnj1BEGL4NCUC9VEiQnXA02gzVQ/viewform">reach out to our team</a>.</span>
            </Grid>
          </Grid>
          <Grid row>
            <Grid col='auto' className="display-flex flex-align-center margin-bottom-2">
              <CollecticonEnvelope size='xlarge' color='#082a64' className="grid-col-auto" />
            </Grid>
            <Grid col='fill' className="display-flex flex-align-center margin-bottom-2">
              <span className="margin-left-4 font-size-md-deprecated"> To get GHG Center updates delivered to your mailbox, <a href={SUBSCRIPTION_URL}>subscribe to the news and announcements list</a>.</span>
            </Grid>
          </Grid>
          <Buttons className="margin-top-4">
            <Button
              forwardedAs={NavLink}
              to="/about"
              size="xlarge"
              variation="primary-outline"
            >
                Learn More <CollecticonArrowRight />
            </Button>
          </Buttons> */}
        </Grid>
      </GridContainer>
      <ActionsBlock>
      </ActionsBlock>
      {/* <InfoCallout>
        <InfoCalloutInner>
          <InfoCalloutHeadline>
            <VarHeading size="xlarge">
              Joining forces for a better future
            </VarHeading>
            <p>
              The US GHG Center is grateful for the support and expertise of our
              valued, multi-agency collaborators: NASA, EPA, NIST, and NOAA.
            </p>
          </InfoCalloutHeadline>
          <Partners variation="positive" size="big" />
        </InfoCalloutInner>
      </InfoCallout> */}
    </>
  );
}
