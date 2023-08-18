import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import {
  listReset,
  media,
  themeVal,
} from "$veda-ui/@devseed-ui/theme-provider";

import imgLeft from "./media/audience2.png";
import imgCenter from "./media/audience1.png";
import imgRight from "./media/audience3.png";

import {
  Fold,
  FoldBody,
} from "$veda-ui-scripts/components/common/fold";
import { Figure } from "$veda-ui-scripts/components/common/figure";
import { VarProse } from "$veda-ui-scripts/styles/variable-components";
import { variableGlsp } from "$veda-ui-scripts/styles/variable-utils";

const BlockAudience = styled.article`
  display: flex;
  flex-flow: column nowrap;
  gap: ${variableGlsp()};
  text-align: center;
`;

const BlockAudienceMedia = styled(Figure)`
  order: -1;
  overflow: hidden;
  border-radius: ${themeVal("shape.ellipsoid")};
`;

const AudienceList = styled.ul`
  ${listReset()};
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${variableGlsp()};

  ${media.smallUp`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.largeUp`
    grid-template-columns: repeat(3, 1fr);
  `}

  li {
    padding: ${variableGlsp(0, 2)};
  }
`;

function Audience() {
  return (
    <Fold>
      <FoldBody>
        <AudienceList>
          <li>
            <BlockAudience>
              <VarProse>
                <h3>Anthropogenic GHG Emissions</h3>
                <p>
                  Human-related carbon dioxide or methane gas emissions from
                  activities in various sectors such as energy, agriculture,
                  waste, and industry.
                </p>
              </VarProse>
              <BlockAudienceMedia>
                <img
                  src={imgLeft}
                  alt="Methane fossil fuel exploitation over east USA"
                />
              </BlockAudienceMedia>
            </BlockAudience>
          </li>

          <li>
            <BlockAudience>
              <VarProse>
                <h3>Natural GHG Sources</h3>
                <p>
                  Land, ocean and atmosphere sources of carbon dioxide or
                  methane gas
                </p>
              </VarProse>
              <BlockAudienceMedia>
                <img src={imgCenter} alt="Arctic methane sea ice" />
              </BlockAudienceMedia>
            </BlockAudience>
          </li>

          <li>
            <BlockAudience>
              <VarProse>
                <h3>Large GHG Emission Events</h3>
                <p>
                  Point source locations and methane plume extent from specific
                  events
                </p>
              </VarProse>
              <BlockAudienceMedia>
                <img src={imgRight} alt="Methane plume" />
              </BlockAudienceMedia>
            </BlockAudience>
          </li>
        </AudienceList>
      </FoldBody>
    </Fold>
  );
}

export default Audience;
