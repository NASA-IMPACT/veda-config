import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { NavLink } from "$veda-ui/react-router-dom";
import {
  themeVal,
  glsp,
  listReset,
  media,
} from "$veda-ui/@devseed-ui/theme-provider";
import { Button } from "$veda-ui/@devseed-ui/button";
import { format } from "$veda-ui/date-fns";
import { getString } from "veda";

import { Tip } from "$veda-ui-scripts/components/common/tip";
import { variableGlsp } from "$veda-ui-scripts/styles/variable-utils";
import {
  STORIES_PATH,
  DATASETS_PATH,
  ANALYSIS_PATH,
  ABOUT_PATH,
} from "$veda-ui-scripts/utils/routes";
import { useFeedbackModal } from "$veda-ui-scripts/components/common/layout-root";
import { useMediaQuery } from "$veda-ui-scripts/utils/use-media-query";

const FooterInner = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  width: 100%;
  margin: ${variableGlsp(-0.75, -1)};
`;

const FooterContent = styled.div`
  box-shadow: inset 0 -1px 0 0 ${themeVal("color.base-100a")};
  padding: ${variableGlsp(1.5, 1)};
`;

const FooterMenu = styled.ul`
  ${listReset()}
  display: flex;
  flex-flow: row wrap;
  gap: ${glsp(0.5, 1)};

  ${media.mediumUp`
    justify-content: flex-start;
    align-items: center;
    gap: ${glsp(3)};
  `}

  li:last-child {
    ${media.mediumUp`
      margin-left: auto;
    `}
  }
`;

const FooterMenuLink = styled(NavLink)`
  font-weight: ${themeVal("type.base.regular")};
  text-decoration: none;
  font-size: 0.875rem;
  text-transform: ${themeVal("button.type.case")};

  &:hover {
    text-decoration: underline;
  }
`;

const FooterContacts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${variableGlsp(1)};
  gap: ${glsp()};
  flex-flow: column;

  ${media.mediumUp`
    flex-flow: row nowrap;
  `}
`;

const CreditsInfo = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${glsp(0.25)};
`;

export default function PageFooter(props) {
  const nowDate = new Date();
  const { isMediumUp } = useMediaQuery();

  const { show } = useFeedbackModal();

  return (
    <FooterInner>
      <FooterContent>
        <nav>
          <FooterMenu>
            <li>
              <FooterMenuLink to={DATASETS_PATH}>Data Catalog</FooterMenuLink>
            </li>
            <li>
              <FooterMenuLink to={ANALYSIS_PATH}>Analysis</FooterMenuLink>
            </li>
            <li>
              <FooterMenuLink to={STORIES_PATH}>
                {getString("stories").other}
              </FooterMenuLink>
            </li>
            {!!process.env.HUB_URL && !!process.env.HUB_NAME && (
              <li>
                <FooterMenuLink as="a" href={process.env.HUB_URL}>
                  {process.env.HUB_NAME}
                </FooterMenuLink>
              </li>
            )}
            <li>
              <FooterMenuLink to={ABOUT_PATH}>About</FooterMenuLink>
            </li>
            <li>
              {isMediumUp ? (
                <Button
                  variation="primary-outline"
                  size="large"
                  onClick={(e) => {
                    e.preventDefault();
                    show();
                  }}
                >
                  Contact Us
                </Button>
              ) : (
                <FooterMenuLink
                  as="a"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    show();
                  }}
                >
                  Contact Us
                </FooterMenuLink>
              )}
            </li>
          </FooterMenu>
        </nav>
      </FooterContent>
      <FooterContacts>
        <div>
          <a href="/">
            <span>By</span> <strong>U.S. GHG Center</strong> <span>on</span>{" "}
            <time dateTime={String(nowDate.getFullYear())}>
              {nowDate.getFullYear()}
            </time>
          </a>
          {" • "}
          <Tip
            content={`Released on ${format(
              new Date(+props.appBuildTime),
              "PPPP"
            )} (veda-ui v${props.appUiVersion})`}
          >
            <span>v{props.appVersion}</span>
          </Tip>
        </div>
        <CreditsInfo>
          <p>
            U.S. Greenhouse Gas Center Responsible Official:{" "}
            <a
              href="https://appliedsciences.nasa.gov/about/our-team/argyro-kavvada"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Argyro Kavvada</strong>
            </a>
          </p>
        </CreditsInfo>
      </FooterContacts>
    </FooterInner>
  );
}
