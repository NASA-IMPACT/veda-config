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
    display: flex;
    align-items: center;
    gap: ${glsp(0.25)};

    &,
    &:visited {
      color: inherit;
      text-decoration: none;
    }

    span {
      font-size: 1.5rem;
      line-height: 1.5rem;
      font-weight: ${themeVal("type.base.bold")};
      letter-spacing: -0.025em;
    }
  }

  img {
    width: 3rem;
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
        <GHGLogo />
        <span>U.S. Greenhouse Gas Center</span>
      </Link>
    </Brand>
  );
}
