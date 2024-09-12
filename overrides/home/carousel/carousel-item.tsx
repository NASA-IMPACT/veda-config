import React from '$veda-ui/react'
import styled  from '$veda-ui/styled-components';
import { Button, Icon } from '$veda-ui/@trussworks/react-uswds'

import {
  Card, 
  CardBody,
  CardFooter,
} from '$veda-ui/@trussworks/react-uswds';


const progressColor = '#1565EF';

const ProgressIndicator = styled.div`
  background-color: ${progressColor};
  width: ${props => props.progressWidth}%;
  transition: ${props => props.noTransition? null: 'width 200ms ease-out'};
`;

function ProgressBar({ selected, shouldProgress, progressDone, progressPercentage }) {
  // If progress is done, 100% - false if something is manually selected
  // If it is in progress, progress Percentage - false if something is manually selected
  // If it is manually selected, 100% 
  const progressWidth = progressDone? 100: shouldProgress? progressPercentage: selected? 100: 0;
  const noTransition = (!shouldProgress && !progressDone && progressPercentage === 0)? true : false;

  return <>
    <div className="height-05 bg-base-lighter">
      <ProgressIndicator className="height-full" progressWidth={progressWidth} noTransition={noTransition} />
    </div>
  </>
}

export function ItemPanel({ item, linkComponent: LinkComponent }) {
  return (<>

  <div className="tablet:margin-top-0 margin-top-2 flex-align-self-stretch">
    <p className="margin-top-2 margin-bottom-2 flex-align-self-stretch">{item.description}</p>
    <LinkComponent className="display-flex flex-align-center veda-color--link" to={item.link}>
      <Icon.ArrowForward stroke={progressColor} fill={progressColor} /> 
    <span className="padding-left-1">Read more</span>
    </LinkComponent>
  </div>
  </>)
}

export default function CarouselItem({ item, itemIdx, onTitleClick, shouldProgress, progressDone, progressPercentage, selected, linkComponent: LinkComponent }) {
  return <Card 
    gridLayout={{ tablet: { col: 4 } }} 
    containerProps={{className:`hover:bg-base-lightest padding-x-1 radius-0 border-0 animation--transition ${(selected || shouldProgress)? 'opacity-100':'opacity-50'}`}}>
    <ProgressBar shouldProgress={shouldProgress} progressDone={progressDone} progressPercentage={progressPercentage}selected={selected} />
    <CardBody className="padding-left-0 position-relative">
      <h3 className="tablet:margin-top-1 carousel--title text-bold veda-color--base">
        {item.title}
      </h3>
      <p className="margin-top-2 flex-align-self-stretch">{item.description}</p>
      <Button
        unstyled={true}
        className="position-absolute top-0 left-0 width-full height-full blocklink"
        onClick={() => { onTitleClick(item); } }
        type="button"
        role="tab"
        aria-label={`Slide ${itemIdx+1}`}
        aria-selected={selected.toString()}
        aria-controls={`carousel-item-${itemIdx+1}`} 
        children={undefined} />
    </CardBody>
    <CardFooter className="padding-left-0 padding-top-1">
        <LinkComponent className="display-flex flex-align-center veda-color--link" to={item.link}>
          <Icon.ArrowForward stroke={progressColor} fill={progressColor} /> 
        <span className="padding-left-1">Read more</span>
        </LinkComponent>
      </CardFooter>
  </Card>
}

