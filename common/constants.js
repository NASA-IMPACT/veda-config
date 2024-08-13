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
    "desc": "This dashboard is for exploring key datasets that provide insight into greenhouse gas sources, sinks, emissions, fluxes, and events.",
    "img": {
      "src": "https://biggardenfurniture.com.au/wp-content/uploads/2018/08/img-placeholder.png",
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
    "desc": "This exploration and analysis environment is an interactive space for users to visually examine data within a mapping environment and create time series of basic statistics for dataset layers.",
    "img": {
      "src": "https://biggardenfurniture.com.au/wp-content/uploads/2018/08/img-placeholder.png",
      "alt": "image of green wetlands"
    },
    "link": {
      "url": "/exploration",
      "text": "View more"
    },
    "footer": null
  },
  {
    "title": "Jupyter Notebook",
    "desc": "Jupyter Notebook enables analysis of massive archives of Earth science data in the cloud in an interactive environment that alleviates the complexities of managing compute resources. Log in or request access here.",
    "img": {
      "src": "https://biggardenfurniture.com.au/wp-content/uploads/2018/08/img-placeholder.png",
      "alt": "image of colorful polygon against satellite landscape surface in brown"
    },
    "link": {
      "url": "https://hub.ghg.center",
      "text": "View more"
    },
    "footer": null
  }
];

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
