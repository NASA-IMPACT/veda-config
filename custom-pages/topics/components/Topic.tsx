import React from "$veda-ui/react";
import { Link } from '$veda-ui/react-router-dom';
import {
  Card, 
  CardHeader,
  CardBody,
  CardMedia,
  CardGroup,
} from '$veda-ui/@trussworks/react-uswds';


interface TopicProps {
  title: string,
  description: string,
  href: string,
  imgSrc: string,
  imgAlt: string,
}

export default function Topic({
    title,
    description,
    href,
    imgSrc,
    imgAlt,
}: TopicProps) {  
    return (
        <CardGroup>
          <Card layout="flagDefault" gridLayout={{tablet: {col: 10}, col: 12}} containerProps={{className:'border-0 position-relative card-shadow__hover'}}>
            <CardMedia exdent imageClass="width-tablet-lg">
              <img src={imgSrc} alt={imgAlt} />
            </CardMedia>

            <CardHeader>
              <h3 className="usa-card__heading margin-top-4">{title}</h3>
            </CardHeader>
            <CardBody>
              <p className="padding-bottom-2 margin-bottom-4">
              {description}
              </p>
            </CardBody>
            <Link className="position-absolute top-0 left-0 width-full height-full blocklink" to={href} />
          </Card>
        </CardGroup>
    )
}
