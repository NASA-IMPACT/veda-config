import React from "$veda-ui/react";
import { Link } from "$veda-ui/react-router-dom";
import '$veda-ui/@trussworks/react-uswds/lib/index.css'

import {
    Grid,
    GridContainer,
} from '$veda-ui/@trussworks/react-uswds';

import {
    CollecticonTextBlock,
    CollecticonEnvelope,
    CollecticonSpeechBalloon,
} from '$veda-ui/@devseed-ui/collecticons';

import Keypoints from "../../common/keypoints";
import { dataEngagements, focusAreaDatasets, customInterfaces } from "../../common/constants";

import { SUBSCRIPTION_URL } from "../../constants";
import { Title } from "../../common/styled-components";

import '/common/styles.scss';


export default function Component() {  
    return (
        <div className="hug-reset-container margin-bottom-8">
            <GridContainer containerSize="widescreen">
                <section>
                    <Title> Engage with Data </Title>
                    <Keypoints data={dataEngagements} />
                </section>
                <section>
                    <Title> Featured Data Tools </Title>
                    <p className="margin-bottom-2 font-sans-md">
                        View and explore greenhouse gas emissions data with customized data visualization tools.
                    </p>
                    <Keypoints data={customInterfaces} />
                </section>
                <section>
                <Title> Core Science Focus Areas </Title>
                <p className="margin-bottom-2 font-sans-md">
                    The U.S. Greenhouse Gas Center is organized around three core focus areas. <Link to={SUBSCRIPTION_URL}>Sign up</Link> to join a focus area group.
                </p>
                <Keypoints data={focusAreaDatasets} />
                </section>

                <Grid tablet={{col:8, offset: 2}}>
                    <Title> Learn More and Share Your Ideas </Title>
                    <Grid row>
                        <Grid col='auto' className="display-flex flex-align-center margin-bottom-2">
                            <CollecticonEnvelope size='xlarge' color='#082a64' className="grid-col-auto" />
                        </Grid>
                        <Grid col='fill' className="display-flex flex-align-center margin-bottom-2">
                            <span className="margin-left-4 font-sans-md"> For the latest updates and information about the U.S. Greenhouse Gas Center or to join a focus area group, <a href={SUBSCRIPTION_URL}>subscribe to our email updates list.</a></span>
                        </Grid>
                    </Grid>
                    <Grid row>
                        <Grid col='auto' className="display-flex flex-align-center margin-bottom-2">
                            <CollecticonTextBlock size='xlarge' color='#082a64' className="grid-col-auto" />
                        </Grid>
                        <Grid col='fill' className="display-flex flex-align-center margin-bottom-2">
                            <span className="margin-left-4 font-sans-md"> Read more about the U.S. Greenhouse Gas Center news, trainings, and workshop opportunities on the <Link to="/news-and-events">News and Events page.</Link></span>
                        </Grid>
                    </Grid>
                    <Grid row>
                        <Grid col='auto' className="display-flex flex-align-center margin-bottom-2">
                            <CollecticonSpeechBalloon size='xlarge' color='#082a64' className="grid-col-auto" />
                        </Grid>
                        <Grid col='fill' className="display-flex flex-align-center margin-bottom-2">
                            <span className="margin-left-4 font-sans-md">  Do you have a U.S. Greenhouse Gas Center portal suggestion or question? Reach the team using the "Contact Us" button at the top or bottom of every page.</span>
                        </Grid>
                    </Grid>
                </Grid>
            </GridContainer>
        </div>
    )
};
