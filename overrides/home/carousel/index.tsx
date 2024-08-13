import React, { useState, useEffect, useCallback } from '$veda-ui/react'
import styled from '$veda-ui/styled-components';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useMediaQuery } from "$veda-ui-scripts/utils/use-media-query";

import CarouselItems from './items'
import CarouselItem, { ItemPanel } from './carousel-item';

import SmartLink from '$veda-ui-scripts/components/common/smart-link';

import './index.css';

const HugResetContainer = styled.div`
  grid-column: 1 / -1;
`;
const interval = 100;
const slide_length = 100;
const animation_length = 200;
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
  }, [interval]);

  const animationTimer = timer % slide_length;
  const progressPercentage = Math.floor((animationTimer/slide_length) * 100)
  const currentProgressItemIdx = Math.floor((timer / slide_length)%item_n);
  const itemInProgress = selectedItem?? CarouselItems[currentProgressItemIdx];

  const onTitleClick = useCallback((clickedItem) => {
    clearInterval(timerAnimationId);
    setTimerAnimationId(null);
    setSelectedItem(clickedItem);
  },[timerAnimationId]);

  // Maybe have to use https://reactcommunity.org/react-transition-group/transition
  // Example: https://codesandbox.io/s/6lmv669kz
  // @TODO : aria, lazy loading
  // Carousel aria reference: https://www.w3.org/WAI/ARIA/apg/patterns/carousel/examples/carousel-2-tablist/#ex_label
  return (
    <section className='grid-container' aria-roledescription="carousel" aria-label="Highlighted VEDA Dashboard projects">
      <div className="grid-row position-relative" style={{height: '500px'}} aria-live="off"> 
      <TransitionGroup>
          <CSSTransition
            key={itemInProgress.title}
            timeout={2000}
            classNames="messageout"
          >
            <div style={{width: '100%', height: '100%', backgroundColor: 'grey', position: 'absolute', left: '0', top:'0', border: '1px solid rgba(0, 0, 0, 0.2'}}>
              <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={itemInProgress.image} /> 
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className="grid-row tablet:margin-top-4 margin-top-2" role="tablist" aria-label="Slides">
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
      </div>
    </section>)
}

function TabletCarousel() {
  return <section className='grid-container'>
    <div className="grid-row margin-top-2">
        {CarouselItems.map((item) => {
          return <div className="grid-col-12 margin-bottom-4">
              <div>
              <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={item.image} />
              </div>
              <h3 className="margin-top-1">{item.title}</h3>
              <ItemPanel item={item} linkComponent={SmartLink} />
            </div>
        })}
        </div>
  </section>
}


export default function Carousel() {
  const { isMediumUp } = useMediaQuery();
  return isMediumUp? 
  <HugResetContainer><DesktopCarousel /></HugResetContainer> : <HugResetContainer><TabletCarousel /></HugResetContainer>
}

