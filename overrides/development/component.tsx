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
        The current US GHG Center platform reflects an initial (v
        {process.env.APP_VERSION}) release that is subject to enhancements
        through future releases and updates.
      </p>
      <p>
        This US GHG Center platform is a collaborative effort involving equal
        contributions from EPA, NASA, NIST, and NOAA. We are grateful for the
        many third-party open source projects that have been used to develop and
        contribute to the US GHG Center.
      </p>
      <p>
        We welcome your feedback to help improve the platform. To share your
        thoughts, please click on the feedback button below or find the Feedback
        button available across the website.
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
          <CollecticonSpeechBalloon /> Feedback
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
    </FoldProse>
  );
}
