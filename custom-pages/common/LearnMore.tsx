import React from "$veda-ui/react";
import { Link } from '$veda-ui/react-router-dom';
import {
  Grid,
} from '$veda-ui/@trussworks/react-uswds';

import {
  CollecticonTextBlock,
  CollecticonEnvelope,
  CollecticonSpeechBalloon,
} from '$veda-ui/@devseed-ui/collecticons';

import { Title } from "../../common/styled-components";
import { SUBSCRIPTION_URL } from "../../constants";


export default function LearnMore() {
    return (
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
    )
}
