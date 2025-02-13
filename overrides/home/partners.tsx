import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";

import Image from "$veda-ui-scripts/components/common/blocks/images";
import { media } from "$veda-ui/@devseed-ui/theme-provider";

import { getLinkProps } from "$veda-ui-scripts/utils/url";

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
  ${media.mediumDown`
    gap: 1rem;
  `}
`;

export default function Partners(props: {
  variation: "positive" | "negative";
  size: "big" | "small"
}) {
  const { variation, size } = props;
  const squareLogoHeight = size == "big"? "80" : "40"
  const wideLogoHeight = size == "big"? "28" : "14"

  return (
    <LogoWrapper>
      <a {...getLinkProps("https://www.nasa.gov/")}>
        <Image src={nasaImg} alt="NASA logo" height={squareLogoHeight} />
      </a>
      <a {...getLinkProps("https://www.epa.gov/")}>
        <Image src={epaImg} alt="EPA logo" height={squareLogoHeight} />
      </a>
      <a {...getLinkProps("https://www.nist.gov/")}>
        {variation === "positive" ? (
          <Image src={nistImg} alt="NIST logo" height={wideLogoHeight} />
        ) : (
          <Image src={nistImgNeg} alt="NIST logo" height={wideLogoHeight} />
        )}
      </a>

      <a {...getLinkProps("https://www.noaa.gov/")}>
        <Image src={noaaImg} alt="NOAA logo" height={squareLogoHeight} />
      </a>
    </LogoWrapper>
  );
}
