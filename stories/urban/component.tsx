import React from "$veda-ui/react";
import {
    Grid,
    GridContainer,
} from '$veda-ui/@trussworks/react-uswds';

import Keypoints from "../../common/keypoints";
import { cities, keyUrbanDatasets } from "../../common/constants";
import { Title } from "../../common/styled-components";


export default function Urban() {
    return (
        <GridContainer containerSize="widescreen" className="margin-bottom-8">
            <Grid col={10} className="margin-bottom-4">
                <Title>About Urban Emissions</Title>
                <p className="margin-bottom-2 font-size-md-deprecated">
                Cities and metropolitan regions, where most of the world's population live, are <a target="_blank" href="https://www.ipcc.ch/report/ar6/wg3/downloads/outreach/IPCC_AR6_WGIII_FactSheet_Urban_Systems.pdf">responsible for approximately 70% of greenhouse gas emissions</a>. Researchers are making rapid advances in urban emissions measurement and modeling to provide robust, accurate, and reliable emissions estimates at fine scales, even down to building and street level. For urban decision makers, this trustworthy local data offers the opportunity to establish accurate baselines for greenhouse gas emissions, identify trends, track carbon mitigation performance, and develop effective and efficient climate solutions.
                </p>
                <p className="font-size-md-deprecated">Explore below for more on how researchers are developing innovative urban measurement and analysis systems to accurately map emissions sources in cities across the U.S.
                </p>
                {/* <ul>
                    <li>Seto, K. C. et al. Human settlements, infrastructure and spatial planning. (Cambridge University Press, 2014).</li>
                </ul> */}
            </Grid>

            <Grid col={10} className="margin-bottom-4">
                <Title>Features: Latest Datasets Now on the Portal</Title>
                <p className="margin-bottom-2 font-size-md-deprecated">
                Read about the latest national and city scale datasets now available on the US GHG Center portal and how the data enables greater understanding of local emissions in cities across the U.S.
                </p>
            </Grid>
            <Keypoints data={keyUrbanDatasets} cardType="classic"></Keypoints>

            <Grid col={10} className="margin-bottom-4">
                <Title>Features: Innovative City-Based Emissions Research</Title>
                <p className="margin-bottom-2 font-size-md-deprecated">
                A look into how researchers in some U.S. cities are developing new approaches to improve local greenhouse gas emissions estimates.
                </p>
            </Grid>
            <Keypoints data={cities}></Keypoints>
            <Grid col={10} className="margin-bottom-4">
                <Title>Resources for Data Users</Title>
                <p className="margin-bottom-2 font-size-md-deprecated">
                Would you like to explore and engage directly with the data? Discover detailed dataset information, interactive maps, data visualizations, and open source tools by clicking Data Toolkit at the top or bottom of any page.
                </p>
            </Grid>
        </GridContainer>
    )
}
