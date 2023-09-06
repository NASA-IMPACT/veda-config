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
        The current GHG Center Dashboard reflects an initial (v
        {process.env.APP_VERSION}) release of the platform that is subject to
        change with subsequent releases and updates.
      </p>

      <p>
        This GHG Center dashboard is built by the{" "}
        <a href="https://earthdata.nasa.gov/">
          NASA Earth Science Data Systems program
        </a>{" "}
        in collaboration with science teams and data providers from EPA, NIST,
        and NOAA. We are grateful for the many third-party open source projects
        that have been used to develop and contribute to the GHG Center.
      </p>

      <p>
        We welcome your feedback to help improve the GHG Center Dashboard. To do
        so, select the feedback button below or navigate to the Feedback button
        throughout the website.
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
