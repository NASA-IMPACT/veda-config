import React, { useState } from '$veda-ui/react'
import { Button } from "$veda-ui/@devseed-ui/button";
import { CollecticonXmarkSmall } from "$veda-ui/@devseed-ui/collecticons";
import styled from '$veda-ui/styled-components';
import {
  glsp,
  media,
  themeVal
} from '$veda-ui/@devseed-ui/theme-provider';
import Hug from "$veda-ui-scripts/styles/hug";
import { getString } from 'veda';

const BANNER_KEY = 'dismissedBannerUrl'

const BannerBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  
  background-color: #C75D61;
  text-align: center;
  font-size: 1rem;

  a {
    color: ${themeVal('color.surface')};
  }
`

const BannerContainer = styled(Hug)`
  width: 100%;
  padding: ${glsp(0, 0.25)};
  ${media.mediumDown`
    padding: ${glsp(0.25, 0.25)};
  `}
`;

const BannerContent = styled.div`
  grid-column: content-start / content-end;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-weight: 600;
  ${media.mediumDown`
    text-align: left;
    font-size: 0.75rem;
  `}
  a:link, a:visited {
    color: white;
  }
`

export default function Banner() {
  const bannerUrl = getString('tempBannerUrl')?.other || "";
  const showBanner = (localStorage.getItem(BANNER_KEY) !== bannerUrl) && !!getString('tempBanner')?.other
  const [ showTempBanner, setShowTempBanner ] = useState(showBanner);

  function onClick () {
    localStorage.setItem(
      BANNER_KEY,
      bannerUrl
    );
    setShowTempBanner(false);
  }

  return (showTempBanner && 
      <BannerBox className="banner">
        <BannerContainer>
          <BannerContent>
            <a href={getString('tempBannerUrl')?.other || "" } target="_blank"> 
              { getString('tempBanner').other }
            </a>
            <Button onClick={onClick} variation="base-text" fitting="skinny">
              <CollecticonXmarkSmall title="Dismiss banner" color="white" meaningful />
            </Button>
            </BannerContent>
          </BannerContainer>
      </BannerBox>
  )
}
