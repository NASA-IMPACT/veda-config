import React from "$veda-ui/react";
// import { NavLink } from "$veda-ui/react-router-dom";
import styled from "$veda-ui/styled-components";
import { media } from "$veda-ui/@devseed-ui/theme-provider";
// import { Button } from "$veda-ui/@devseed-ui/button";
// import { CollecticonArrowRight, CollecticonCirclePlay } from "$veda-ui/@devseed-ui/collecticons";
import Hug from "$veda-ui-scripts/styles/hug";
// import { VarHeading } from "$veda-ui-scripts/styles/variable-components";
import { variableGlsp } from "$veda-ui-scripts/styles/variable-utils";

import Keypoints from "./keypoints";
import { KeypointsData } from "./keypoints";

const HomeContent = styled(Hug)`
  padding: ${variableGlsp(2.5, 0)};
  grid-row-gap: ${variableGlsp(2)};

  ${media.mediumUp`
    grid-row-gap: ${variableGlsp(3)};
  `}
`;

// const KeypointCard = styled(Card)`
//   ${media.mediumUp`
//     font-size: 1.125rem;
//   `}
// `

export default function Component() {
    return (
      <HomeContent>
        <div>
          <h1> Engage with data </h1>
        </div>
        <KeypointsData></KeypointsData>
        <div>
          <h1> Core Science Focus Areas </h1>
        </div>

        <Keypoints></Keypoints>
      </HomeContent>
    )
}