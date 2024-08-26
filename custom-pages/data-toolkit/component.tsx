import React from "$veda-ui/react";
import { Link } from "$veda-ui/react-router-dom";
import '$veda-ui/@trussworks/react-uswds/lib/index.css'

import {
    GridContainer
} from '$veda-ui/@trussworks/react-uswds';

import Keypoints from "../../common/keypoints";
import { dataEngagements, focusAreasSansDatasets, customInterfaces } from "../../common/constants";

import { SUBSCRIPTION_URL } from "../../constants";
import { Title } from "../../common/styled-components";

import '/common/styles.scss';

export default function Component() {  
    return (
        <div className="hug-reset-container margin-bottom-8">
            <GridContainer containerSize="widescreen">
                <section>
                    <Title> Engage with the Data </Title>
                    <Keypoints data={dataEngagements} />

                    <Keypoints data={customInterfaces} />
                </section>
                <section>
                    <Title> Featured Data Tools </Title>

                    <Keypoints data={customInterfaces} />
                </section>
                <section>
                <Title> Core Science Focus Areas </Title>
                <p>
                    The U.S. Greenhouse Gas Center is organized around three core focus areas. <a href={SUBSCRIPTION_URL}>Sign up</a> to join a focus area group.
                </p>
                <Keypoints data={focusAreasSansDatasets} />
                </section>

                <section>
                    <Title> Learn More and Share Your Ideas </Title>
                    <p> - For the latest updates and information about the U.S. Greenhouse Gas Center or to join a focus area group, <a href={SUBSCRIPTION_URL}>subscribe to our email updates list.</a></p>
                    <p> - Read more about the US GHG Center news, trainings, and workshop opportunities on the <Link to="/news-and-events">News and Events page.</Link></p>
                    <p> - Do you have a U.S. Greenhouse Gas Center portal suggestion or question? Reach the team using the "Contact Us" button at the top or bottom of every page. </p>
                </section>
            </GridContainer>
        </div>
    )
};
