import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";

import Image from "$veda-ui-scripts/components/common/blocks/images";

import epaImg from "../media/epa.svg";
import nasaImg from "../media/nasa.png";
import nistImg from "../media/nist.png";
import nistImgNeg from "../media/nist-neg.png";
import noaaImg from "../media/noaa.png";

const LogoWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-flow: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  > * {
    flex-shrink: 0;
  }
`;

export default function Partners(props: {
  variation: "positive" | "negative";
}) {
  const { variation } = props;

  return (
    <LogoWrapper>
      <a href="https://www.epa.gov/">
        <Image src={epaImg} alt="EPA logo" height="80" />
      </a>

      <a href="https://www.nasa.gov/">
        <Image src={nasaImg} alt="NASA logo" height="80" />
      </a>

      <a href="https://www.nist.gov/">
        {variation === "positive" ? (
          <Image src={nistImg} alt="NIST logo" height="28" />
        ) : (
          <Image src={nistImgNeg} alt="NIST logo" height="28" />
        )}
      </a>

      <a href="https://www.noaa.gov/">
        <Image src={noaaImg} alt="NOAA logo" height="80" />
      </a>
    </LogoWrapper>
  );
}
