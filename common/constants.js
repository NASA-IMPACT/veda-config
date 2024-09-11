import featureEmissions from "./media/refinery.png";
import featureSources from "./media/swamp.png";
import featureMethane from "./media/plume.png";



import { DATASETS_PATH } from "$veda-ui-scripts/utils/routes";
import { Actions } from "$veda-ui-scripts/components/common/browse-controls/use-browse-controls";


export const focusAreaDatasets = [
  {
    "title": "Gridded Anthropogenic Greenhouse Gas Emissions",
    "desc": "Emission estimates from human activities including the energy, agriculture, waste, and industry sectors",
    "img": {
      "src": featureEmissions,
      "alt": "image of oil refinery"
    },
    "link": {
      "url": `${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(JSON.stringify({ Topics: "anthropogenic-emissions" }))}`,
      "text": "View more"
    },
    "footer": {
      "links": [{
        "title": "Check out relevant datasets",
        "url": `${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(JSON.stringify({ Topics: "anthropogenic-emissions" }))}`
      }]
    }
  },
  {
    "title": "Natural Greenhouse Gas Sources and Sinks",
    "desc": "Naturally-occurring greenhouse gas fluxes from land, ocean, and atmosphere",
    "img": {
      "src": featureSources,
      "alt": "image of green wetlands"
    },
    "link": {
      "url": `${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(JSON.stringify({ Topics: "natural-emissions-and-sinks" }))}`,
      "text": "View more"
    },
    "footer": {
      "links": [{
        "title": "Check out relevant datasets",
        "url": `${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(JSON.stringify({ Topics: "natural-emissions-and-sinks" }))}`
      }]
    }
  },
  {
    "title": "New Observations for Tracking Large Emission Events",
    "desc": "Identify and quantify large methane leak events leveraging aircraft and space-based data",
    "img": {
      "src": featureMethane,
      "alt": "image of colorful polygon against satellite landscape surface in brown"
    },
    "link": {
      "url": `${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(JSON.stringify({ Topics: "large-emission-events" }))}`,
      "text": "View more"
    },
    "footer": {
      "links": [{
        "title": "Check out relevant datasets",
        "url": `${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(JSON.stringify({ Topics: "large-emission-events" }))}`
      }]
    }
  }
];

// Make sure these are in the same order
const focusAreaStoriesLinks = [
  "/stories/us-methane-sources", "/stories/tracking-greenhouse-gas-cycles", "/stories/discovering-large-methane-emissions"
]

export const focusAreasStories = focusAreaDatasets.map((area, index) => {
  const { footer, ...areaSansFooter } = area;
  return {
    ...areaSansFooter,
    link: {
      ...areaSansFooter.link,
      url: focusAreaStoriesLinks[index],
    }
  }
});


export const dataEngagements = [
  {
    "title": "Data Catalog",
    "desc": "Detailed dataset information for insight into greenhouse gas sources, sinks, emissions, and large events.",
    "img": {
      "src": new URL('./media/data_catalog.png', import.meta.url).href,
      "alt": "image of oil refinery"
    },
    "link": {
      "url": "/data-catalog",
      "text": "View more"
    },
    "footer": null
  },
  {
    "title": "Interactive Map",
    "desc": "The exploration and analysis environment can be used to visually examine data on a customizable map and create a time series of basic statistics.",
    "img": {
      "src": new URL('./media/interactive_map.png', import.meta.url).href,
      "alt": "image of green wetlands"
    },
    "link": {
      "url": "/exploration",
      "text": "View more"
    },
    "footer": null
  },
  {
    "title": "JupyterHub",
    "desc": "With JupyterHub, users can analyze cloud archives of Earth science data using an interactive environment. Log in or request access here.",
    "img": {
      "src": new URL('./media/jupyter_hub.png', import.meta.url).href,
      "alt": "image of colorful polygon against satellite landscape surface in brown"
    },
    "link": {
      "url": "https://hub.ghg.center",
      "text": "View more"
    },
    "footer": null
  }
];

