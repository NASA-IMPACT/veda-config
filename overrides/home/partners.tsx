import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";

import Image from "$veda-ui-scripts/components/common/blocks/images";

export const LogoWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 1rem;
  align-items: center;

  > * {
    flex-shrink: 0;
  }
`;

export const Hr = styled.hr`
  border: 0;
  width: 100%;
  max-width: 2rem;
  height: 0.25rem;
  background: grey;
  opacity: 0.32;
  border-radius: 900rem;
`;

export default function Partners() {
  return (
    <LogoWrapper>
      <a href="https://www.epa.gov/">
        <Image
          src={new URL("../media/epa.svg", import.meta.url).href}
          alt="EPA logo"
          width="80"
        />
      </a>

      <a href="https://www.nasa.gov/">
        <Image
          src={new URL("../media/nasa.png", import.meta.url).href}
          alt="NASA logo"
          width="105"
        />
      </a>

      <a href="https://www.nist.gov/">
        <Image
          src={new URL("../media/nist.png", import.meta.url).href}
          alt="NIST logo"
          width="250"
        />
      </a>

      <a href="https://www.noaa.gov/">
        <Image
          src={new URL("../media/noaa.png", import.meta.url).href}
          alt="NOAA logo"
          width="95"
        />
      </a>
    </LogoWrapper>
  );
}
