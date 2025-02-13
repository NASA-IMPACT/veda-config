import React, { useLayoutEffect } from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { glsp, themeVal } from "$veda-ui/@devseed-ui/theme-provider";
import { Link } from "$veda-ui/react-router-dom";

import coverImgSrc from "./NASA_DISASTERS_LOGO_WHITE_TYPE-mapping-portal_small.png";


const Brand = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${glsp()};

  a {
    &,
    &:visited {
      color: inherit;
      text-decoration: none;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  flex-flow: column;
`;

const VersionInfoLink = styled(Link)`
  position: absolute;
  top: 0;
  right: -1rem;
  transform: translateY(-50%);
  background: ${themeVal("color.primary-700")};
  color: ${themeVal("color.surface")};
  padding: ${glsp(0.125, 0.5)};
  text-transform: uppercase;
  font-size: 0.875rem;
  transition: background 160ms ease-in-out;

  &:hover {
  background: ${themeVal("color.primary-900")};
  }
`;

export default function HeaderComponent() {
  useLayoutEffect(() => {
    const link = document.createElement("link");
    link.setAttribute(
      "href",
      "https://fonts.googleapis.com/css2?family=Inter:slnt,wght@-10..0,100..900&display=swap"
    );
    link.setAttribute("rel", "stylesheet");
    document.head.appendChild(link);
  }, []);

  return (
    <Brand>
      <Link to="/">
        <Logo>
          <img
            src={coverImgSrc}
            alt="visualizaion of january 2021 global atmospheric carbon dioxide"
            width={250}
          />
        </Logo>
      </Link>
      {/* <VersionInfoLink to='/development'>Beta</VersionInfoLink> */}
    </Brand>
  );
}
