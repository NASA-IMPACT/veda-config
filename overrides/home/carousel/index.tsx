import React, { useState, useEffect, useCallback } from '$veda-ui/react'
import styled from '$veda-ui/styled-components';

import CarouselItems from './items'
import CarouselItem from './carousel-item';



const HugResetContainer = styled.div`
  grid-column: 1 / -1;
`;
const interval = 100;
const slide_length = 20;
const item_n = CarouselItems.length;
export default function Carousel () {
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
  const itemOnOProgress = selectedItem?? CarouselItems[currentProgressItemIdx];

  const onTitleClick = useCallback((clickedItem) => {
    clearInterval(timerAnimationId);
    setTimerAnimationId(null);
    setSelectedItem(clickedItem);
  },[timerAnimationId]);


  return (<HugResetContainer>
    <div className='grid-container'>
    <div className="grid-row">
      <div style={{width: '100%', height: '500px', backgroundColor: 'grey'}}>
        {animationTimer} <strong>{itemOnOProgress.title} </strong> 
      </div>
    </div>
    <div className="grid-row tablet:margin-top-4 margin-top-2">
      {CarouselItems.map((item, itemIdx) => {
        return <CarouselItem 
          key={item.title} 
          item={item} 
          onTitleClick={onTitleClick} 
          progressDone= {selectedItem? false: itemIdx < currentProgressItemIdx}
          shouldProgress = {selectedItem? false: currentProgressItemIdx == itemIdx}
          selected={!timerAnimationId && selectedItem?.title === item.title}
          progressPercentage = {progressPercentage}
         />
      })}

    </div>
    </div>
  </HugResetContainer>)
}