import React from "$veda-ui/react";
import {
    GridContainer
  } from '$veda-ui/@trussworks/react-uswds';

import Keypoints from "../../common/keypoints";
import { cities, keyUrbanDatasets } from "../../common/constants";
import { Title } from "../../common/styled-components";


export default function Urban() {
    return (
        <div className="hug-reset-container margin-bottom-8">
            <GridContainer containerSize="widescreen">
                <section>
                    <Title>About Urban Emissions</Title>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                    </p>
                </section>

                <section>
                    <Title>Featured datasets</Title>
                    <p className="margin-bottom-2">
                        Lorem ipsum odor amet, consectetuer adipiscing elit.
                    </p>
                    <Keypoints data={keyUrbanDatasets} cardType="classic"></Keypoints>
                </section>

                <section>
                    <Title>Featured cities</Title>
                    <p className="margin-bottom-2">
                        Lorem ipsum odor amet, consectetuer adipiscing elit.
                    </p>
                    <Keypoints data={cities} cardType="cover"></Keypoints>
                </section>
            </GridContainer>
        </div>
    )
}
