import featureEmissions from "./media/refinery.png";
import featureSources from "./media/swamp.png";
import featureMethane from "./media/plume.png";


import { DATASETS_PATH } from "$veda-ui-scripts/utils/routes";
import { Actions } from "$veda-ui-scripts/components/common/browse-controls/use-browse-controls";


export const focusAreas = [
  {
    "title": "Gridded Anthropogenic Greenhouse Gas Emissions",
    "desc": "Emission estimates from human activities including the energy, agriculture, waste, and industry sectors",
    "img": {
      "src": featureEmissions,
      "alt": "image of oil refinery"
    },
    "link": {
      "url": "/stories/us-methane-sources",
      "text": "View more"
    },
    "footer": {
      "link": {
        "title": "Check out relevant datasets",
        "url": `${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(JSON.stringify({ Topics: "anthropogenic-emissions" }))}`
      }
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
      "url": "/stories/tracking-greenhouse-gas-cycles",
      "text": "View more"
    },
    "footer": {
      "link": {
        "title": "Check out relevant datasets",
        "url": `${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(JSON.stringify({ Topics: "natural-emissions-and-sinks" }))}`
      }
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
      "url": "/stories/discovering-large-methane-emissions",
      "text": "View more"
    },
    "footer": {
      "link": {
        "title": "Check out relevant datasets",
        "url": `${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(JSON.stringify({ Topics: "large-emission-events" }))}`
      }
    }
  }
];

export const focusAreasSansDatasets = focusAreas.map(area => {
  const { footer, ...areaSansFooter } = area;
  return areaSansFooter;
})

export const dataEngagements = [
  {
    "title": "Data Catalog",
    "desc": "Detailed information for datasets that provides insight into greenhouse gas sources, sinks, emissions, fluxes, and events.",
    "img": {
      "src": new URL('./media/catalog.png', import.meta.url).href,
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
    "desc": "The exploration and analysis environment is a space where users can visually examine data on a customizable map and create a time series of basic statistics for dataset layers.",
    "img": {
      "src": new URL('./media/explore.png', import.meta.url).href,
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
      "src": new URL('./media/jupyterhub.png', import.meta.url).href,
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
    "desc": "Detailed information for methane plumes identified using EMIT.",
    "img": {
      "src": new URL('./media/emit.png', import.meta.url).href,
      "alt": "Baltimore"
    },
    "link": {
      "url": "/data-catalog/emit-ch4plume-v1",
      "text": "Baltimore"
    },
    "footer": null
  },
  {
    "title": "Carbon Dioxide Concentration Viewer",
    "desc": "Measurements of carbon dioxide from ground locations throughout the US and worldwide are collected by NOAA GML and available for exploring concentration time series.",
    "img": {
      "src": new URL('./media/co2.png', import.meta.url).href,
      "alt": "Baltimore"
    },
    "link": {
      "url": "/data-catalog/noaa-gggrn-co2-concentrations",
      "text": "Baltimore"
    },
    "footer": null
  },
  {
    "title": "Methane Concentration Viewer",
    "desc": "Measurements of methane from ground locations throughout the US and worldwide are collected by NOAA GML and available for exploring concentration time series.",
    "img": {
      "src": new URL('./media/ch4.png', import.meta.url).href,
      "alt": "Baltimore"
    },
    "link": {
      "url": "/data-catalog/noaa-gggrn-ch4-concentrations",
      "text": "Baltimore"
    },
    "footer": null
  },
]

export const cities = [
  {
    "title": "Baltimore",
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
    "title": "New York",
    "desc": "Description",
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
    "title": "San Francisco",
    "desc": "Description",
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
    "title": "Los Angeles",
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
    "title": "GRAAPES",
    "desc": "Lorem Ipsum",
    "img": {
      "src": "https://www.nist.gov/sites/default/files/styles/480_x_480_limit/public/images/2023/03/22/GRAAPES_2017_CO2.png?itok=T_IOom0Z",
      "alt": "image of green wetlands"
    },
    "link": {
      "url": "/stories/graapes",
      "text": "View more"
    },
    "footer": null
  },
  {
    "title": "Vulcan 4.0",
    "desc": "Dataset 1",
    "img": {
      "src": "https://vulcan.rc.nau.edu/assets/images/vulcan.v3.0.poster-1014x633.png",
      "alt": "Vulcan data visualization"
    },
    "link": {
      "url": "/stories/vulcan",
      "text": "View more"
    },
    "footer": null
  },
  {
    "title": "NIST Urban Testbed",
    "desc": "Lorem Ipsum",
    "img": {
      "src": "https://www.nist.gov/sites/default/files/styles/480_x_480_limit/public/images/2023/01/06/GHG%20urban%20measurements.png?itok=RiRUANaw",
      "alt": "image of colorful polygon against satellite landscape surface in brown"
    },
    "link": {
      "url": "",
      "text": "View more"
    },
    "footer": null
  }
];
