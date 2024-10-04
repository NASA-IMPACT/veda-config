import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { glsp } from "$veda-ui/@devseed-ui/theme-provider";
import {
  Card
} from "$veda-ui-scripts/components/common/card";


import {
  Continuum,
  ContinuumGridItem,
  ContinuumCardsDragScrollWrapper,
  ContinuumDragScroll
} from '$veda-ui-scripts/styles/continuum';
import { ContinuumScrollIndicator } from '$veda-ui-scripts/styles/continuum/continuum-scroll-indicator';
import { useReactIndianaScrollControl } from '$veda-ui-scripts/styles/continuum/use-react-indiana-scroll-controls';
import { continuumFoldStartCols } from '$veda-ui-scripts/components/common/featured-slider-section'
import { Pill } from '$veda-ui-scripts/styles/pill';


export const continuumFoldSpanCols = {
  smallUp: 4,
  mediumUp: 4,
  largeUp: 4
};


const StyledContinuumCardsDragScrollWrapper = styled(ContinuumCardsDragScrollWrapper)`
  // @NOTE: There is a bug that wrapper's height doesn't respect the child's padding 
  // when there is only one item in the list
  ${(props) => props.itemsN === 1 ? `padding-bottom: 1rem` : ``};
`

const StyledCard = styled(Card)`
  box-shadow: 0 0 2px 0 rgba(44,62,80,0.08),0 6px 6px 0 rgba(44,62,80,0.08);
  
  h3:first-child {
    margin-bottom: 0;
    &:before {
      content: none;
    }
  }

  img {
    max-height: 250px;
  }

  h3 {
    font-size: 1.125rem;
  }
  p {
    font-size: 1rem;
  }

`

const StyledContinuum = styled(Continuum)`
  ol {
    margin-left: 0.5rem;
  }
`;


export function getEventTemporalState(startDate, endDate) {
  // Convert start and end dates to Date objects
  const startDateTime = new Date(startDate + 'T00:00:00-05:00'); // Assuming EST (UTC-5)
  const endDateTime = new Date(endDate + 'T23:59:59-05:00'); // Assuming EST (UTC-5)

  // Get current date and time in EST
  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() - 5);
  // Check if current date is within the range
  if (startDateTime <= currentDate && currentDate <= endDateTime) return 'Current'
  else if (currentDate > endDateTime) return 'Past'
  else return 'Upcoming'
}

export function EventsComponent ({items}) {
  const { isScrolling, scrollProps } = useReactIndianaScrollControl();

  return (<StyledContinuumCardsDragScrollWrapper itemsN={items.length}>
    <ContinuumScrollIndicator />
    <ContinuumDragScroll hideScrollbars={false} {...scrollProps}>
      <StyledContinuum
        id="continuum"
        listAs='ol'
        startCol={continuumFoldStartCols}
        spanCols={continuumFoldSpanCols}
        render={(bag) => {
          return items.map((d) => {
            
            // const date = new Date(d[dateProperty ?? '']);
            // const topics = getTaxonomy(d, TAXONOMY_TOPICS)?.values;
            const timeStatus = (d.startDate && d.endDate)? getEventTemporalState(d.startDate, d.endDate): null
            
            return (
              <ContinuumGridItem {...bag} key={d.name}>
                <StyledCard
                  onCardClickCapture={(e) => {
                    // If the user was scrolling and let go of the mouse on top of a
                    // card a click event is triggered. We capture the click on the
                    // parent and never let it reach the link.
                    if (isScrolling) {
                      e.preventDefault();
                    }
                  }}
                  linkLabel='View more'
                  linkTo={d.asLink?.url}
                  title={d.name}
                  description={d.description}
                  imgSrc={d.media?.src}
                  imgAlt={d.media?.alt}
                  footerContent=
                    {timeStatus && 
                      <Pill variation='primary'>{timeStatus}</Pill>
                    }
                />
              </ContinuumGridItem>
            );
          });
        }}
      />
    </ContinuumDragScroll>
  </StyledContinuumCardsDragScrollWrapper>
  )
};