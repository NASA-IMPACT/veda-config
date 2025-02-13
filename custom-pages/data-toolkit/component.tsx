import React from "$veda-ui/react";
import '$veda-ui/@trussworks/react-uswds/lib/index.css'

import {
    GridContainer,
} from '$veda-ui/@trussworks/react-uswds';

import Keypoints from "../../common/keypoints";
import LearnMore from "../common/LearnMore";

import { dataEngagements, focusAreaDatasets, customInterfaces } from "../../common/constants";

import { SUBSCRIPTION_URL } from "../../constants";
import { Title } from "../../common/styled-components";

import '../../common/styles.scss';


export default function Component() {  
    return (
        <div className="hug-reset-container margin-bottom-8">
            <GridContainer containerSize="widescreen">
                <section>
                    <Title> Engage with Data </Title>
                    <p className="margin-bottom-2 font-size-md-deprecated">
                        Access the catalog of datasets, visualize the data on a map, and conduct analysis with JupyterHub.
                    </p>
                    <Keypoints data={dataEngagements} />
                </section>
                <section>
                    <Title> Featured Data Tools </Title>
                    <p className="margin-bottom-2 font-size-md-deprecated">
                        View and explore greenhouse gas emissions data with customized data visualization tools.
                    </p>
                    <Keypoints data={customInterfaces} />
                </section>
                <section>
                <Title> Core Science Focus Areas </Title>
                <p className="margin-bottom-2 font-size-md-deprecated">
                    The U.S. Greenhouse Gas Center is organized around three core focus areas. <a href={SUBSCRIPTION_URL}>Sign up</a> to join a focus area group.
                </p>
                <Keypoints data={focusAreaDatasets} />
                </section>

                <LearnMore />
            </GridContainer>
        </div>
    )
};
