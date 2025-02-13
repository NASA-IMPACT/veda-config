import React from "$veda-ui/react";
import SmartLink from '$veda-ui-scripts/components/common/smart-link';

import { ExternalLinkFlag } from '$veda-ui-scripts/components/common/card/';

import {
  Card, 
  CardHeader,
  CardBody,
  CardFooter,
  CardMedia,
  CardGroup,
} from '$veda-ui/@trussworks/react-uswds';

import {
  CollecticonArrowRight
} from '$veda-ui/@devseed-ui/collecticons';

import "./styles.scss"


type Data = {
  title: string;
  desc: string;
  hideExternalLinkFlag?: boolean;
  img: {
    src: string;
    alt: string;
  };
  link: {
    url: string;
    text: string;
  };
  footer: {
    links: [{
      title: string;
      url: string;
    }];
  } | null;
};

interface KeypointsProps {
  data: Data[],
  cardType?: string,
  overlay?: boolean,
}

export default function Keypoints({
  data,
  cardType = "classic",
  overlay = false,
}: KeypointsProps) {
  return (
    
    <CardGroup className="margin-bottom-4">
      {data.map(datum => (
        <Card
          key={datum.title}
          gridLayout={{ tablet: { col: 4 } }}
          className="padding-bottom-0"
          containerProps={{
            className: `border-0 position-relative card-shadow__hover margin-top-1 margin-right-2  ${cardType === 'cover' ? 'card__cover height-card-lg' : ''}`,
          }}
        >
          {
            ( !!datum.link.url.startsWith("http") && !datum.hideExternalLinkFlag ) &&
            <div style={{cursor: "pointer"}}>
              <ExternalLinkFlag />
            </div>
          }
          <CardMedia imageClass={`${cardType === 'cover'? 'radius-lg bg-gray-30' : ''}`}>
            <img src={datum.img.src} alt={datum.img.alt} className={`${cardType === 'cover' ? 'card-image__blend' : 'border-bottom border-gray-5'}`} />
          </CardMedia>
          <div className={`${cardType === 'cover' ? 'position-absolute bottom-0 left-0 text-gray-5' : ''}`}>
            <div>
            <CardHeader>
              <h3 className="usa-card__heading">{datum.title}</h3>
            </CardHeader>
            <CardBody>
              <p className="padding-bottom-2">{datum.desc}</p>
            </CardBody>
            <CardFooter>
            {
              datum.footer?.links?.[0] && datum.footer?.links?.map(link => (
                  <SmartLink to={link.url} className={`display-flex flex-align-center ${cardType === 'cover' ? 'text-gray-5' : 'veda-color--link'}`}>
                  <CollecticonArrowRight className="margin-right-1"/> <span className="text-underline"> {link.title} </span>
                  </SmartLink>
              ))
            }
            </CardFooter>
            </div>
          </div>
          {!datum.footer?.links && <SmartLink className="position-absolute top-0 left-0 width-full height-full blocklink" to={datum.link.url} />}
        </Card>

      ))}
    </CardGroup>
  );
}
