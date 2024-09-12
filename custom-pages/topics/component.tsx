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
              <img src={new URL('./media/1-maia-los-angeles-1041.png', import.meta.url).href} alt="los angeles skyline" />
            </CardMedia>

            <CardHeader>
              <h3 className="usa-card__heading margin-top-4">Urban Emissions</h3>
            </CardHeader>
            <CardBody>
              <p className="padding-bottom-2 margin-bottom-4">
              Cities and metropolitan regions, where most of the world's population live, are responsible for approximately 70% of greenhouse gas emissions. Researchers are making rapid advances in urban emissions measurement and modeling to provide robust, accurate, and reliable emissions estimates at fine scales. The U.S. Greenhouse Gas Center offers an introduction to new urban-relevant datasets and highlights innovative emissions research in cities across the country.
              </p>
            </CardBody>
            <Link className="position-absolute top-0 left-0 width-full height-full blocklink" to="/stories/urban" />
          </Card>
          </CardGroup>
      
        <section>
          <Title>Core Science Focus Areas</Title>
          <p className="margin-top-2 font-sans-md margin-bottom-2">The U.S. Greenhouse Gas Center targets three greenhouse gas areas of study, as shown below. For the latest, <a href="/public/subscription/index.html">subscribe to our email newsletter</a>.</p>
          <Keypoints data={focusAreasStories} />
        </section>

        <section>
          <Title>What Else Do You Need? Let Us Help You!</Title>
          <p className="margin-top-2 font-sans-md margin-bottom-2">Do you have a need, idea, or suggestion? Contact the U.S. Greenhouse Gas Center team using the “Contact Us” button at the top or bottom of every page.</p>
        </section>
      </GridContainer>
    </div>
  );
}
