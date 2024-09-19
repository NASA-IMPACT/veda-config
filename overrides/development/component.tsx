import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { Button } from "$veda-ui/@devseed-ui/button";
import {
  CollecticonSpeechBalloon,
  CollecticonBrandGithub,
} from "$veda-ui/@devseed-ui/collecticons";
import { variableGlsp } from "$veda-ui-scripts/styles/variable-utils";
import { useFeedbackModal } from "$veda-ui-scripts/components/common/layout-root";
import { FoldProse } from "$veda-ui-scripts/components/common/fold";

const ContributeCta = styled.div`
  display: flex;
  gap: ${variableGlsp()};
`;

export default function Component() {
  const { show: showFeedbackModal } = useFeedbackModal();

  return (
    <FoldProse>
      <p>
      The current U.S. Greenhouse Gas Center portal reflects a final beta release (v{process.env.APP_VERSION}) available September 19, 2024. While in beta mode, the portal will undergo additional design changes and content additions. The currently available greenhouse gas information is accurate and ready to be used for research and decision making.
      </p>
      <p>
      We welcome your feedback to improve the US GHG Center. To share your thoughts, please click the Contact Us 
      button below or use the Contact Us button in the top right or bottom right area of all Center web pages.
      </p>
      <p>
      If you would like to hear about more GHG Center updates, please sign up for our subscription email list 
      using the subscribe link at the bottom of any page.
      </p>
      <ContributeCta>
        <Button
          size="large"
          fitting="relaxed"
          variation="primary-fill"
          onClick={() => {
            showFeedbackModal();
          }}
        >
          <CollecticonSpeechBalloon /> Contact Us
        </Button>
        <Button
          size="large"
          fitting="relaxed"
          forwardedAs="a"
          href="https://github.com/NASA-IMPACT/veda-config-ghg/releases"
          variation="primary-fill"
        >
          <CollecticonBrandGithub /> Releases
        </Button>
      </ContributeCta>
      <h2>Disclaimer</h2>
      <p>
      This U.S. Greenhouse Gas Center contains data from various US government agencies and other organizations. Some of the datasets available are from research efforts and others consist of regulatory data. Data users are advised to examine each dataset landing page for important information, documentation, disclaimers, acknowledgments and citations. 
      </p> 
      <p>
      The US GHG Center is fully open and data can be used freely as specified by individual dataset disclaimers. Please acknowledge the dataset and data producers if sharing data, images, or information. 
      </p>  
      <p>
      Every effort has been made to carefully incorporate accurate and curated data in the Center. Dataset providers reserve the right to make corrections to data based on recalibration of standard gases or for other reasons deemed scientifically justified. Providers of the datasets included in the US GHG Center are not responsible for user results and conclusions based on the use of products without regard to this disclaimer. Content may change over time as the Center is still in development.
      </p>                   
    </FoldProse>    
  );
}
