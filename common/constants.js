import featureEmissions from "./media/refinery.png";
import featureSources from "./media/swamp.png";
import featureMethane from "./media/plume.png";



import { DATASETS_PATH } from "$veda-ui-scripts/utils/routes";
import { Actions } from "$veda-ui-scripts/components/common/browse-controls/use-browse-controls";


export const focusAreaDatasets = [
  {
    "title": "Gridded Anthropogenic Greenhouse Gas Emissions",
    "desc": "Emission estimates from human activities including the energy, agriculture, waste, and industry sectors.",
    "img": {
      "src": featureEmissions,
      "alt": "image of oil refinery."
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
    "desc": "Naturally-occurring greenhouse gas fluxes from land, ocean, and atmosphere.",
    "img": {
      "src": featureSources,
      "alt": "image of green wetlands."
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
    "desc": "Identify and quantify large methane leak events leveraging aircraft and space-based data.",
    "img": {
      "src": featureMethane,
      "alt": "image of colorful polygon against satellite view of landscape surface."
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
    "desc": "Detailed information for methane plumes identified using EMIT.",
    "img": {
      "src": new URL('./media/emit.jpg', import.meta.url).href,
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
    "desc": "Measurements of carbon dioxide and methane concentrations from ground stations throughout the US and worldwide.",
    "img": {
      "src": new URL('./media/co2.jpg', import.meta.url).href,
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
    "desc": "Measurements of carbon dioxide and methane concentrations from urban tower instruments.",
    "img": {
      "src": new URL('./media/nist-co2-nwb.jpg', import.meta.url).href,
      "alt": "map showing Northwest Baltimore, MD location of station with a time series of data below the map"
    },
    "link": {
      "url": "/data-catalog/noaa-gggrn-ch4-concentrations",
      "text": "See more"
    },
    "footer": {
      "links": [
        {
          "title": "Indianapolis Flux Experiment (INFLUX)",
          "url": "/data-catalog/influx-testbed-ghg-concentrations"
        },
        {
          "title": "Los Angeles Megacity Carbon Project",
          "url": "/data-catalog/lam-testbed-ghg-concentrations"
        },
        {
          "title": "Northeast Corridor (NEC) Urban Test Bed",
          "url": "/data-catalog/nec-testbed-ghg-concentrations"
        }
      ]
    }
  },
]

export const cities = [
  {
    "title": "Baltimore, A Nexus for Government and  Academic Emissions Research",
    "desc": "Scientists from U.S. government agencies and regional universities have come together for cooperative research projects, helping to expand environmental monitoring capabilities and improve resident wellbeing across the Baltimore metropolitan region in line with the city’s ambitious climate action plans.",
    "img": {
      "src": new URL('../stories/media/baltimore_banner.png', import.meta.url).href,
      "alt": "Baltimore"
    },
    "link": {
      "url": "/stories/baltimore",
      "text": "See More"
    },
    "footer": null
  },
  {
    "title": "New York City Researchers Take to the Street to Investigate Emissions",
    "desc": "Researchers are working with the New York State Energy Research & Development Authority to improve emissions estimates by combining measurements from a network of sensors across NYC with data collected by satellites and aircraft, to pinpoint unidentified or incorrectly cataloged sources of GHGs and study interactions with other air pollutants.",
    "img": {
      "src": new URL('../stories/media/newyork_banner.png', import.meta.url).href,
      "alt": "New York"
    },
    "link": {
      "url": "/stories/newyork",
      "text": "See More"
    },
    "footer": null
  },
  {
    "title": "Scientists Use Low-Cost Sensor Network to Track San Francisco Area Emissions",
    "desc": "Cities have implemented a variety of measures to meet greenhouse gas emissions goals, including expanding renewable energy use and incentivizing residents to drive electric cars. But a challenge for city leaders is measuring if policies are working. One solution is a network of low-cost sensors, scientists say.",
    "img": {
      "src": new URL('../stories/media/sanfran_banner.png', import.meta.url).href,
      "alt": "San Francisco"
    },
    "link": {
      "url": "/stories/sanfrancisco",
      "text": "See More"
    },
    "footer": null
  },
  {
    "title": "Satellite Data to Help Measure Impact of Los Angeles Climate Solutions",
    "desc": "From its vantage point on the International Space Station, NASA’s Orbiting Carbon Observatory-3 provides measurements of carbon dioxide concentrations over many of the world’s cities. Scientists are using the data to examine the impact of efforts to reduce emissions in Los Angeles.",
    "img": {
      "src": new URL('../stories/media/losangeles_banner.png', import.meta.url).href,
      "alt": "Los Angeles"
    },
    "link": {
      "url": "/stories/losangeles",
      "text": "See More"
    },
    "footer": null
  }
];

export const keyUrbanDatasets = [
  {
    "title": "Carbon Dioxide Emissions Estimates Available at Neighborhood Scale",
    "desc": "Carbon dioxide emissions data are now available at a granular level, from city blocks to entire counties across the contiguous U.S. The latest dataset from the Vulcan Project, called Vulcan 4.0, helps researchers to analyze annual CO₂ emissions at fine scales and helps urban decision-makers to develop localized carbon management strategies.",
    "img": {
      "src": new URL('../stories/media/urban-1.jpeg', import.meta.url).href,
      "alt": "magnifying glass with CO₂ written in text with background of smoke coming out of factories."
    },
    "link": {
      "url": "/stories/vulcan",
      "text": "View more"
    },
    "footer": null
  },
  {
    "title": "Nationwide Dataset Connects Greenhouse Gases and Air Quality",
    "desc": "The GReenhouse gas And Air Pollutants Emissions System (GRA²PES), from NOAA and NIST, combines information on greenhouse gas and air quality pollutant sources into a single national database, offering innovative geospatial detail and new benefits for both climate and public health solutions.",
    "img": {
      "src": new URL('../stories/media/gra2pes.png', import.meta.url).href,
      "alt": "Comparison of CO₂ and NOₓ emission from GRA2PES dataset"
    },
    "link": {
      "url": "/stories/gra2pes",
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
      "url": "/stories/urban-testbed",
      "text": "View more"
    },
    "footer": null
  }
];
