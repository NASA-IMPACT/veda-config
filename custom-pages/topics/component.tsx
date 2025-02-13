import React from "$veda-ui/react";
import {
  GridContainer,
} from '$veda-ui/@trussworks/react-uswds';

import { focusAreasStories } from "../../common/constants";
import { Title } from "../../common/styled-components";

import Keypoints from "../../common/keypoints";
import Topic from "./components/Topic";
import LearnMore from "../common/LearnMore";

import { SUBSCRIPTION_URL } from "../../constants";
import topics from "./topics";

import '../../common/styles.scss';
import './topics.scss';

export default function HomeComponent() {  
  return (
    <div className="hug-reset-container margin-bottom-8">
      <GridContainer containerSize="widescreen">
        <Title>Content Collections by Topic</Title>

        {
          !!topics.length && topics.map(topic => (
            <Topic
              title={topic.title}
              description={topic.description}
              href={topic.href}
              imgSrc={topic.img.src}
              imgAlt={topic.img.alt}
            />
          ))
        }
      
        <section>
          <Title>Core Science Focus Areas</Title>
          <p className="margin-top-2 font-size-md-deprecated margin-bottom-2">The US GHG Center targets three greenhouse gas areas of study, as shown below. For the latest, <a href={SUBSCRIPTION_URL}>subscribe to our email newsletter</a>.</p>
          <Keypoints data={focusAreasStories} />
        </section>

        <LearnMore />

      </GridContainer>
    </div>
  );
}
