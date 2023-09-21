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

import Partners from "../../home/partners";
import { useMediaQuery } from "$veda-ui-scripts/utils/use-media-query";

import coverImgSrc from "./earth.png";
import coverVideoSrc from "url:./earth-gas.mp4";

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

export default function HomeHero(props) {
  const { isMediumUp } = useMediaQuery();

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
          <Partners variation="negative" size="big" />
        </PageHeroHGroup>
      </Constrainer>
      <PageHeroCover>
        {isMediumUp ? (
          <video
            autoPlay
            loop
            muted
            disablePictureInPicture
            disableRemotePlayback
          >
            <source src={coverVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={coverImgSrc}
            alt="Image of northern hemisphere of earth with gas in atmosphere shown in red hues"
          />
        )}
        <Figcaption>
          <FigureAttribution
            author="Helen-Nicole Kostis, Lead Visualizer, Scientific Visualization Studio. Image of January 2021 Global Atmospheric Carbon Dioxide (CO₂)"
            url="https://svs.gsfc.nasa.gov/5115"
            position="bottom-right"
          />
        </Figcaption>
      </PageHeroCover>
    </Hero>
  );
}
