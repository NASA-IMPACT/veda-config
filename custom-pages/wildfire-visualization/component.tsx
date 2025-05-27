import React from "react";
// @ts-ignore
import { WildfireExplorer } from '@dsio/wildfire-explorer';
import '@dsio/wildfire-explorer/dist/wildfire-explorer.css';
import '../../styles/_custom.scss';

export default function Component() {

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <WildfireExplorer
        mapboxAccessToken={process.env.MAPBOX_TOKEN_FIRE_TOOL_STYLES}
        featuresApiEndpoint={process.env.FEATURES_API_ENDPOINT_DEV}
      />
    </div>
  )
}
