import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { listReset, media, glsp, media } from "$veda-ui/@devseed-ui/theme-provider";
import Hug from "$veda-ui-scripts/styles/hug";
import { Card } from "$veda-ui-scripts/components/common/card";
import { CardFooter } from "$veda-ui-scripts/components/common/card/styles";
import { variableGlsp } from '$veda-ui-scripts/styles/variable-utils';
import { ArrowLink } from "./arrow-link";

import { DATASETS_PATH } from "$veda-ui-scripts/utils/routes";
import { Actions } from "$veda-ui-scripts/components/common/browse-controls/use-browse-controls";

import featureEmissions from "./media/refinery.png";
import featureSources from "./media/swamp.png";
import featureMethane from "./media/plume.png";

export const CardList = styled.ol`
  ${listReset()}
  grid-column: 1 / -1;
  display: grid;
  gap: ${variableGlsp()};
  grid-template-columns: repeat(1, 1fr);

  ${media.mediumUp`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.largeUp`
    grid-template-columns: repeat(3, 1fr);
  `}

  > li {
    min-width: 0;
  }
`;

const KeypointsWrapper = styled(Hug)`
  padding: ${glsp(1, 0)};
  grid-column: content-start / content-end;

  ${CardFooter} {
    margin-top: auto;
  }
`;

const KeypointCard = styled(Card)`
  ${media.mediumUp`
    font-size: 1.125rem;
  `}
`

export default function Keypoints() {
  return (
    <KeypointsWrapper>
      <CardList>
        <li>
          <KeypointCard
            linkLabel="View more"
            linkTo="/stories/us-methane-sources"
            title="Gridded Anthropogenic Greenhouse Gas Emissions"
            description="Emission estimates from human activities including the energy, agriculture, waste, and industry sectors"
            imgSrc={featureEmissions}
            imgAlt="image of oil refinery"
            footerContent={
              <div>
                <ArrowLink
                  to={`${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(
                    JSON.stringify({ Topics: "anthropogenic-emissions" })
                  )}`}
                >
                  Check out relevant datasets
                </ArrowLink>
              </div>
            }
          />
        </li>
        <li>
          <KeypointCard
            linkLabel="View more"
            linkTo="/stories/tracking-greenhouse-gas-cycles"
            title="Natural Greenhouse Gas Sources and Sinks"
            description="Naturally-occurring greenhouse gas fluxes from land, ocean, and atmosphere"
            imgSrc={featureSources}
            imgAlt="image of green wetlands"
            footerContent={
              <div>
                <ArrowLink
                  to={`${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(
                    JSON.stringify({ Topics: "natural-emissions-and-sinks" })
                  )}`}
                >
                  Check out relevant datasets
                </ArrowLink>
              </div>
            }
          />
        </li>
        <li>
          <KeypointCard
            linkLabel="View more"
            linkTo="/stories/discovering-large-methane-emissions"
            title="New Observations for Tracking Large Emission Events"
            description="Identify and quantify large methane leak events leveraging aircraft and space-based data"
            imgSrc={featureMethane}
            imgAlt="image of colorful polygon against satellite landscape surface in brown"
            footerContent={
              <div>
                <ArrowLink
                  to={`${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(
                    JSON.stringify({ Topics: "large-emission-events" })
                    )}`}
                    >
                  Check out relevant datasets
                </ArrowLink>
              </div>
            }
          />
        </li>
      </CardList>
    </KeypointsWrapper>
  );
}


export function KeypointsData() {
  return (
    <KeypointsWrapper>
      <CardList>
        <li>
          <KeypointCard
            linkLabel="View more"
            linkTo="/data-catalog"
            title="Datasets"
            description="This dashboard is for exploring key datasets that provide insight into greenhouse gas sources, sinks, emissions, fluxes, and events."
            imgSrc={"https://biggardenfurniture.com.au/wp-content/uploads/2018/08/img-placeholder.png"}
            imgAlt="image of oil refinery"
            // footerContent={
            //   <div>
            //     <ArrowLink
            //       to={`${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(
            //         JSON.stringify({ Topics: "anthropogenic-emissions" })
            //       )}`}
            //     >
            //       Check out relevant datasets
            //     </ArrowLink>
            //   </div>
            // }
          />
        </li>
        <li>
          <KeypointCard
            linkLabel="View more"
            linkTo="/exploration"
            title="Interactive Map"
            description="This exploration and analysis environment is an interactive space for users to visually examine data wintin a mapping environment and create time series of basic statistics for dataest layers."
            imgSrc={"https://biggardenfurniture.com.au/wp-content/uploads/2018/08/img-placeholder.png"}
            imgAlt="image of green wetlands"
            // footerContent={
            //   <div>
            //     <ArrowLink
            //       to={`${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(
            //         JSON.stringify({ Topics: "natural-emissions-and-sinks" })
            //       )}`}
            //     >
            //       Check out relevant datasets
            //     </ArrowLink>
            //   </div>
            // }
          />
        </li>
        <li>
          <KeypointCard
            linkLabel="View more"
            linkTo="https://hub.ghg.center"
            title="Jupyter Notebook"
            description="Jupyter Notebook enables analysis of massive archives of Earth science data in the cloud in an interactive environment that alleviates the complexifties of managing compute resources. Log in or request access here."
            imgSrc={"https://biggardenfurniture.com.au/wp-content/uploads/2018/08/img-placeholder.png"}
            imgAlt="image of colorful polygon against satellite landscape surface in brown"
            // footerContent={
            //   <div>
            //     <ArrowLink
            //       to={`${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(
            //         JSON.stringify({ Topics: "large-emission-events" })
            //         )}`}
            //         >
            //       Check out relevant datasets
            //     </ArrowLink>
            //   </div>
            // }
          />
        </li>
      </CardList>
    </KeypointsWrapper>
  );
}

export const HomeContent = styled(Hug)`
  padding: ${variableGlsp(2.5, 0)};
  grid-row-gap: ${variableGlsp(2)};

  ${media.mediumUp`
    grid-row-gap: ${variableGlsp(3)};
  `}
`;