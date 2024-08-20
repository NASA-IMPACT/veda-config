import React from "$veda-ui/react";
import { NavLink } from "$veda-ui/react-router-dom";
import styled from "$veda-ui/styled-components";
import { glsp, themeVal, media } from "$veda-ui/@devseed-ui/theme-provider";
import { Button } from "$veda-ui/@devseed-ui/button";
import { CollecticonArrowRight, CollecticonCirclePlay } from "$veda-ui/@devseed-ui/collecticons";
import Hug from "$veda-ui-scripts/styles/hug";
import { VarHeading } from "$veda-ui-scripts/styles/variable-components";
import { variableGlsp } from "$veda-ui-scripts/styles/variable-utils";

import Keypoints from "../../common/keypoints";
import { focusAreasSansDatasets } from "../../common/constants";
import { FitContainer, P, SectionContainer, Title } from "../../common/styled-components";

import UrbanEmissionsSpotlight from "./spotlight";


export default function HomeComponent() {  
  return (
    <FitContainer>
      <SectionContainer>
        <Title>Content Collections by Topic</Title>
        <UrbanEmissionsSpotlight />
      </SectionContainer>

      <SectionContainer>
        <Title>Core Science Focus Areas</Title>
        <P>The GHG Center includes three core science focus areas. How to get involved? For the latest, subscribe to our email newsletter.</P>
        <Keypoints data={focusAreasSansDatasets} />
      </SectionContainer>

    </FitContainer>
  );
}
