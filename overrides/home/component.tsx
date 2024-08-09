import React from "$veda-ui/react";
import { NavLink } from "$veda-ui/react-router-dom";
import styled from "$veda-ui/styled-components";
import { glsp, themeVal, media } from "$veda-ui/@devseed-ui/theme-provider";
import { Button } from "$veda-ui/@devseed-ui/button";
import { CollecticonArrowRight, CollecticonCirclePlay } from "$veda-ui/@devseed-ui/collecticons";
import Hug from "$veda-ui-scripts/styles/hug";
import { VarHeading } from "$veda-ui-scripts/styles/variable-components";
import { variableGlsp } from "$veda-ui-scripts/styles/variable-utils";


import { DATASETS_PATH } from "$veda-ui-scripts/utils/routes";
import { Actions } from "$veda-ui-scripts/components/common/browse-controls/use-browse-controls";

import featureEmissions from "../../common/media/refinery.png";
import featureSources from "../../common/media/swamp.png";
import featureMethane from "../../common/media/plume.png";

import Partners from "./partners";
import Keypoints from "../../common/keypoints";
import Banner from './banner';
import VideoModal from "../components/video-modal";

const HomeContent = styled(Hug)`
  padding: ${variableGlsp(2.5, 0)};
  grid-row-gap: ${variableGlsp(2)};

  ${media.mediumUp`
    grid-row-gap: ${variableGlsp(3)};
  `}
`;

const IntroHeadline = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${glsp(2)};
  grid-column: content-start / content-end;

  ${media.mediumUp`
    grid-column: content-2 / content-8;
  `}

  ${media.largeUp`
    grid-column: content-3 / content-11;
  `}

  p {
    font-size: 1.25rem;
  }
`;

const ActionsBlock = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
`;

const InfoCallout = styled(Hug)`
  background: ${themeVal("color.base-50")};
  box-shadow: inset 0 -1px 0 0 ${themeVal("color.base-100a")};
  padding: ${variableGlsp(2.5, 0)};
`;

const InfoCalloutInner = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: ${glsp(3)};
  grid-column: content-start / content-end;

  ${media.mediumUp`
    grid-column: content-2 /content-8;
    text-align: center;
  `}

  ${media.largeUp`
    grid-column: content-3 / content-11;
    gap: ${glsp(3)};
  `}
`;

const InfoCalloutHeadline = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${glsp()};
  align-items: center;

  p {
    font-size: 1rem;

    ${media.mediumUp`
      font-size: 1.25rem;
    `}
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: ${glsp()};
  justify-content: center;
`;

let data = [
  {
    "title": "Gridded Anthropogenic Greenhouse Gas Emissions",
    "desc": "Emission estimates from human activities including the energy, agriculture, waste, and industry sectors",
    "img": {
      "src": featureEmissions,
      "alt": "image of oil refinery"
    },
    "link": {
      "url": "/stories/us-methane-sources",
      "text": "View more"
    },
    "footer": {
      "link": {
        "title": "Check out relevant datasets",
        "url": `${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(JSON.stringify({ Topics: "anthropogenic-emissions" }))}`
      }
    }
  },
  {
    "title": "Natural Greenhouse Gas Sources and Sinks",
    "desc": "Naturally-occurring greenhouse gas fluxes from land, ocean, and atmosphere",
    "img": {
      "src": featureSources,
      "alt": "image of green wetlands"
    },
    "link": {
      "url": "/stories/tracking-greenhouse-gas-cycles",
      "text": "View more"
    },
    "footer": {
      "link": {
        "title": "Check out relevant datasets",
        "url": `${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(JSON.stringify({ Topics: "natural-emissions-and-sinks" }))}`
      }
    }
  },
  {
    "title": "New Observations for Tracking Large Emission Events",
    "desc": "Identify and quantify large methane leak events leveraging aircraft and space-based data",
    "img": {
      "src": featureMethane,
      "alt": "image of colorful polygon against satellite landscape surface in brown"
    },
    "link": {
      "url": "/stories/discovering-large-methane-emissions",
      "text": "View more"
    },
    "footer": {
      "link": {
        "title": "Check out relevant datasets",
        "url": `${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(JSON.stringify({ Topics: "large-emission-events" }))}`
      }
    }
  }
];


export default function HomeComponent() {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [videoLink, setVideoLink] = React.useState<string>("");
  

  const handleOpenModal = (link: string) => {
    setVideoLink(link);
    setShowModal(true);
  };

  
  return (
    <>
    <Banner />
      <HomeContent>
        <IntroHeadline>
          <VarHeading size="xxlarge">Welcome</VarHeading>
          <p>
            The U.S. Greenhouse Gas Center opens up access to trusted data on
            greenhouse gases. This&nbsp;multi-agency effort consolidates
            greenhouse gas information from observations and models.
            The&nbsp;goal of the US GHG Center is to provide decision-makers with
            one location for data and analysis.
          </p>
          <p>
          This initial two-year demonstration phase creates a way to explore 
          and analyze U.S. government and other datasets, targeting three 
          greenhouse gas areas of study, as shown below. The US GHG Center 
          also encourages stakeholder feedback and ideas for future expansion.
          </p>
          <Buttons>
            <Button
              onClick={() => handleOpenModal("https://www.youtube.com/embed/6xWdIlWqhBE?si=NpOVMavs4IgKE297")}
              size="xlarge"
              variation="primary-fill"
            >
              <CollecticonCirclePlay />
              Tour the US GHG Center
            </Button>
            <Button
              forwardedAs={NavLink}
              to="/stories/intro-us-ghg-center"
              size="xlarge"
              variation="base-outline"
            >
              Learn More
            </Button>
          </Buttons>
        </IntroHeadline>
        <Keypoints data={data}/>
        <ActionsBlock>
        <Buttons>
          <Button
            forwardedAs={NavLink}
            to="/data-catalog"
            size="xlarge"
            variation="primary-fill"
          >
            Browse the Data Catalog <CollecticonArrowRight />
          </Button>
          <Button
            onClick={() => handleOpenModal("https://www.youtube.com/embed/S2XL5WT9W4g")}
            size="xlarge"
            variation="primary-fill"
          >
            <CollecticonCirclePlay />
            How to Explore Data
          </Button>
          </Buttons>
        </ActionsBlock>
      </HomeContent>
      <InfoCallout>
        <InfoCalloutInner>
          <InfoCalloutHeadline>
            <VarHeading size="xlarge">
              Joining forces for a better future
            </VarHeading>
            <p>
              The US GHG Center is grateful for the support and expertise of our
              valued, multi-agency collaborators: NASA, EPA, NIST, and NOAA.
            </p>
          </InfoCalloutHeadline>
          <Partners variation="positive" size="big" />
          <Button
            forwardedAs={NavLink}
            to="/about"
            size="xlarge"
            variation="primary-outline"
          >
            Learn More <CollecticonArrowRight />
          </Button>
        </InfoCalloutInner>
      </InfoCallout>
      {
        showModal && (
          <VideoModal 
            iframe={<iframe width="560" height="315" src={videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>}
            display={showModal}
            onClose={() => setShowModal(false)}
            width={`${560*1.5}px`} // Iframe's original embed width value 1.5x bigger
            height={`${315*1.5}px`} // Iframe's original embed height value 1.5x bigger
          />
        )
      }
    </>
  );
}
