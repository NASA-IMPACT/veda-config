import React from 'react';
import './UrbanEmissionsSpotlight.css';

import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { listReset, media, glsp, media } from "$veda-ui/@devseed-ui/theme-provider";
import Hug from "$veda-ui-scripts/styles/hug";
import { Card } from "$veda-ui-scripts/components/common/card";
import { CardFooter } from "$veda-ui-scripts/components/common/card/styles";
import { variableGlsp } from '$veda-ui-scripts/styles/variable-utils';

import { DATASETS_PATH } from "$veda-ui-scripts/utils/routes";
import { Actions } from "$veda-ui-scripts/components/common/browse-controls/use-browse-controls";

const UrbanEmissionsSpotlight = () => {
  return (
    <div className="spotlight-container">
      <img 
        src="https://nicholas.duke.edu/sites/default/files/styles/banner/public/images/Urban%20Environment.jpg" 
        alt="Urban Emissions" 
        className="spotlight-image" 
      />
      <div className="spotlight-text">
        <h2>Spotlight: Urban Emissions</h2>
        <p>
          Globally, cities are responsible for more than 70% of greenhouse gas emissions. Cities have the power to reduce emissions using policies that benefit the health of their citizens. The U.S. Greenhouse Gas Center welcomes a new set of tools aimed at supporting city decisionmakers.
        </p>
        <button className="explore-button"><a className="link" href="/stories/urban">Explore the Collection</a></button>
      </div>
    </div>
  );
}

export default UrbanEmissionsSpotlight;
