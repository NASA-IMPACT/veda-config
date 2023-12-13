import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { glsp, media } from "$veda-ui/@devseed-ui/theme-provider";
import { Fold, FoldBody } from "$veda-ui-scripts/components/common/fold";
import {
  Card,
  CardList
} from "$veda-ui-scripts/components/common/card";

import AnchorScroll from './AnchorScroll'

const FoldSection = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: ${glsp(2)};
`;

const FlexibleListWrapper = styled(CardList)`
  ${media.largeUp`
    grid-template-columns: ${(props) => (props.cardAmount %2 ==0 ? "repeat(2, 1fr)" : "repeat(3, 1fr)")}
  `}
`

const StyledCard = styled(Card)`
  h3:first-child {
    margin-bottom: 0;
    &:before {
      content: none;
    }
  }

  h3 {
    font-size: 1.125rem;
  }
  p {
    font-size: 1rem;
  }
`

const CardFooter = styled.div`
  font-size: 1rem;
`


const StyledNewsItem = styled.div`
  h3:first-child:before {
    content: none;
  }
  h3 {
    font-size: 1.125rem;
  }
  p {
    font-size: 1rem;
  }

  border: 1px solid grey;
  padding: ${glsp(1)}
`

function NewsItem({item}) {
  return (<StyledNewsItem>
    <a href={item.link}>
      <h3>{item.title}</h3>
    </a>
    <p>{item.description}</p>
  </StyledNewsItem>)
}

export function NewsComponent ({items}) {
  return (
    <FlexibleListWrapper>
      {items.map(item => {
        return <NewsItem item={item} />
      })}
    </FlexibleListWrapper>
  )
}

function EventItem({t}) {
  return (
    <StyledCard 
      linkLabel="View more"
      linkTo={t.asLink?.url?? `/stories/${t.id}`}
      title={t.name}
      description={t.date}
      imgSrc={t.media.src}
      imgAlt={t.media.alt}
      footerContent= {
        <CardFooter>{t.description}</CardFooter>
      }
    />
  )
}

export function EventsComponent ({items}) {
  return (
    <FlexibleListWrapper>
      {items.map(item => {
        const itemWithId = {
          ...item,
          id: item.name.replace(/\s+/g, '-').toLowerCase()
        }
        return <EventItem t={item} />
      })}
    </FlexibleListWrapper>
  )
}