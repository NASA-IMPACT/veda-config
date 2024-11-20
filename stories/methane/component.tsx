import React from "$veda-ui/react";
import { Link } from "$veda-ui/react-router-dom";
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
                <Title>About Methane</Title>
                <p className="margin-bottom-2 font-size-md-deprecated">
                    Methane is a powerful greenhouse gas emitted by a complex mix of natural sources and human activities that can stay in the atmosphere for decades. The structure of methane molecules makes them particularly powerful at trapping heat - relative to carbon dioxide, methane can trap 80 times more heat in the first 20 years it resides in the atmosphere. These attributes make methane an attractive target for both public and private efforts to reduce emissions, which can have important co-benefits in improving air quality and improving operational efficiency within some sectors. These actions are enabled by innovative new observations and coordination across public and private data providers that enhance trust and transparency in data.
                </p>
                <p className="font-size-md-deprecated">Explore below to see how new data are providing new views of methane on local scales and how researchers are working to scale up to understand emissions around the world.
                </p>
                {/* <ul>
                    <li>Seto, K. C. et al. Human settlements, infrastructure and spatial planning. (Cambridge University Press, 2014).</li>
                </ul> */}
            </Grid>

            <Grid col={10} className="margin-bottom-4">
                <Title>Methane Visualization Tools</Title>
                <p className="margin-bottom-2 font-size-md-deprecated">
                    Read about the latest national and city scale datasets now available on the US GHG Center portal and how the data enables greater understanding of local emissions.
                </p>
            </Grid>
            <Keypoints data={keyUrbanDatasets} cardType="classic"></Keypoints>

            <Grid col={10} className="margin-bottom-4">
                <Title>Stories</Title>
                <p className="margin-bottom-2 font-size-md-deprecated">
                    For more on innovations in methane monitoring and reporting, explore the full listing of <Link to='/stories?taxonomy=%7B"Gas"%3A"ch₄"%7D'>methane stories</Link>. 
                </p>
            </Grid>
            <Keypoints data={cities}></Keypoints>

            {/* */}
            <Grid col={10} className="margin-bottom-4">
                <Title>Training</Title>
                <p className="margin-bottom-2 font-size-md-deprecated">
                    For more on innovations in methane monitoring and reporting, explore the full listing of <Link to="/stories/">methane stories</Link>. 
                </p>
            </Grid>
            <Keypoints data={cities}></Keypoints>

            <Grid col={10} className="margin-bottom-4">
                <Title>Datasets</Title>
                <p className="margin-bottom-2 font-size-md-deprecated">
                    For more on innovations in methane monitoring and reporting, explore the full listing of <Link to="/stories/">methane stories</Link>. 
                </p>
            </Grid>
            <Keypoints data={cities}></Keypoints>

            <Grid col={10} className="margin-bottom-4">
                <Title>Resources for Data Users</Title>
                <p className="margin-bottom-2 font-size-md-deprecated">
                    Would you like to explore and engage directly with the data? Discover detailed dataset information, interactive maps, data visualizations, and open source tools by clicking “Data Toolkit” at the top or bottom of any page.
                </p>
            </Grid>
        </GridContainer>
    )
}
