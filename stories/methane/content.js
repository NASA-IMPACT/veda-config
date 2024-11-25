export const tools = [
    {
        "title": "EMIT Methane Plume Viewer",
        "desc": "NASA’s EMIT instrument measures carbon dioxide and methane from its position aboard the International Space Station. This updated interactive plume viewer offers a global map of large, point source methane plumes. New functionalities include EMIT observation passes over time, geographic plume quantifications, and a point-and-click plume measurement tool.",
        "img": {
          "src": new URL('../../common/media/EMIT_Plume_Viewer_card.png', import.meta.url).href,
          "alt": "view of colored shape overlaid on satellite landscape image with boxes of information containing plume details"
        },
        "link": {
          "url": "/data-catalog/emit-ch4plume-v1",
          "text": "See more"
        },
        "footer": null
    },
    {
      "title": "GOES Methane Plume Viewer",
      "desc": "Primarily a weather satellite, NOAA’s GOES also measures greenhouse gases on a continental scale. It is capable of detecting large methane plumes from sources like oil and gas production and agriculture. This brand new interactive plume viewer is based on novel data from the newest satellite, GOES-19, with more plumes to be added soon.",
      "img": {
        "src": new URL('../../common/media/GOES_Methane_Plume_viewer_card.png', import.meta.url).href,
        "alt": "map showing colorful methane gas plume from GOES over a green surface satellite image on June 15, 2020 in Indiana"
      },
      "link": {
        "url": "/data-catalog/goes-ch4plume-v1",
        "text": "See more"
      },
      "footer": null
    },
    {
      "title": "U.S. Gridded Anthropogenic Methane Emissions Inventory",
      "desc": "Use the exploration and analysis environment to customize maps of high-resolution methane emission estimates from the EPA based on its Inventory of U.S. Greenhouse Gas Emissions and Sinks (U.S. GHGI). The U.S. GHGI synthesizes estimates from multiple agencies to calculate emissions from many different sources.",
      "img": {
        "src": new URL('../../common/media/EPA_Gridded_Methane_card.png', import.meta.url).href,
        "alt": "satellite map of western US region with areas of color indicating annual methane emissions for 2018"
      },
      "link": {
        "url": "/exploration?datasets=%5B%7B%22id%22%3A%22total-methane%22%2C%22settings%22%3A%7B%22isVisible%22%3Atrue%2C%22opacity%22%3A100%2C%22analysisMetrics%22%3A%5B%7B%22id%22%3A%22mean%22%2C%22label%22%3A%22Average%22%2C%22chartLabel%22%3A%22Average%22%2C%22themeColor%22%3A%22infographicB%22%7D%5D%2C%22colorMap%22%3A%22epa-ghgi-ch4%22%2C%22scale%22%3A%7B%22min%22%3A0%2C%22max%22%3A20%7D%7D%7D%5D&taxonomy=%7B%7D&search=&date=2020-01-01T06%3A00%3A00.000Z",
        "text": "See more"
      },
      "footer": null
    },
    {
      "title": "NOAA Concentration Viewer",
      "desc": "Get a bird’s-eye view of NOAA’s atmospheric methane measurements  from ground stations around the globe, and explore how methane concentrations have changed over time. These data include several different types of measurements as part of NOAA’s Global Greenhouse Gas Reference Network.",
      "img": {
        "src": new URL('../../common/media/NOAA_Methane_Concentration_Viewer_card.png', import.meta.url).href,
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
      "desc": "An interactive methane and carbon dioxide data tool for NIST’s Urban GHG Measurements Testbed System, using measurements from ground-based observing networks in three urban testbeds across the U.S.",
      "img": {
        "src": new URL('../../common/media/NIST_NEC_Methane_Viewer_card1.png', import.meta.url).href,
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

export const stories = [
    {
        "title": "NASA Expands Capabilities in Methane Detection from Air and Space",
        "desc": "To meet needs for methane measurement, two key NASA technologies have made recent steps. The Earth Surface Mineral Dust Source Investigation (EMIT) project is expanding its methane detection from space, and Airborne Visible/Infrared Imaging Spectrometer (AVIRIS) test flights are helping to improve scientific understanding of sources of methane. ",
        "img": {
          "src": new URL('./media/EMIT_story_card.png', import.meta.url).href,
          "alt": "the international space station in orbit over the earth with a zoomed in view of the EMIt instrument on the station"
        },
        "link": {
          "url": "/stories/emit-extension-nasa-expands",
          "text": "See more"
        },
        "footer": null
    },
    {
        "title": "NIST Developing Consensus Standards for Growing Volume of Methane Plume Satellite Data",
        "desc": "Methane measurements have seen a boom in data volume within the last decade as remote sensing technologies have advanced and new space-based instruments have taken flight. To support greater transparency and interoperability, NIST is leading an effort to standardize protocols for methane plume data reporting, processing, and comparison.",
        "img": {
          "src": new URL('./media/NIST_Methane_Intercomparisons_card.png', import.meta.url).href,
          "alt": "industrial smokestack background overlaid with connected points of light and human in foreground looking at the scene"
        },
        "link": {
          "url": "/stories/nist-methane-intercomparisons",
          "text": "See more"
        },
        "footer": null
    },
    {
        "title": "Earth System Models to Uncover Drivers of Natural Methane Emissions",
        "desc": "Major natural sources of methane, like wetlands, create complications in identifying types and quantities of emissions. Researchers from NASA and NOAA are using advanced technology and models to deepen understanding of the role of natural sources and sinks in global atmospheric concentrations and support improved estimates in the global methane budget.",
        "img": {
          "src": new URL('./media/Wetlands_image_v2_rs.png', import.meta.url).href,
          "alt": "view of wetland and brush/forest area from above"
        },
        "link": {
          "url": "/stories/methane-inverse-models",
          "text": "See more"
        },
        "footer": null
    },
    {
        "title": "Advanced Technology to Detect Methane “Super Emitters” from Oil and Natural Gas Operations",
        "desc": "text TBA by EPA",
        "img": {
          "src": new URL('./media/Gray_box.png', import.meta.url).href,
          "alt": "gray box"
        },
        "link": {
          "url": "/stories/epa-super-emitter",
          "text": "See more"
        },
        "footer": null
    },
    {
        "title": "NOAA’s GOES Satellites Can Provide Quicker Detection of Methane Gas Leaks",
        "desc": "Results of a new experiment show technology aboard NOAA’s GOES satellites can help scientists better detect emissions of methane – a potent greenhouse gas – as often as every seven seconds. This will provide faster, more complete data on the location and amount of methane emissions to enable more rapid and successful mitigation efforts.",
        "img": {
          "src": new URL('./media/GOES_story_card_image.png', import.meta.url).href,
          "alt": "colorful regions representing methane plumes over brown surface as observed by GOES satellite"
        },
        "link": {
          "url": "www.research.noaa.gov",
          "text": "See more"
        },
        "footer": null
    }
]

export const trainings = [
    {
        "title": "ARSET Training on Large Emission Event Detection and Monitoring",
        "desc": "This introductory two-part training introduces the U.S. Greenhouse Gas Center and provides an overview of how methane observations from the Earth surface Mineral dust Source Investigation (EMIT) mission can be used to identify and monitor areas of high methane enhancement.",
        "img": {
            "src": new URL('../../overrides/media/Methane_Website_Header.png', import.meta.url).href,
            "alt": "the ARSET logo overlaid on an image of a colorful area representing an EMIT methane plume "
        },
        "link": {
        "url": "https://appliedsciences.nasa.gov/get-involved/training/english/arset-methane-observations-large-emission-event-detection-and",
        "text": "See more"
        },
        "footer": null
    }
]


export const datasets = [
    {
        "title": "U.S. Gridded Anthropogenic Methane Emissions Inventory",
        "desc": "Spatially disaggregated 0.1°x 0.1° maps of annual U.S. anthropogenic methane emissions from over 25 emission sources, consistent with the U.S. Inventory of Greenhouse Gas Emissions and Sinks.",
        "img": {
          "src": new URL('../../datasets/media/epa-annual--cover.jpg', import.meta.url).href,
          "alt": "Total Gridded Methane Emissions from the U.S. Inventory of Greenhouse Gas Emissions and Sinks"
        },
        "link": {
          "url": "/data-catalog/epa-ch4emission-yeargrid-v2express",
          "text": "See more"
        },
        "footer": null
    },
    {
        "title": "Geostationary Satellite Observations of Extreme and Transient Methane Emissions from Oil and Gas Infrastructure",
        "desc": "A sample of methane plumes from point sources observed since 2019 by the U.S. Geostationary Operational Environmental Satellites (GOES) over North and South America",
        "img": {
          "src": new URL('../../datasets/media/goes-ch4plume--cover.png', import.meta.url).href,
          "alt": "emission from industry"
        },
        "link": {
          "url": "/data-catalog/goes-ch4plume-v1",
          "text": "See more"
        },
        "footer": null
    },
    {
        "title": "Wetland Methane Emissions, LPJ-EOSIM Model ",
        "desc": "Global monthly and daily 0.5 degree resolution estimates of wetland methane emissions from the LPJ-EOSIM model, version 1",
        "img": {
          "src": new URL('../../datasets/media/ch4-wetland--cover.jpeg', import.meta.url).href,
          "alt": "svs visualiztion"
        },
        "link": {
          "url": "/data-catalog/lpjeosim-wetlandch4-grid-v1",
          "text": "See more"
        },
        "footer": null
    },
    {
        "title": "CarbonTracker-CH₄ Isotopic Methane Inverse Fluxes",
        "desc": "Global, monthly 1 degree resolution methane emission estimates from microbial, fossil and pyrogenic sources derived using inverse modeling, version 2023",
        "img": {
          "src": new URL('../../datasets/media/ct-ch4-monthgrid-v2023-cover.jpg', import.meta.url).href,
          "alt": "three dimensional plot of methane in the atmosphere"
        },
        "link": {
          "url": "/data-catalog/ct-ch4-monthgrid-v2023",
          "text": "See more"
        },
        "footer": null
    },
    {
        "title": "GOSAT-based Top-down Total and Natural Methane Emissions ",
        "desc": "Total and natural methane emissions derived using the GEOS-Chem global chemistry transport model with inclusion of GOSAT data.  Methane emission values for both before and after adding GOSAT to the model are mapped to a 1° resolution grid.  Version 1.0 contains data only for 2019",
        "img": {
          "src": new URL('../../datasets/media/oco2-mip-ch4budget-yeargrid-v1--cover.jpg', import.meta.url).href,
          "alt": "Dried/Burned trees"
        },
        "link": {
          "url": "/data-catalog/gosat-based-ch4budget-yeargrid-v1",
          "text": "See more"
        },
        "footer": null
    }
]
