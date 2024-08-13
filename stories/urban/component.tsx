import React from "$veda-ui/react";
import Keypoints from "../../common/keypoints";
import { cities, keyUrbanDatasets } from "../../common/constants";
import { Title, P } from "../../common/styled-components"


export default function Urban() {
    return (
        <div style={{display: "flex", flexDirection: "column",  padding: "12px 13vw", margin: "12px"}}>
            <Title>Greenhouse Gases and Air Quality</Title>
            <P>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            </P>

            <Title>Featured datasets</Title>
            <P>
                Lorem ipsum odor amet, consectetuer adipiscing elit.
            </P>
            <Keypoints data={keyUrbanDatasets}></Keypoints>
            <Title>Featured cities</Title>
            <P>
                Lorem ipsum odor amet, consectetuer adipiscing elit.
            </P>
            <Keypoints data={cities}></Keypoints>
        </div>

    )
}