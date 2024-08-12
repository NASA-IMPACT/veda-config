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

import UrbanEmissionsSpotlight from "./spotlight";


export default function HomeComponent() {  
  return (
    <>
      <h1>Content Collections by Topic</h1>
      <UrbanEmissionsSpotlight />

      <h1>Core Science Focus Areas</h1>
      <p>The GHG Center includes three core science focus areas. How to get involved? For the latest, subscribe to our email newsletter.</p>

      <Keypoints data={focusAreasSansDatasets} />
    </>
  );
}
