import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";

import {
  FoldHeader,
  FoldTitle,
  FoldBody,
  FoldLead,
  FoldGrid,
} from "$veda-ui-scripts/components/common/fold";
import {
  ContentBlockPFAlpha,
  ContentBlockPFBeta,
} from "$veda-ui-scripts/components/common/blocks";
import ContentBlockFigure from "$veda-ui-scripts/components/common/blocks/figure";
import { ContentBlockProse } from "$veda-ui-scripts/styles/content-block";
import BrowserFrame from "$veda-ui-scripts/styles/browser-frame";

import imgVP01 from "./media/vp1.png";
import imgVP02 from "./media/vp2.png";

const ContentBlockProseAlt = styled(ContentBlockProse)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    &:first-child::before {
      display: none;
    }
  }
`;

const FoldValueProposition = styled(FoldGrid)`
  ${FoldHeader} {
    grid-column: content-start / content-end;
  }
`;

function ValueProposition() {
  return (
    <FoldValueProposition>
      <FoldHeader>
        <FoldTitle>How to Get Started</FoldTitle>
        <FoldLead>
          Various ways to use the center to learn about and interact with U.S.
          government GHG data.
        </FoldLead>
      </FoldHeader>
      <FoldBody>
        <ContentBlockPFBeta>
          <ContentBlockProseAlt>
            <h3>Browse the Data Catalog</h3>
            <p>
              Scientist-curated greenhouse gas datasets provided with detailed
              information and links to other resources.
            </p>
          </ContentBlockProseAlt>
          <ContentBlockFigure>
            <BrowserFrame>
              <img src={imgVP01} alt="Screenshot of VEDA in action." />
            </BrowserFrame>
          </ContentBlockFigure>
        </ContentBlockPFBeta>

        <ContentBlockPFAlpha>
          <ContentBlockFigure>
            <BrowserFrame>
              <img src={imgVP02} alt="Screenshot of VEDA in action." />
            </BrowserFrame>
          </ContentBlockFigure>
          <ContentBlockProseAlt>
            <h3>Explore dataset on a map environment</h3>
            <p>
              Visualize the data in a map environment to see spatial
              relationships.
            </p>
          </ContentBlockProseAlt>
        </ContentBlockPFAlpha>
      </FoldBody>
    </FoldValueProposition>
  );
}

export default ValueProposition;
