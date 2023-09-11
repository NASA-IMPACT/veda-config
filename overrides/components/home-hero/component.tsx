import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { glsp, themeVal } from "$veda-ui/@devseed-ui/theme-provider";

import Constrainer from "$veda-ui-scripts/styles/constrainer";
import { VarHeading } from "$veda-ui-scripts/styles/variable-components";
import Image from "$veda-ui-scripts/components/common/blocks/images";
import {
  Figcaption,
  Figure,
  FigureAttribution,
} from "$veda-ui-scripts/components/common/figure";

import Partners from "../../home/partners";
import coverSrc from "./earth.png";

const Hero = styled.div`
  background: ${themeVal("color.primary")};
  color: ${themeVal("color.surface")};
  padding: ${glsp(3, 0, 0, 0)};
`;

const PageHeroHGroup = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-flow: column;
  gap: ${glsp(3)};
  align-items: center;
`;

const HeroHeadline = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-flow: column;
  gap: ${glsp()};
  align-items: center;

  p {
    font-size: 1.25rem;
  }
`;


const PageHeroCover = styled(Figure)`
  height: 20rem;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
    mix-blend-mode: lighten;
  }
`;

export default function HomeHero(props) {
  return (
    <Hero>
      <Constrainer>
        <PageHeroHGroup>
          <HeroHeadline>
            <VarHeading size="jumbo">U.S. Greenhouse Gas Center</VarHeading>
            <p>
              Uniting Data and Technology to Empower Tomorrow's Climate
              Solutions
            </p>
          </HeroHeadline>
          <Partners variation="negative" />
        </PageHeroHGroup>
      </Constrainer>
      <PageHeroCover>
        <img src={coverSrc} alt="image of northern hemisphere of earth with gas in atmosphere shown in red hues" />
        <Figcaption>
          <FigureAttribution
            author="Global Atmospheric Carbon Dioxide (CO₂), January 2021, produced by NASA's Scientific Visualization Studio, Helen-Nicole Kostis, Lead Visualizer"
            url="https://svs.gsfc.nasa.gov/5115"
            position="bottom-right"
          />
        </Figcaption>
      </PageHeroCover>
    </Hero>
  );
}