export const customInterfaces = [
  {
    "title": "EMIT Methane Plume Viewer",
    "desc": "Detailed information for methane plumes identified using EMIT",
    "img": {
      "src": new URL('./media/emit.png', import.meta.url).href,
      "alt": "view of colored shape overlaid on satellite landscape image with boxes of information containing plume details"
    },
    "link": {
      "url": "/data-catalog/emit-ch4plume-v1",
      "text": "See more"
    },
    "footer": null
  },
  {
    "title": "NOAA Concentration Viewer",
    "desc": "Measurements of carbon dioxide and methane concentrations from ground stations throughout the US and worldwide",
    "img": {
      "src": new URL('./media/co2.png', import.meta.url).href,
      "alt": "map showing Mauna Loa location of station with a time series of data below the map"
    },
    "link": {
      "url": "/data-catalog/noaa-gggrn-co2-concentrations",
      "text": "See more"
    },
    "footer": {
      "links": [
        {
          "title": "Carbon Dioxide",
          "url": "/data-catalog/noaa-gggrn-co2-concentrations"
        },
        {
          "title": "Methane",
          "url": "/data-catalog/noaa-gggrn-ch4-concentrations"
        }
      ]
    }
  },
  {
    "title": "NIST Tower Data Viewer",
    "desc": "Measurements of carbon dioxide and methane concentrations from urban tower instruments",
    "img": {
      "src": new URL('./media/nist-co2-nwb.png', import.meta.url).href,
      "alt": "map showing Northwest Baltimore, MD location of station with a time series of data below the map"
    },
    "link": {
      "url": "/data-catalog/noaa-gggrn-ch4-concentrations",
      "text": "See more"
    },
    "footer": null
  },
]

export const cities = [
  {
    "title": "Baltimore Presents Unique Opportunity for Government & Academic Research Partners",
    "desc": "Description",
    "img": {
      "src": "https://cdn.britannica.com/90/77990-050-E6087086/Inner-Harbor-skyline-Baltimore-Maryland.jpg",
      "alt": "Baltimore"
    },
    "link": {
      "url": "/stories/baltimore",
      "text": "Baltimore"
    },
    "footer": null
  },
  {
    "title": "New York City Researchers Take to the Street to Investigate Emissions",
    "desc": "Researchers at Columbia University are working with the New York State Energy Research & Development Authority to improve emissions estimates by combining measurements from a network of sensors across NYC with data collected by NASA satellites and aircraft, identifying unidentified or incorrectly cataloged sources of GHGs.",
    "img": {
      "src": "https://i.natgeofe.com/n/874df281-d3e0-489a-98c0-6b840023b828/newyork_NationalGeographic_2328428.jpg",
      "alt": "New York"
    },
    "link": {
      "url": "/stories/newyork",
      "text": "New York"
    },
    "footer": null
  },
  {
    "title": "San Francisco Scientists Use Low-Cost Sensor Network to Track Local Emissions Progress",
    "desc": "A research team from the University of California, Berkeley, has developed a cost-effective, shoebox-sized sensor and dispersed 57 throughout the San Francisco Bay Area to track pollutants in real time and monitor progress for the city’s carbon reduction targets. The project is expanding to new cities.",
    "img": {
      "src": "https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg",
      "alt": "San Francisco"
    },
    "link": {
      "url": "/stories/sanfrancisco",
      "text": "San Francisco"
    },
    "footer": null
  },
  {
    "title": "Satellite Data Helps to Pinpoint CO₂ Emissions Changes in Los Angeles",
    "desc": "Description",
    "img": {
      "src": "https://i.natgeofe.com/n/110d522c-7c56-4185-ba59-3162a78e3abc/1_3x2.jpg",
      "alt": "Los Angeles"
    },
    "link": {
      "url": "/stories/losangeles",
      "text": "Los Angeles"
    },
    "footer": null
  }
];

export const keyUrbanDatasets = [
  {
    "title": "New Dataset Offers Neighborhood-Scale View of Carbon Emissions",
    "desc": "Carbon dioxide emissions data are now available at a granular level, from city blocks to entire counties across the contiguous U.S. The latest dataset from the Vulcan Project, called Vulcan 4.0, helps researchers to analyze annual CO2 emissions at fine scales and urban decision-makers to develop localized carbon management strategies.",
    "img": {
      "src": "https://images.unsplash.com/photo-1580064461598-505b080a8242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "alt": "smoke coming out of a factory"
    },
    "link": {
      "url": "/stories/vulcan",
      "text": "View more"
    },
    "footer": null
  },
  {
    "title": "Dataset 2",
    "desc": "Dataset 2",
    "img": {
      "src": "https://placehold.co/600x400?text=Placeholder",
      "alt": "Placeholder"
    },
    "link": {
      "url": "/stories/vulcan",
      "text": "View more"
    },
    "footer": null
  },
  {
    "title": "Innovative Urban Testbeds to Advance Emissions Estimates",
    "desc": "NIST’s Urban GHG Measurements Testbed System uses ground-based observing networks in Los Angeles, Indianapolis, and the Baltimore/Washington, D.C. region, together with aircraft and satellite data, to diagnose accuracy of local emissions estimates and advance transformative monitoring and measurement methods for the future.",
    "img": {
      "src": "https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/9/4276/files/2023/09/US_INC.png",
      "alt": "image from INFLUX project"
    },
    "link": {
      "url": "",
      "text": "View more"
    },
    "footer": null
  }
];
