import React from "$veda-ui/react";
import { Link } from "$veda-ui/react-router-dom";
import {  Card,
    CardMedia,
    CardBody,
} from "$veda-ui/@trussworks/react-uswds";
import '$veda-ui/@trussworks/react-uswds/lib/uswds.css'
import '$veda-ui/@trussworks/react-uswds/lib/index.css'

import Keypoints from "../../common/keypoints";
import { dataEngagements, focusAreasSansDatasets, customInterfaces } from "../../common/constants";

import { SUBSCRIPTION_URL } from "../../constants";
import { Title, P } from "../../common/styled-components";


export default function Component() {  
    return (
        <div style={{display: "flex", flexDirection: "column",  padding: "12px 13vw", margin: "12px", font: "inherit"}}>
        <div>
            <Title> Engage with the Data </Title>
            </div>
            <Keypoints data={dataEngagements} />

            <Keypoints data={customInterfaces} />

            <div>
            <Title> Core Science Focus Areas </Title>
            <p>
                The U.S. Greenhouse Gas Center is organized around three core focus areas. <a href={SUBSCRIPTION_URL}>Sign up</a> to join a focus area group.
            </p>
            <Keypoints data={focusAreasSansDatasets} />
            </div>

            <div>
                <Title> Learn More and Share Your Ideas </Title>
                {/* <Card className="usa-card--flag">
                    <CardMedia>
                        <img
                        src="https://via.placeholder.com/150"
                        alt="Example Image"
                        />
                    </CardMedia>
                    <CardBody>
                    <P> For the latest updates and information about the U.S. Greenhouse Gas Center or to join a focus area group, <a href={SUBSCRIPTION_URL}>subscribe to our email updates list.</a></P>
                    </CardBody>
                </Card>
                <Card className="usa-card--flag">
                    <CardMedia>
                        <img
                        src="https://via.placeholder.com/150"
                        alt="Example Image"
                        />
                    </CardMedia>
                    <CardBody>
                    <P> Read more about the US GHG Center news, trainings, and workshop opportunities on the <Link to="/news-and-events">News and Events page.</Link></P>
                    </CardBody>
                </Card>
                <Card className="usa-card--flag">
                    <CardMedia>
                        <img
                        src="https://via.placeholder.com/150"
                        alt="Example Image"
                        />
                    </CardMedia>
                    <CardBody>
                    <P>Do you have a U.S. Greenhouse Gas Center portal suggestion or question? Reach the team using the "Contact Us" button at the top or bottom of every page. </P>
                    </CardBody>
                </Card> */}
                <P> - For the latest updates and information about the U.S. Greenhouse Gas Center or to join a focus area group, <a href={SUBSCRIPTION_URL}>subscribe to our email updates list.</a></P>
                <P> - Read more about the US GHG Center news, trainings, and workshop opportunities on the <Link to="/news-and-events">News and Events page.</Link></P>
                <P> - Do you have a U.S. Greenhouse Gas Center portal suggestion or question? Reach the team using the "Contact Us" button at the top or bottom of every page. </P>
            </div>
        </div>
    )
};