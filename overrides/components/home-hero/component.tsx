import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { glsp, themeVal, media } from "$veda-ui/@devseed-ui/theme-provider";

import Constrainer from "$veda-ui-scripts/styles/constrainer";
import { VarHeading } from "$veda-ui-scripts/styles/variable-components";
import Image from "$veda-ui-scripts/components/common/blocks/images";
import {
  Figcaption,
  Figure,
  FigureAttribution,
} from "$veda-ui-scripts/components/common/figure";

import { useMediaQuery } from "$veda-ui-scripts/utils/use-media-query";

import coverImgSrc from "./Arizona_bushfire_Background_dark.jpg";

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
  padding: 0;
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
  height: 16rem;
  width: 100%;

  ${media.mediumUp`
    margin-top: -4rem;
    height: 23rem;
  `}

  ${media.largeUp`
    height: 28rem;
    margin-top: -6rem;
  `}

  img,
  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
    mix-blend-mode: lighten;
  }
`;

const DescriptionWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-flow: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  > * {
    flex-shrink: 0;
  }
  ${media.mediumDown`
    gap: 1rem;
  `}
`;

export default function HomeHero(props) {

  return (
    <Hero>
      <Constrainer>
        <PageHeroHGroup>
          <HeroHeadline>
            <VarHeading size="jumbo">Disasters Mapping Portal</VarHeading>
          </HeroHeadline>
        </PageHeroHGroup>
      </Constrainer>
      <PageHeroCover>
          <img
            src={coverImgSrc}
            alt="visualizaion of january 2021 global atmospheric carbon dioxide"
          />
        <Figcaption style={{position: "absolute", top: "50%", "left": "50%", transform: "translate(-50%, -50%)"}}>
          {/* <FigureAttribution
            author="NASA's Scientific Visualization Studio. Visualization of January 2021 Global Atmospheric Carbon Dioxide (CO₂)"
            url="https://svs.gsfc.nasa.gov/5115"
            position="bottom-right"
          /> */}

            <div style={{fontSize: 20, fontWeight: 400}}>
            A powerful interface for viewing, analyzing, and downloading the latest near real-time and disaster specific data products in Geographic Information Systems (GIS) format. The Disasters Mapping Portal supports NASA’s Earth Applied Sciences Disasters program area in its mission to use Earth-observing data and applied research to improve the prediction of, preparation for, response to and recovery from hazards and disasters around the world.
            </div>
        </Figcaption>
      </PageHeroCover>
    </Hero>
  );
}
