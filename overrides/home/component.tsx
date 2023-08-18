import React from "$veda-ui/react";
import Block from "$veda-ui-scripts/components/common/blocks";
import { ContentBlockProse } from "$veda-ui-scripts/styles/content-block";

import Audience from "./audience";
import ValueProposition from "./value-proposition";
import Partners from "./partners";

export default function HomeComponent() {
  return (
    <>
      <Block>
        <ContentBlockProse>
          <h2>Welcome</h2>
          
          <Partners />

          <p>
            The U.S. GHG Center is a one-stop data and analysis system for
            exploring and analyzing U.S. government and other curated datasets.
            Three primary demonstration areas are used to organize and introduce
            the data included in the center for this release.
          </p>
        </ContentBlockProse>
      </Block>
      <Audience />
      <ValueProposition />
    </>
  );
}
