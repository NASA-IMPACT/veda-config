import React from "$veda-ui/react";
import { Link } from '$veda-ui/react-router-dom';
import {
  Card, 
  CardHeader,
  CardBody,
  CardMedia,
  CardGroup,
  Grid,
  GridContainer,
} from '$veda-ui/@trussworks/react-uswds';

import {
  CollecticonTextBlock,
  CollecticonEnvelope,
  CollecticonSpeechBalloon,
} from '$veda-ui/@devseed-ui/collecticons';

import { focusAreasStories } from "../../common/constants";
import { Title } from "../../common/styled-components";

import Keypoints from "../../common/keypoints";

import { SUBSCRIPTION_URL } from "../../constants";

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
              <img src={new URL('./media/1-maia-los-angeles-1041.png', import.meta.url).href} alt="distant view of hazy cityscape." />
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
          <p className="margin-top-2 font-size-md-deprecated margin-bottom-2">The US GHG Center targets three greenhouse gas areas of study, as shown below. For the latest, <a href={SUBSCRIPTION_URL}>subscribe to our email newsletter</a>.</p>
          <Keypoints data={focusAreasStories} />
        </section>

        <Grid tablet={{col:8, offset: 2}}>
          <Title> Learn More and Share Your Ideas </Title>
          <Grid row>
              <Grid col='auto' className="display-flex flex-align-center margin-bottom-2">
                  <CollecticonEnvelope size='xlarge' color='#082a64' className="grid-col-auto" />
              </Grid>
              <Grid col='fill' className="display-flex flex-align-center margin-bottom-2">
                  <span className="margin-left-4 font-size-md-deprecated"> For the latest updates and information about the US GHG Center or to join a focus area group, <a href={SUBSCRIPTION_URL}>subscribe to our email updates list.</a></span>
              </Grid>
          </Grid>
          <Grid row>
              <Grid col='auto' className="display-flex flex-align-center margin-bottom-2">
                  <CollecticonTextBlock size='xlarge' color='#082a64' className="grid-col-auto" />
              </Grid>
              <Grid col='fill' className="display-flex flex-align-center margin-bottom-2">
                  <span className="margin-left-4 font-size-md-deprecated"> Read more about the US GHG Center news, trainings, and workshop opportunities on the <Link to="/news-and-events">News and Events page.</Link></span>
              </Grid>
          </Grid>
          <Grid row>
              <Grid col='auto' className="display-flex flex-align-center margin-bottom-2">
                  <CollecticonSpeechBalloon size='xlarge' color='#082a64' className="grid-col-auto" />
              </Grid>
              <Grid col='fill' className="display-flex flex-align-center margin-bottom-2">
                  <span className="margin-left-4 font-size-md-deprecated">  Do you have a US GHG Center portal suggestion or question? Reach the team using the "Contact Us" button at the top or bottom of every page.</span>
              </Grid>
          </Grid>
        </Grid>

      </GridContainer>
    </div>
  );
}
