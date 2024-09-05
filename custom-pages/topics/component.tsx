import React from "$veda-ui/react";
import { Link } from '$veda-ui/react-router-dom';
import {
  Card, 
  CardHeader,
  CardBody,
  CardMedia,
  CardGroup,
  GridContainer
} from '$veda-ui/@trussworks/react-uswds';

import { focusAreasStories } from "../../common/constants";
import { Title } from "../../common/styled-components";

import Keypoints from "../../common/keypoints";

import '../../common/styles.scss';
import './topics.scss';

export default function HomeComponent() {  
  return (
    <div className="hug-reset-container margin-bottom-8">
      <GridContainer containerSize="widescreen">
          <Title>Content Collections by Topic</Title>
        <CardGroup>
          <Card layout="flagDefault" gridLayout={{tablet: {col: 10}, col: 12}} containerProps={{className:'border-0 position-relative card-shadow__hover'}}>
            <CardMedia exdent>
              <img src={"https://nicholas.duke.edu/sites/default/files/styles/banner/public/images/Urban%20Environment.jpg"} alt="urban image" />
            </CardMedia>

            <CardHeader>
              <h3 className="usa-card__heading margin-top-4">Spotlight: Urban Emissions</h3>
            </CardHeader>
            <CardBody>
              <p className="padding-bottom-2 margin-bottom-4">
                Globally, cities are resp consible for more than 70% of greenhouse gas emissions. Cities have the power to reduce emissions using policies that benefit the health of their citizens. The U.S. Greenhouse Gas Center welcomes a new set of tools aimed at supporting city decisionmakers.
              </p>
            </CardBody>
            <Link className="position-absolute top-0 left-0 width-full height-full blocklink" to="/stories/urban" />
          </Card>
          </CardGroup>
      
        <section>
          <Title>Core Science Focus Areas</Title>
          <p className="margin-top-2 font-sans-md margin-bottom-2">The GHG Center includes three core science focus areas. How to get involved? For the latest, subscribe to our email newsletter.</p>
          <Keypoints data={focusAreasStories} />
        </section>

        <section>
          <Title>What Else Do You Need? Let Us Help You!</Title>
          <p className="margin-top-2 font-sans-md margin-bottom-2">Do you have a need, idea, or suggestion? Contact the GHG Center team using the “Contact Us” button at the top or bottom of every page.</p>
        </section>
      </GridContainer>
    </div>
  );
}
