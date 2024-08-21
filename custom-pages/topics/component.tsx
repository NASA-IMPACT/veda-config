import React from "$veda-ui/react";

import {
  Card,
  CardHeader,
  CardMedia,
  CardFooter,
  CardBody,
  Link
} from '$veda-ui/@trussworks/react-uswds';

import Keypoints from "../../common/keypoints";
import { focusAreasSansDatasets } from "../../common/constants";
import { FitContainer, P, SectionContainer, Title } from "../../common/styled-components";

import './UrbanEmissionsSpotlight.css';

export default function HomeComponent() {  
  return (
    <FitContainer>
      <SectionContainer>
        <Title>Content Collections by Topic</Title>
        <div className="spotlight-container">
        <img 
          src="https://nicholas.duke.edu/sites/default/files/styles/banner/public/images/Urban%20Environment.jpg" 
          alt="Urban Emissions" 
          className="spotlight-image" 
        />
        <div className="spotlight-text">
          <h2>Spotlight: Urban Emissions</h2>
          <p>
            Globally, cities are responsible for more than 70% of greenhouse gas emissions. Cities have the power to reduce emissions using policies that benefit the health of their citizens. The U.S. Greenhouse Gas Center welcomes a new set of tools aimed at supporting city decisionmakers.
          </p>
          <button className="explore-button"><a className="link" href="/stories/urban">Explore the Collection</a></button>
        </div>
        </div>

        <Card className="usa-card--flag" layout="flagDefault" headerFirst gridLayout={{
          tablet: {
            col: 12
          }
        }}>
          <CardHeader>
            <h3 className="usa-card__heading">I hereunto append the result</h3>
          </CardHeader>
          <CardMedia exdent>
            <img src={"https://nicholas.duke.edu/sites/default/files/styles/banner/public/images/Urban%20Environment.jpg"} alt="" />
          </CardMedia>
          <CardBody>
            <p>
              He roused up and gave me good-day. I told him a friend of mine had
              commissioned me to make some inquiries about a cherished companion of
              his boyhood named Leonidas W. Smiley.
            </p>
          </CardBody>
          <CardFooter>
            <Link href={'#'} variant="unstyled" className="usa-button" allowSpacebarActivation>
              Make some inquiries
            </Link>
          </CardFooter>
        </Card>
      </SectionContainer>

      <SectionContainer>
        <Title>Core Science Focus Areas</Title>
        <P>The GHG Center includes three core science focus areas. How to get involved? For the latest, subscribe to our email newsletter.</P>
        <Keypoints data={focusAreasSansDatasets} />
      </SectionContainer>

    </FitContainer>
  );
}
