import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { NavLink } from "$veda-ui/react-router-dom";
import {
  themeVal,
  glsp,
  listReset,
  media,
} from "$veda-ui/@devseed-ui/theme-provider";
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

const FooterInner = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  width: 100%;
  margin: ${variableGlsp(-0.75, -1)};
`;

const FooterContent = styled.div`
  display: flex;
  gap: ${glsp(1)};
  flex-flow: column;
  box-shadow: inset 0 -1px 0 0 ${themeVal("color.base-100a")};
  padding: ${variableGlsp(1.5, 1)};

  ${media.mediumUp`
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  `}
`;

const FooterBrand = styled.p`
  font-weight: ${themeVal("type.base.bold")};
  text-transform: uppercase;
`;

const Credits = styled.div`
  padding: ${variableGlsp(0.75, 1)};
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

export default function PageFooter(props) {
  const nowDate = new Date();

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
              <FooterMenuLink
                as="a"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  show();
                }}
              >
                Give Feedback
              </FooterMenuLink>
            </li>
          </FooterMenu>
        </nav>
      </FooterContent>
      <Credits>
        <a href="https://earthdata.nasa.gov/">
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
      </Credits>
    </FooterInner>
  );
}
