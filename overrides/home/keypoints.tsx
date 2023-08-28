import React, { useState } from "$veda-ui/react";
import { NavLink } from "$veda-ui/react-router-dom";
import styled from "$veda-ui/styled-components";
import {
  glsp,
  themeVal,
  media,
  listReset,
} from "$veda-ui/@devseed-ui/theme-provider";
import { CollecticonArrowRight } from "$veda-ui/@devseed-ui/collecticons";
import Hug from "$veda-ui-scripts/styles/hug";

import keyFactory from "./media/key-factory.svg";
import keyPlanet from "./media/key-planet.svg";
import keyLandfill from "./media/key-landfill.svg";

import featureImgFactory from "./media/audience2.png";
import featureImgPlanet from "./media/audience1.png";
import featureImgLandfill from "./media/audience3.png";

const KeypointsWrapper = styled(Hug)`
  overflow: hidden;
  padding: ${glsp(1, 0)};
  grid-column: full-start / full-end;
`;

const KeypointList = styled.ul`
  ${listReset()}
  grid-column: content-start / content-end;

  ${media.mediumUp`
    grid-column: content-start / content-7;
  `}

  ${media.largeUp`
    grid-column: content-start / content-10;
  `}

  li {
    box-shadow: 0 1px 0 0 ${themeVal("color.base-100a")};

    &:first-child {
      box-shadow: 0 1px 0 0 ${themeVal("color.base-100a")},
        0 -1px 0 0 ${themeVal("color.base-100a")};
    }
  }
`;

const KeypointMedia = styled.div`
  width: 5rem;
  flex: 0 0 auto;
`;

const KeypointBody = styled.div`
  max-width: 37rem;
  display: flex;
  flex-flow: column;
  gap: ${glsp(0.75)};
`;

const KeypointLabel = styled.p`
  font-size: 1.25rem;
  color: ${themeVal("color.primary")};
  font-weight: ${themeVal("type.base.bold")};
`;

const KeyPointLink = styled(NavLink)`
  display: flex;
  flex-flow: column;
  gap: ${glsp(2)};
  padding: ${glsp(3, 0)};
  text-decoration: none;
  
  ${media.smallUp`
    flex-flow: row;
    align-items: center;
  `}

  &,
  &:visited {
    color: inherit;
  }

  ${CollecticonArrowRight} {
    flex: 0 0 auto;
    margin-left: auto;
    opacity: 0;
    transition: opacity 160ms ease-in-out;
    display: none;

    ${media.smallUp`
      display: block;
    `}
  }

  &:hover {
    ${KeypointLabel} {
      text-decoration: underline;
    }

    ${CollecticonArrowRight} {
      opacity: 1;
    }
  }
`;

const KeypointFeaturedMedia = styled.div`
  align-self: start;
  box-shadow: ${themeVal("boxShadow.elevationD")};
  border-radius: 1rem;
  border: 1rem solid ${themeVal("color.surface")};
  transform: rotate(2deg) translate(1rem);
  display: none;

  ${media.mediumUp`
    display: block;
    grid-column: content-7 / full-end;
  `}

  ${media.largeUp`
    grid-column: content-10 / full-end;
  `}
`;

const hoverImages = {
  keyFactory: {
    alt: "Methane fossil fuel exploitation over east USA",
    src: featureImgFactory,
  },
  keyPlanet: {
    alt: "Arctic methane sea ice",
    src: featureImgPlanet,
  },
  keyLandfill: {
    alt: "Methane plume",
    src: featureImgLandfill,
  },
};

export default function Keypoints() {
  const [hoveredItem, setHoveredItem] = useState("keyFactory");

  return (
    <KeypointsWrapper>
      <KeypointList>
        <li>
          <KeyPointLink
            to="/"
            onMouseOver={() => setHoveredItem("keyFactory")}
          >
            <KeypointMedia>
              <img src={keyFactory} alt="Graphic of a factory emitting gases" />
            </KeypointMedia>
            <KeypointBody>
              <KeypointLabel>Anthropogenic GHG Emissions</KeypointLabel>
              <p>
                Human-related carbon dioxide or methane gas emissions from
                activities in various sectors such as energy, agriculture,
                waste, and industry.
              </p>
            </KeypointBody>
            <CollecticonArrowRight />
          </KeyPointLink>
        </li>
        <li>
          <KeyPointLink to="/" onMouseOver={() => setHoveredItem("keyPlanet")}>
            <KeypointMedia>
              <img
                src={keyPlanet}
                alt="Graphic of a planet with gas around it"
              />
            </KeypointMedia>
            <KeypointBody>
              <KeypointLabel>Natural GHG Sources</KeypointLabel>
              <p>
                Land, ocean and atmosphere sources of carbon dioxide or methane
                gas.
              </p>
            </KeypointBody>
            <CollecticonArrowRight />
          </KeyPointLink>
        </li>
        <li>
          <KeyPointLink
            to="/"
            onMouseOver={() => setHoveredItem("keyLandfill")}
          >
            <KeypointMedia>
              <img
                src={keyLandfill}
                alt="Graphic of a landfill emitting gases"
              />
            </KeypointMedia>
            <KeypointBody>
              <KeypointLabel>Large GHG Emission Events</KeypointLabel>
              <p>
                Point source locations and methane plume extent from specific
                events.
              </p>
            </KeypointBody>
            <CollecticonArrowRight />
          </KeyPointLink>
        </li>
      </KeypointList>
      <KeypointFeaturedMedia>
        <img
          src={hoverImages[hoveredItem].src}
          alt={hoverImages[hoveredItem].alt}
        />
      </KeypointFeaturedMedia>
    </KeypointsWrapper>
  );
}
