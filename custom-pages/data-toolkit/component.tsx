import React from "$veda-ui/react";
import { Link } from "$veda-ui/react-router-dom";
import '$veda-ui/@trussworks/react-uswds/lib/index.css'

import Keypoints from "../../common/keypoints";
import { dataEngagements, focusAreasSansDatasets, customInterfaces } from "../../common/constants";

import { SUBSCRIPTION_URL } from "../../constants";
import { FitContainer, P, SectionContainer, Title } from "../../common/styled-components";


export default function Component() {  
    return (
        <FitContainer>
        <SectionContainer>
            <Title> Engage with the Data </Title>
            <Keypoints data={dataEngagements} />

            <Keypoints data={customInterfaces} />
        </SectionContainer>
            <SectionContainer>
            <Title> Core Science Focus Areas </Title>
            <p>
                The U.S. Greenhouse Gas Center is organized around three core focus areas. <a href={SUBSCRIPTION_URL}>Sign up</a> to join a focus area group.
            </p>
            <Keypoints data={focusAreasSansDatasets} />
            </SectionContainer>

            <SectionContainer>
                <Title> Learn More and Share Your Ideas </Title>
                <Keypoints
                    data={[{
                        "title": "Data Catalog",
                        "desc": "Detailed information for datasets that provides insight into greenhouse gas sources, sinks, emissions, fluxes, and events.",
                        "img": {
                          "src": "https://via.placeholder.com/150",
                          "alt": "image of oil refinery"
                        },
                        "link": {
                          "url": "/data-catalog",
                          "text": "View more"
                        },
                        "footer": null
                      }]}
                    cardType="horizontal-info"
                ></Keypoints>
                <P> - For the latest updates and information about the U.S. Greenhouse Gas Center or to join a focus area group, <a href={SUBSCRIPTION_URL}>subscribe to our email updates list.</a></P>
                <P> - Read more about the US GHG Center news, trainings, and workshop opportunities on the <Link to="/news-and-events">News and Events page.</Link></P>
                <P> - Do you have a U.S. Greenhouse Gas Center portal suggestion or question? Reach the team using the "Contact Us" button at the top or bottom of every page. </P>
            </SectionContainer>
        </FitContainer>
    )
};
