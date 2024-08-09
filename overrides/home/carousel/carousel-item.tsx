import React from '$veda-ui/react'

import { Icon } from "$veda-ui/@trussworks/react-uswds";

const progressColor = '#1565EF';
const greyColor = '#CCC';

function ProgressBar({ selected, shouldProgress, progressDone, progressPercentage }) {
  
  const progressBarStyleSetup = { height: '4px', backgroundColor: greyColor};

  // If progress is done, 100% - false if something is manually selected
  // If it is in progress, progress Percentage - false if something is manually selected
  // If it is manually selected, 100% 
  const progressWidth = progressDone? 100: shouldProgress? progressPercentage: selected? 100: 0;

  const widthStyle = { width: progressWidth + '%'};
  const transitionStyle = (!shouldProgress && !progressDone && progressPercentage === 0)? {} : {transition: 'width 200ms ease-out'}

  const barStyle = {height: '100%', backgroundColor: progressColor, ...widthStyle, ...transitionStyle}
  return <>
    <div className="tablet:display-block display-none" style={progressBarStyleSetup}>
      <div style={barStyle} />
    </div>
  </>
}

function ItemCard({ item, onTitleClick}) {
  return <div className="tablet:padding-left-1 tabelt:padding-right-1">
  <h3 className="text-bold tablet:margin-top-1" onClick={() => {onTitleClick(item);}}>
    {item.title}
  </h3>
  <p className="margin-top-2">{item.description}</p>

  <div className="margin-top-4">
    <a className="" href={item.link}><Icon.ArrowForward stroke="#1565EF" fill="#1565EF" /> 
    <span>Link</span>
    </a>
  </div>
</div>
}


export default function CarouselItem({ item, onTitleClick, shouldProgress, progressDone, progressPercentage, selected }) {
  
  return (
    <div className="tablet:grid-col tablet:margin-top-0 margin-top-2 tablet:padding-2">
      <ProgressBar shouldProgress={shouldProgress} progressDone={progressDone} progressPercentage={progressPercentage}selected={selected} />
      <ItemCard item={item} onTitleClick={onTitleClick} />
    </div>)
}