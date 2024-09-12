import React, { useState, useEffect, useCallback } from '$veda-ui/react'

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useMediaQuery } from "$veda-ui-scripts/utils/use-media-query";
import { GridContainer, Grid} from '$veda-ui/@trussworks/react-uswds'
import LazyLoad from '$veda-ui/react-lazyload';
import { CardGroup } from '$veda-ui/@trussworks/react-uswds';

import CarouselItems from './items'
import CarouselItem, { ItemPanel } from './carousel-item';


import SmartLink from '$veda-ui-scripts/components/common/smart-link';

import '/common/styles.scss';
import './index.scss';

const interval = 100;
const slide_length = 50;
const item_n = CarouselItems.length;

export function DesktopCarousel () {
  const [timer, setTimer] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [timerAnimationId, setTimerAnimationId] = useState(null);

  // Animation starts on landing, once it is stopped, it is not going to be played again.
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prev => {
        return prev + 1;
      });
    }, interval);
    setTimerAnimationId(intervalId);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const animationTimer = timer % slide_length;
  // animationTimer/slide_length will never be 1, compensating the value here
  const progressPercentage = Math.floor((animationTimer/slide_length) * (100*(slide_length/(slide_length-1))));
  const currentProgressItemIdx = Math.floor((timer / slide_length)%item_n);
  const itemInProgress = selectedItem?? CarouselItems[currentProgressItemIdx];

  const onTitleClick = useCallback((clickedItem) => {
    clearInterval(timerAnimationId);
    setTimerAnimationId(null);
    setSelectedItem(clickedItem);
  },[timerAnimationId]);


  return (
    <GridContainer aria-roledescription="carousel" aria-label="Highlighted VEDA Dashboard projects">
      <Grid row className="position-relative carousel--height" aria-live="off"> 
      <TransitionGroup>
          <CSSTransition
            key={itemInProgress.title}
            timeout={2000}
            classNames="imagetransition"
          >
            <div className="carousel--height width-full position-absolute left-0 top-0 shadow-1">
              <img className="carousel--content-image" src={itemInProgress.image} alt={itemInProgress.imageAlt} /> 
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Grid>
      <CardGroup className="tablet:margin-top-4 margin-top-2" role="tablist" aria-label="Slides">
        {CarouselItems.map((item, itemIdx) => {
          return <CarouselItem 
            key={item.title} 
            item={item} 
            itemIdx={itemIdx}
            onTitleClick={onTitleClick} 
            progressDone= {selectedItem? false: itemIdx < currentProgressItemIdx}
            shouldProgress = {selectedItem? false: currentProgressItemIdx == itemIdx}
            selected={!timerAnimationId && selectedItem?.title === item.title}
            progressPercentage = {progressPercentage}
            linkComponent={SmartLink}
          />
        })}
      </CardGroup>
    </GridContainer>)
}

function TabletCarousel() {
  return <GridContainer>
    <Grid row className="margin-top-2">
        {CarouselItems.map((item) => {
          return <Grid col={12} key={item.title} className="margin-bottom-4">
              <div>
              <img className="carousel--content-image" src={item.image} />
              </div>
              <h3 className="margin-top-1">{item.title}</h3>
              <ItemPanel item={item} linkComponent={SmartLink} />
            </Grid>
        })}
        </Grid>
  </GridContainer>
}


export default function Carousel() {
  const { isMediumUp } = useMediaQuery();
  return isMediumUp? 
  <LazyLoad
    className="hug-reset-container"
    offset={100}
    once
  >
    <DesktopCarousel /> 
  </LazyLoad>: 
  <div className="hug-reset-container"><TabletCarousel /></div>
}

