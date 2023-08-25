import React, { useLayoutEffect } from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { glsp, themeVal } from "$veda-ui/@devseed-ui/theme-provider";
import { Link } from "$veda-ui/react-router-dom";
import { Helmet } from "$veda-ui/react-helmet";

import GHGLogo from "./ghg-logo";

const Brand = styled.div`
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
  padding: ${glsp(0.5, 0.875)};
  background: ${themeVal("color.surface")};
  color: ${themeVal("color.primary")};
  
  span {
    font-weight: ${themeVal("type.base.bold")};
    text-transform: uppercase;
    letter-spacing: -0.025em;
    font-size: 1rem;
    line-height: 1.125rem;
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
          <span>U.S.</span>
          <span>GHG</span>
          <span>Center</span>
        </Logo>
      </Link>
    </Brand>
  );
}
