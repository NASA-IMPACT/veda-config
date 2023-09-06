import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { glsp } from "$veda-ui/@devseed-ui/theme-provider";
import Hug from "$veda-ui-scripts/styles/hug";
import {
  Card,
  CardList,
  CardFooter,
} from "$veda-ui-scripts/components/common/card";

import { ArrowLink } from "./arrow-link";

import { DATASETS_PATH } from "$veda-ui-scripts/utils/routes";
import { Actions } from "$veda-ui-scripts/components/common/browse-controls/use-browse-controls";

import featureEmissions from "./media/factory.png";
import featureSources from "./media/swamp.png";
import featureMethane from "./media/plume.png";

const KeypointsWrapper = styled(Hug)`
  padding: ${glsp(1, 0)};
  grid-column: content-start / content-end;

  ${CardFooter} {
    margin-top: auto;
  }
`;

export default function Keypoints() {
  return (
    <KeypointsWrapper>
      <CardList>
        <li>
          <Card
            linkLabel="View more"
            linkTo="/stories/anthropogenic-methane-emissions-distribution"
            title="Anthropogenic GHG Emissions"
            description="Human-related carbon dioxide or methane gas emissions from activities in various sectors such as energy, agriculture, waste, and industry."
            imgSrc={featureEmissions}
            imgAlt="Emissions"
            footerContent={
              <ArrowLink
                to={`${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(
                  JSON.stringify({ Topics: "anthropogenic-emissions" })
                )}`}
              >
                Check out relevant datasets
              </ArrowLink>
            }
          />
        </li>
        <li>
          <Card
            linkLabel="View more"
            linkTo="/stories/how-ghg-center-tracks-carbon"
            title="Natural GHG Sources and Sinks"
            description="Natural environment greenhouse gas emissions and fluxes from land, ocean and atmosphere."
            imgSrc={featureSources}
            imgAlt="Emissions"
            footerContent={
              <ArrowLink
                to={`${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(
                  JSON.stringify({ Topics: "natural-emissions-and-sinks" })
                )}`}
              >
                Check out relevant datasets
              </ArrowLink>
            }
          />
        </li>
        <li>
          <Card
            linkLabel="View more"
            linkTo="/stories/discovering-large-methane-emissions"
            title="Large Methane Emission Events"
            description="Identify and quantify emissions from, large methane (CH4) leak events leveraging aircraft and satellite data."
            imgSrc={featureMethane}
            imgAlt="Emissions"
            footerContent={
              <ArrowLink
                to={`${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(
                  JSON.stringify({ Topics: "large-emission-events" })
                )}`}
              >
                Check out relevant datasets
              </ArrowLink>
            }
          />
        </li>
      </CardList>
    </KeypointsWrapper>
  );
}
