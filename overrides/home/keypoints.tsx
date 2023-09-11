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
            description="Carbon dioxide and methane gas emissions from human activities in areas such as energy, agriculture, waste, and industry."
            imgSrc={featureEmissions}
            imgAlt="image of smokestacks releasing gases against a blue sky"
            footerContent={
              <ArrowLink
                to={`${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(
                  JSON.stringify({ Topics: "Read more about Anthropogenic GHG Emissions" })
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
            linkTo="/stories/tracking-greenhouse-gas-cycles"
            title="Natural GHG Sources and Sinks"
            description="Naturally-occurring greenhouse gas emissions and fluxes from land, ocean, and atmosphere"
            imgSrc={featureSources}
            imgAlt="image of green wetlands"
            footerContent={
              <ArrowLink
                to={`${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(
                  JSON.stringify({ Topics: "Read more about Natural GHG Sources and Sinks" })
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
            title="Methane emissions from large events."
            description="Identify and quantify emissions from, large methane (CH4) leak events leveraging aircraft and satellite data."
            imgSrc={featureMethane}
            imgAlt="image of colorful polygon against satellite landscape surface in brown"
            footerContent={
              <ArrowLink
                to={`${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(
                  JSON.stringify({ Topics: "Read more about how Large Methane Emission Events are identified" })
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
