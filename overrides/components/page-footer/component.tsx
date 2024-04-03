import React, { useState, useEffect, useCallback } from "$veda-ui/react";
import { useLocation } from "$veda-ui/react-router-dom";
import styled from "$veda-ui/styled-components";
import { NavLink, Link } from "$veda-ui/react-router-dom";
import { Modal, ModalHeadline, ModalFooter } from "$veda-ui/@devseed-ui/modal";
import { FormCheckable } from "$veda-ui/@devseed-ui/form";
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
import Partners from "../../home/partners";
import { AccessibilityMenuItem } from "../../common/styles";
import { CollecticonExpandTopRight } from '$veda-ui/@devseed-ui/collecticons';

const PRESS_PATH = '/learn#press';


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

const FooterMenuLink = styled(AccessibilityMenuItem)`
  font-weight: ${themeVal("type.base.regular")};
  font-size: 0.875rem;
  text-transform: ${themeVal("button.type.case")};
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

const TintBox = styled.div`
  display: flex;
  justify-content: flex-end;
  filter: grayscale(100%);
  ${media.smallDown`
    justify-content: center;
  `}
`;

const ModalBodyInner = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: ${variableGlsp()};
`;

const DisclaimerModalFooter = styled(ModalFooter)`
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  margin-top: ${glsp(2)};
`;

const AccessibilityStatementLink = styled.a`
  color: ${themeVal("color.link")} !important;
  text-decoration: underline;
  text-underline-offset: 2px;
  display: inline-flex;
  align-items: center;
  margin-top: ${glsp(1.0)};

  > svg {
    margin-left: ${glsp(0.5)};
  }
`;

const DISCLAIMER_MODALS_DISMISSED_KEY = "disclaimerModalsDismissedKey";
const EXPLORE_PATH = "/explore";

const MODALS_CONTENT = {
  [EXPLORE_PATH]: {
    headline: "Disclaimer",
    body: (
      <p>
        This US GHG Center Explore visualization environment is an interactive
        space for users to explore center data within a mapping environment.
        Currently only one dataset at a time can be used within the environment.
        Users are advised to review the material on the Overview page to better
        understand the documentation pertaining to the data they are viewing.
      </p>
    ),
  },
  [ANALYSIS_PATH]: {
    headline: "Disclaimer",
    body: (
      <p>
        This US GHG Center analysis environment is an interactive space for
        users to review time series of basic statistics for each dataset. All
        users are advised to review the information provided on the dataset
        landing page to better understand the data they are viewing. This
        environment is intended to provide a means to explore temporal patterns
        and is not intended for use in rigorous scientific data analysis.
      </p>
    ),
  },
};

export default function PageFooter(props) {
  const nowDate = new Date();
  const { isMediumUp } = useMediaQuery();

  const { show } = useFeedbackModal();

  // Open that disclaimer modal here
  const { pathname } = useLocation();
  const currentPage = (pathname.match(/\/[^/]+$/)?.[0] as string) || "";

  const [modalRevealed, setModalRevealed] = useState(true);
  useEffect(() => {
    setModalRevealed(true);
  }, [currentPage]);
  const [dontShowAgain, setDontShowAgain] = useState(true);
  const [modalsDismissed, setModalsDismissed] = useState({
    [EXPLORE_PATH]: false,
    [ANALYSIS_PATH]: false,
  });

  useEffect(() => {
    const modalsDismissedRaw = localStorage.getItem(
      DISCLAIMER_MODALS_DISMISSED_KEY
    );
    try {
      if (modalsDismissedRaw) {
        setModalsDismissed(JSON.parse(modalsDismissedRaw));
      }
    } catch (e) {
      /* eslint-disable-next-line no-console */
      console.error(e);
    }
  }, [currentPage]);

  const onConfirmClick = useCallback(() => {
    setModalRevealed(false);
    const newModalsDismissed = {
      ...modalsDismissed,
      [currentPage]: dontShowAgain,
    };
    setModalsDismissed(newModalsDismissed);
    localStorage.setItem(
      DISCLAIMER_MODALS_DISMISSED_KEY,
      JSON.stringify(newModalsDismissed)
    );
  }, [modalRevealed, dontShowAgain, currentPage]);

  const showModal = modalRevealed && modalsDismissed[currentPage] === false;

  return (
    <>
      {MODALS_CONTENT[currentPage] && (
        <Modal
          id="disclaimer"
          size="medium"
          revealed={showModal}
          onCloseClick={(e) => {
            setModalRevealed(false);
          }}
          renderHeadline={() => (
            <ModalHeadline>
              <h2>{MODALS_CONTENT[currentPage].headline}</h2>
            </ModalHeadline>
          )}
          content={
            <ModalBodyInner>{MODALS_CONTENT[currentPage].body}</ModalBodyInner>
          }
          renderFooter={() => (
            <DisclaimerModalFooter>
              <FormCheckable
                type="checkbox"
                id="dontShowAgain"
                name="dontShowAgain"
                checked={dontShowAgain}
                value="dontShowAgain"
                onChange={(e) => {
                  setDontShowAgain(e.target.checked);
                }}
              >
                Don't show again
              </FormCheckable>
              <Button
                variation="primary-fill"
                // disabled={!featureCollection}
                onClick={onConfirmClick}
              >
                I understand
              </Button>
            </DisclaimerModalFooter>
          )}
        />
      )}
      <FooterInner>
        <FooterContent>
          <nav>
            <FooterMenu>
              <li>
                <FooterMenuLink to={DATASETS_PATH}>Data Catalog</FooterMenuLink>
              </li>
              <li>
                <FooterMenuLink to={ANALYSIS_PATH}>
                  Data Analysis
                </FooterMenuLink>
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
                <FooterMenuLink to={PRESS_PATH}>Press Info</FooterMenuLink>
              </li>
              <li>
                <FooterMenuLink as="a" href="https://docs.google.com/forms/d/e/1FAIpQLSfDxq_jR3z_006WkUnNKriGFlAdXhiZxC0ppkxV9fDXSM_FxQ/viewform">
                  Subscribe
                </FooterMenuLink>
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
            <div>
              <Link to="/">
                <span>By</span> <strong>US GHG Center</strong> <span>on</span>{" "}
                <time dateTime={String(nowDate.getFullYear())}>
                  {nowDate.getFullYear()}
                </time>
              </Link>
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
            <AccessibilityStatementLink href="https://www.nasa.gov/accessibility/" target='_blank' rel='noopener'>
              Our commitment to accessibility <CollecticonExpandTopRight />
            </AccessibilityStatementLink>
          </div>
          <CreditsInfo>
            <TintBox>
              <Partners variation="positive" size="small" />
            </TintBox>
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
    </>
  );
}
