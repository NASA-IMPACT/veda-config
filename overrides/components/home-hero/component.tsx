import React, { useState, useEffect } from "$veda-ui/react";
import axios from 'axios';
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

const VitalSigns = styled.div`
  display: flex;
  align-items: center;
  padding: ${glsp(2)};
  background: ${themeVal("color.surface")};
  color: ${themeVal("color.primary")};
  border-bottom: 1px solid ${themeVal("color.primary")};

  > div {
    flex: 1;
    text-align: center;

    &:not(:last-child) {
      border-right: 1px solid ${themeVal("color.baseAlphaC")};
    }

    > div:first-child {
      font-size: 1rem;
      font-weight: bold;
    }

    > div:last-child {
      display: flex;
      justify-content: center;
      font-size: 2rem;
      color: ${themeVal("color.danger")};

      > div {
        margin-left: 8px;
        font-size: 1rem;
        color: ${themeVal("color.danger")};
      }
    }
  }
`;


export default function HomeHero(props) {
  const { isMediumUp } = useMediaQuery();

  const [carbonDioxide, setCarbonDioxide] = useState(null);
  const [methane, setMethane] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://corsproxy.io/?https://climate.nasa.gov/api/v1/vital_signs/');
        const data = response.data;
        const co2 = data.items.find(sign => sign.title === 'Carbon Dioxide');
        const ch4 = data.items.find(sign => sign.title === 'Methane');

        setCarbonDioxide(co2);
        setMethane(ch4);
      } catch (error) {
        // console.error('Error fetching vital signs data:', error);
      }
    }

    fetchData();
  }, []);

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
            alt="visualizaion of january 2021 global atmospheric carbon dioxide"
          />
        )}
        <Figcaption>
          <FigureAttribution
            author="NASA's Scientific Visualization Studio. Visualization of January 2021 Global Atmospheric Carbon Dioxide (CO₂)"
            url="https://svs.gsfc.nasa.gov/5115"
            position="bottom-right"
          />
        </Figcaption>
      </PageHeroCover>
      {
        (carbonDioxide !== null && methane !== null ) &&
        <VitalSigns>
          <div>
            <div>
              Carbon Dioxide
            </div>
            <div>
              {!carbonDioxide.rate_is_increasing ? `↓ ${carbonDioxide.value.substring(1)}` : `↑ ${carbonDioxide.value}`}
              <div>{carbonDioxide.unit_abbr}</div>
            </div>
          </div>
          <div>
            <div>
              Methane
            </div>
            <div>
              {!methane.rate_is_increasing ? `↓ ${methane.value.substring(1)}` : `↑ ${methane.value}`}
              <div>{methane.unit_abbr}</div>
            </div>

          </div>
        </VitalSigns>
      }
    </Hero>
  );
}
