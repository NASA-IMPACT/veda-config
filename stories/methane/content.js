export const tools = [
    {
        "title": "EMIT Methane Plume Viewer",
        "desc": "NASA’s EMIT instrument measures mineral dust, carbon dioxide and methane from the International Space Station. This updated interactive plume viewer offers a global map of large, point source methane plumes. New functionalities include EMIT overpasses over time, geographic plume quantifications, and a point-and-click plume measurement tool.",
        "hideExternalLinkFlag": true,
        "img": {
          "src": new URL('../../common/media/EMIT_Plume_Viewer_card.png', import.meta.url).href,
          "alt": "view of colored shape overlaid on satellite landscape image with boxes of information containing plume details"
        },
        "link": {
          "url": "https://earth.gov/ghgcenter/custom-interfaces/emit-ch4plume-v1",
          "text": "See more"
        },
        "footer": null
    },
    {
      "title": "GOES Large Plume Visualization",
      "desc": "NOAA’s GOES is the Western Hemisphere’s most advanced weather-monitoring satellite system, capable of detecting very large methane plumes. A new tool using GOES-16 data allows users to visualize large methane emission events, select the region and plume of interest, and animate to see how the plume changes over five-minute intervals.",
      "hideExternalLinkFlag": true,
      "img": {
        "src": new URL('../../common/media/GOES_Methane_Plume_viewer_card.png', import.meta.url).href,
        "alt": "map showing colorful methane gas plume from GOES over a green surface satellite image on June 15, 2020 in Indiana"
      },
      "link": {
        "url": "https://earth.gov/ghgcenter/custom-interfaces/goes-plume-viewer/",
        "text": "See more"
      },
      "footer": null
    },
    {
      "title": "U.S. Gridded Anthropogenic Methane Emissions Inventory",
      "desc": "Use the exploration and analysis environment to display custom maps and time series of high-resolution methane emission estimates from the EPA based on their Gridded Anthropogenic Methane Emissions Inventory. The Gridded inventory translates national and state level information to detailed maps that help researchers compare the inventory to atmospheric observations.",
      "img": {
        "src": new URL('../../common/media/EPA_Gridded_Methane_card.png', import.meta.url).href,
        "alt": "satellite map of western US region with areas of color indicating annual methane emissions for 2018"
      },
      "link": {
        "url": '/exploration?datasets=[{"id":"total-methane","settings":{"isVisible":true,"opacity":100,"analysisMetrics":[{"id":"mean","label":"Average","chartLabel":"Average","themeColor":"infographicB"}],"colorMap":"epa-ghgi-ch4","scale":{"min":0,"max":20}}}]&taxonomy={}&search=epa&date=2020-01-01T06:00:00.000Z',
        "text": "See more"
      },
      "footer": null
    },
    {
      "title": "NOAA Methane Concentration Viewer",
      "desc": "Get a bird’s-eye view of NOAA’s atmospheric methane measurements  from ground stations around the globe, and explore how methane concentrations have changed over time. These data include tower, ground site and flask measurements as part of NOAA’s Global Greenhouse Gas Reference Network.",
      "hideExternalLinkFlag": true,
      "img": {
        "src": new URL('../../common/media/NOAA_Methane_Concentration_Viewer_card.png', import.meta.url).href,
        "alt": "map showing Mauna Loa location of station with a time series of data below the map"
      },
      "link": {
        "url": "https://earth.gov/ghgcenter/custom-interfaces/noaa-gggrn-ghg-concentrations/index.html?ghg=ch4&frequency=all",
        "text": "See more"
      },
      "footer": null
    },
    {
      "title": "NIST Tower Data Viewer",
      "desc": "An interactive methane and carbon dioxide data tool for NIST’s Urban GHG Measurements Testbed System, using measurements from ground-based observing networks in three urban testbeds across the U.S.",
      "img": {
        "src": new URL('../../common/media/NIST_NEC_Methane_Viewer_card1.png', import.meta.url).href,
        "alt": "map showing Northwest Baltimore, MD location of station with a time series of data below the map"
      },
      "link": {
        "url": "/data-catalog/influx-testbed-ghg-concentrations",
        "text": "See more"
      },
      "footer": {
        "links": [
          {
            "title": "Indianapolis Flux Experiment (INFLUX)",
            "url": "https://earth.gov/ghgcenter/custom-interfaces/nist-interface/?agency=nist&region=in&zoom-level=8&ghg=ch4"
          },
          {
            "title": "Los Angeles Megacity Carbon Project",
            "url": "https://earth.gov/ghgcenter/custom-interfaces/nist-interface/?agency=nist&region=lam&zoom-level=7&ghg=ch4"
          },
          {
            "title": "Northeast Corridor (NEC) Urban Test Bed",
            "url": "https://earth.gov/ghgcenter/custom-interfaces/nist-interface/?agency=nist&region=nec&zoom-level=5&ghg=ch4"
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
          "url": "/stories/emit-extension-aviris-flights",
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
        "title": "Models and Observations Combine to Uncover Drivers of Natural Methane Emissions",
        "desc": "Major natural sources of methane, like wetlands, create complications in identifying types and quantities of emissions. Researchers from NASA and NOAA are using advanced technology and models to deepen understanding of the role of natural sources and sinks in global atmospheric concentrations and support improved estimates in the global methane budget.",
        "img": {
          "src": new URL('./media/Wetlands_image_v2_rs.png', import.meta.url).href,
          "alt": "view of wetland and brush/forest area from above"
        },
        "link": {
          "url": "/stories/modeling-natural-methane-emissions",
          "text": "See more"
        },
        "footer": null
    },
    {
        "title": "Advanced Technology to Detect Methane “Super Emitters” from Oil and Natural Gas Operations",
        "desc": "Under the U.S. EPA’s recent rule for oil and natural gas operations, EPA-certified third parties may use EPA-approved remote-sensing technology to identify large methane releases known as “super emitters.” The third parties will share data with the EPA. If the data are credible, the EPA will notify owners/operators, who must investigate.",
        "img": {
          "src": new URL('../media/EPA_Super_Emitters_card.png', import.meta.url).href,
          "alt": "a cluster of white oil tanks"
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
          "url": "https://www.nesdis.noaa.gov/news/noaas-goes-satellites-can-provide-quicker-detection-of-large-methane-emissions",
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
        "desc": "Spatially disaggregated 0.1°x 0.1° maps of annual U.S. anthropogenic methane emissions from over 25 emission sources, consistent with the U.S. Inventory of Greenhouse Gas Emissions and Sinks",
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
        "desc": "Total and wetland yearly methane emissions derived using the GEOS-Chem global chemistry transport model with inclusion of GOSAT data for 2010 to 2022 on a 4 x 5 degree (lat/lon) grid",
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
