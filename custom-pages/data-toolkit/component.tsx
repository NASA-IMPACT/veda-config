import React from "$veda-ui/react";
import { Link } from "$veda-ui/react-router-dom";

import Keypoints from "../../common/keypoints";
import { dataEngagements, focusAreasSansDatasets } from "../../common/constants";

import { SUBSCRIPTION_URL } from "../../constants";


export default function Component() {  
    return (
        <>
            <h1> Engage with the Data </h1>
            <Keypoints data={dataEngagements} />

            <h1> Core Science Focus Areas </h1>
            <p>
                The U.S. Greenhouse Gas Center is organized around three core focus areas. <a href={SUBSCRIPTION_URL}>Sign up</a> to join a focus area group.
            </p>

            <Keypoints data={focusAreasSansDatasets} />

            <h1> Learn More and Share Your Ideas </h1>
            <p> For the latest updates and information about the U.S. Greenhouse Gas Center or to join a focus area group, <a href={SUBSCRIPTION_URL}>subscribe to our email updates list.</a></p>
            <p> Read more about the US GHG Center news, trainings, and workshop opportunities on the <Link to="/news-and-events">News and Events page.</Link></p>
            <p>Do you have a U.S. Greenhouse Gas Center portal suggestion or question? Reach the team using the "Contact Us" button at the top or bottom of every page. </p>
        </>
    )
};