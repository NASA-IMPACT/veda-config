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
    <div style={progressBarStyleSetup}>
      <div style={barStyle} />
    </div>
  </>
}

export function ItemPanel({ item, linkComponent: LinkComponent }) {
  return (<>
  <p className="margin-top-2">{item.description}</p>
  <div className="tablet:margin-top-0 margin-top-2">
    <LinkComponent className="display-flex flex-align-center veda-color--link" to={item.link}>
      <Icon.ArrowForward stroke="#1565EF" fill="#1565EF" /> 
    <span className="padding-left-1">Read more</span>
    </LinkComponent>
  </div>
  </>)
}

function ItemCard({ item, itemIdx, onTitleClick, selected, linkComponent }) {
  return <div className="tablet:padding-left-1 tabelt:padding-right-1 margin-top-1 height-full">
  <div className="tablet:display-block display-none">
    <button 
      className="usa-button usa-button--unstyled text-bold veda-color--base"
      type="button"
      role="tab" 
      aria-label={`Slide ${itemIdx}`}
      aria-selected={selected.toString()}
      aria-controls={`carousel-item-${itemIdx}`}
      onClick={() => {onTitleClick(item);}}>
      {item.title}
    </button>
  </div>
  <div role="tabpanel" className="height-full display-flex flex-wrap" style={{alignContent: 'space-between'}} aria-roledescription='' aria-label={`${itemIdx} of 3`}>
    <ItemPanel item={item} linkComponent={linkComponent} />
  </div>
</div>
}


export default function CarouselItem({ item, itemIdx, onTitleClick, shouldProgress, progressDone, progressPercentage, selected, linkComponent }) {
  const selectedStyle = (selected || shouldProgress)? {opacity: 1, transition: 'opacity 200ms ease-out'}: {opacity: 0.5, transition: 'opacity 200ms ease-out'};
  return (
    <div className="tablet:grid-col tablet:margin-top-0 margin-top-2 tablet:padding-2 padding-0" style={selectedStyle}>
        <ProgressBar shouldProgress={shouldProgress} progressDone={progressDone} progressPercentage={progressPercentage}selected={selected} />
        <ItemCard item={item} itemIdx={itemIdx} onTitleClick={onTitleClick} selected={selected} linkComponent={linkComponent} />
    </div>)
}
