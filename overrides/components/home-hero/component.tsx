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

import epaImg from "../../media/epa.svg";
import nasaImg from "../../media/nasa.png";
import nistImg from "../../media/nist.png";
import noaaImg from "../../media/noaa.png";

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
    font-size: 1rem;
  }
`;

export const LogoWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-flow: wrap;
  gap: 1rem;
  align-items: center;

  > * {
    flex-shrink: 0;
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
          <Partners />
        </PageHeroHGroup>
      </Constrainer>
      <PageHeroCover>
        <img src={coverSrc} alt="Earth seen from space" />
        <Figcaption>
          <FigureAttribution
            author="NASA"
            url="https://www.nasa.gov/"
            position="bottom-right"
          />
        </Figcaption>
      </PageHeroCover>
    </Hero>
  );
}

function Partners() {
  return (
    <LogoWrapper>
      <a href="https://www.epa.gov/">
        <Image src={epaImg} alt="EPA logo" height="80" />
      </a>

      <a href="https://www.nasa.gov/">
        <Image src={nasaImg} alt="NASA logo" height="80" />
      </a>

      <a href="https://www.nist.gov/">
        <Image src={nistImg} alt="NIST logo" height="80" />
      </a>

      <a href="https://www.noaa.gov/">
        <Image src={noaaImg} alt="NOAA logo" height="80" />
      </a>
    </LogoWrapper>
  );
}
