import React from "$veda-ui/react";
import { Link } from "$veda-ui/react-router-dom";
import {
    Grid,
    GridContainer,
} from '$veda-ui/@trussworks/react-uswds';

import Keypoints from "../../common/keypoints";
import { Title } from "../../common/styled-components";

import {
    tools,
    stories,
    trainings,
    datasets,
} from './content';


export default function Urban() {
    return (
        <GridContainer containerSize="widescreen" className="margin-bottom-8">
            <Grid col={10} className="margin-bottom-4">
                <Title>About Methane</Title>
                <p className="margin-bottom-2 font-size-md-deprecated">
                Methane is a greenhouse gas emitted by a complex mix of natural sources and human activities. Although it is short-lived in the atmosphere, the structure of methane molecules makes the chemical compound particularly powerful at trapping heat: compared with carbon dioxide, <Link to="https://www.unep.org/explore-topics/energy/facts-about-methane#:~:text=Methane%20(CH4)%2C%20the%20primary,%C2%B0C%20target%20within%20reach.">methane can trap 80 times more heat over 20 years</Link>. These attributes make methane an attractive focus for efforts to research and reduce emissions, which can help to limit rising temperatures, improve air quality, and support operational efficiency within some industrial sectors.
                
                To meet the growing need for information, innovative new observations and coordination across public and private data providers are enhancing trust and transparency in methane data. Explore below to learn how researchers and data providers are working to understand emissions around the world and support local scale views of methane sources.
                </p>
                <p className="font-size-md-deprecated">Explore below to see how new data are providing new views of methane on local scales and how researchers are working to scale up to understand emissions around the world.
                </p>

                <video
                    autoPlay
                    loop
                    muted
                    disablePictureInPicture
                    disableRemotePlayback
                    width={"500px"}
                >
                    <source src={"https://svs.gsfc.nasa.gov/vis/a000000/a005100/a005116/VolumetricCH4_Composite_1920x19020p30.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </Grid>

            <Grid col={10} className="margin-bottom-4">
                <Title>Methane Visualization Tools</Title>
                <p className="margin-bottom-2 font-size-md-deprecated">
                    View and explore methane emissions data with customized, interactive visualization tools from the U.S. Greenhouse Gas Center.
                </p>
            </Grid>
            <Keypoints data={tools} cardType="classic"></Keypoints>

            <Grid col={10} className="margin-bottom-4">
                <Title>Stories: Innovations in Methane Research & Monitoring</Title>
                <p className="margin-bottom-2 font-size-md-deprecated">
                A look into the innovative technologies, observations, Earth system models, and public-private collaborations that are driving deeper understanding and informing responses to methane emissions. For more, explore the full listing of <Link to='/stories?taxonomy=%7B"Gas"%3A"ch₄"%7D'>methane stories</Link>. 
                </p>
            </Grid>
            <Keypoints data={stories}></Keypoints>

            {/* */}
            <Grid col={10} className="margin-bottom-4">
                <Title>Training: Using Methane Data</Title>
                <p className="margin-bottom-2 font-size-md-deprecated">
                Participate in the latest training opportunity to learn how to use methane observations available on the U.S. Greenhouse Gas Center portal.
                </p>
            </Grid>
            <Keypoints data={trainings}></Keypoints>

            <Grid col={10} className="margin-bottom-4">
                <Title>Resources for Data Users</Title>
                <p className="margin-bottom-2 font-size-md-deprecated">
                    Would you like to engage directly with the data? To discover detailed dataset information and download the data, explore the full listing of <Link to='data-catalog?taxonomy=%7B"Gas"%3A%5B"ch₄"%5D%7D'>methane datasets</Link>. Users can also access the full data catalog, interactive maps, data visualizations, and open source tools by clicking “Data Toolkit” at the top or bottom of any page.
                </p>
            </Grid>
            <Keypoints data={datasets}></Keypoints>
        </GridContainer>
    )
}
