import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";

import {
  CardHeader,
  CardBody,
  Grid,
} from '$veda-ui/@trussworks/react-uswds';

import Keypoints from "../../common/keypoints";
import { focusAreasSansDatasets } from "../../common/constants";
import { FitContainer, P, SectionContainer, Title } from "../../common/styled-components";

const GridContainer = styled(Grid)`
  height: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 0 4px 0 rgba(44,62,80,0.08), 0 12px 24px 0 rgba(44,62,80,0.08);

  &:hover {
    transform: translate(0, 0.125rem);
    transition: all 0.24s ease-in-out 0s;
  }
`;

const CenteredGrid = styled(Grid)`
  align-content: center;
`

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  opacity: 1;
`


export default function HomeComponent() {  
  return (
    <FitContainer>
      <SectionContainer>
        <Title>Content Collections by Topic</Title>
        <Link href="/stories/urban" >
        <GridContainer row col={10} gap={3}>
          <CenteredGrid tablet={{col: 5}}>
              <StyledImg src={"https://nicholas.duke.edu/sites/default/files/styles/banner/public/images/Urban%20Environment.jpg"}
                alt="urban image"
              />
          </CenteredGrid>
          <CenteredGrid tablet={{col: true}}>
            <CardHeader>
            <h1 className="usa-card__heading" style={{fontSize: "1.5rem"}}>Spotlight: Urban Emissions</h1>
            </CardHeader>
            <CardBody>
              <p style={{fontSize: "1.125rem"}}>
              Globally, cities are resp consible for more than 70% of greenhouse gas emissions. Cities have the power to reduce emissions using policies that benefit the health of their citizens. The U.S. Greenhouse Gas Center welcomes a new set of tools aimed at supporting city decisionmakers.
              </p>
          </CardBody>
          </CenteredGrid>
        </GridContainer>
        </Link>
      </SectionContainer>

      <SectionContainer>
        <Title>Core Science Focus Areas</Title>
        <P>The GHG Center includes three core science focus areas. How to get involved? For the latest, subscribe to our email newsletter.</P>
        <Keypoints data={focusAreasSansDatasets} />
      </SectionContainer>

    </FitContainer>
  );
}
