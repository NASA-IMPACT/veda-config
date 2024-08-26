import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { Link } from '$veda-ui/react-router-dom';
import {
  Card, 
  CardHeader,
  CardBody,
  CardMedia,
  CardGroup,
  CardFooter,
  Grid,
  GridContainer
} from '$veda-ui/@trussworks/react-uswds';

import { FoldTitle } from '$veda-ui/instance';
import Keypoints from "../../common/keypoints";
import { focusAreasSansDatasets } from "../../common/constants";
import { P, SectionContainer, Title } from "../../common/styled-components";

console.log(focusAreasSansDatasets)
const FitContainer = styled.div`
  grid-column: 1 / -1;
`
import '/common/styles.scss'

export default function HomeComponent() {  
  return (
    <div className="hug-reset-container">
      <GridContainer>
          <Title>Content Collections by Topic</Title>
        <CardGroup>
          <Card layout="flagDefault" gridLayout={{tablet: {col: 12}}} containerProps={{className:'border-0 position-relative devseed-card__mimick'}}>
            <CardMedia exdent>
              <img src={"https://nicholas.duke.edu/sites/default/files/styles/banner/public/images/Urban%20Environment.jpg"} alt="urban image" />
              </CardMedia>

            <CardHeader>
              <h3 className="usa-card__heading">Spotlight: Urban Emissions</h3>
            </CardHeader>
            <CardBody>
              <p className="padding-bottom-2">
                Globally, cities are resp consible for more than 70% of greenhouse gas emissions. Cities have the power to reduce emissions using policies that benefit the health of their citizens. The U.S. Greenhouse Gas Center welcomes a new set of tools aimed at supporting city decisionmakers.
              </p>
            </CardBody>
            <Link className="position-absolute top-0 left-0 width-full height-full blocklink" to="/stories/urban" />
          </Card>
          </CardGroup>
        
      
      <SectionContainer>
        <Title>Core Science Focus Areas</Title>
        <p className="margin-top-4 margin-bottom-2">The GHG Center includes three core science focus areas. How to get involved? For the latest, subscribe to our email newsletter.</p>
        <CardGroup>
        {/* <Keypoints data={focusAreasSansDatasets} /> */}
        {focusAreasSansDatasets.map(focusArea => {
            return <Card gridLayout={{ tablet: {col: 4}}} containerProps={{className:'border-0 position-relative devseed-card__mimick'}}>
            <CardMedia exdent>
              <img src={focusArea.img.src} alt={focusArea.img.alt} />
              </CardMedia>
            <CardHeader>
              <h3 className="usa-card__heading">{focusArea.title} </h3>
            </CardHeader>
            <CardBody>
              <p className="padding-bottom-2">
               {focusArea.desc}
              </p>
            </CardBody>
            <Link className="position-absolute top-0 left-0 width-full height-full blocklink" to={focusArea.link.url} />
          </Card>
        })}
        </CardGroup>
      </SectionContainer>
    </GridContainer>
    </div>
  );
}
