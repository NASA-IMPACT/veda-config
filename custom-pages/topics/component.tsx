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
import { Title } from "../../common/styled-components";

import UrbanEmissionsSpotlight from "./spotlight";


export default function HomeComponent() {  
  return (
    <div style={{display: "flex", flexDirection: "column",  padding: "12px 13vw", margin: "12px"}}>
      <Title>Content Collections by Topic</Title>
      <UrbanEmissionsSpotlight />

      <Title>Core Science Focus Areas</Title>
      <p>The GHG Center includes three core science focus areas. How to get involved? For the latest, subscribe to our email newsletter.</p>

      <Keypoints data={focusAreasSansDatasets} />
    </div>
  );
}
