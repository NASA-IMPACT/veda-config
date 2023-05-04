---
name: Content Request
about: Use this template to start the content creation process
title: [Name of Content] - [Dataset, Discovery, or Both]
projects: 'VEDA Data & Content Ingestion'
assignees: ''

---

## Instructions

Follow the steps in this ticket to get Datasets and Discoveries published to the VEDA Dashboard. For detailed instructions along each step, use [this document](- Take first stab at comms posts for GFOI).

### Dataset or Discovery

First, identify what type of content you are wanting to publish. There are three main options:

1. New data that does not yet exist in VEDA
2. New Discoveries that only involve graphics or maps of [data already in VEDA](http://veda-staging-stac-browser.s3-website-us-west-2.amazonaws.com/)
3. New Discoveries that involve datasets that don't yet exist in VEDA

If your content falls into option 1, fill in Dataset in the Title of this ticket. If it is option 2, fill in Discovery. If option 3, fill in Both. This means you will have to ingest the data before completing the configuration of the discovery.

### Configuration Process

Follow the high-level [instructions](https://almanac.io/handbook/veda-product-development-documentation-I3UwKo/getting-from-ingestion-to-discovery-I1ESDqS4NuHVdOx82peffQqMGDDdTyE4) linked above to ingest data or configure the dashboard. You should have the ability to create pull requests in all the necessary Github repositories. To create a pull request, it is recommended to do so from this issue, so that your pull requests will all be linked with this issue. This makes it easy to track for yourself and the VEDA team. To create a pull request from an issue, follow these instructions.
On the right side of the issue, you will see the following options. Click on the 'Create a branch' link under Development.
![image](https://user-images.githubusercontent.com/92742765/235434196-958460f1-787c-4d8d-9412-f7570ef492c7.png)

In the resulting window, select the repository you need, as defined in the [instructions](https://almanac.io/handbook/veda-product-development-documentation-I3UwKo/getting-from-ingestion-to-discovery-I1ESDqS4NuHVdOx82peffQqMGDDdTyE4). You can leave the branch name as the pre-generated name.

![image](https://user-images.githubusercontent.com/92742765/235434449-69b285de-87ee-42dc-a02e-036740cd354a.png)

### Information to Gather

If needing to ingest data:
- [ ] Gather metadata shown below for each dataset & paste into this ticket
- [ ] Gather content for an overview page that describes the dataset. Example [here](https://www.earthdata.nasa.gov/dashboard/environmental-justice/datasets/ps_blue_tarp_detections)

title: (If you just provide a pattern for this, we can follow the pattern for each dataset)
description: (similar as above, we can follow a pattern. you can also provide us unique descriptions for each dataset or just a standard description)
license: (based on this list, we usually use CCO-1.0)
provider(s): (producer, processor, licensor)
temporal interval: (if this is consistent for all of these datasets, we can apply for all. please let us know if there are any differences though)
whether it is periodic on the dashboard (periodic = regular time series of layers without gaps): (same as above, let us know if it's not consistent for every dataset)
the dashboard time density: (same as above, let us know if it's not consistent for every dataset)
Spatial extent/bounding box for the dataset: (same as above, let us know if it's not consistent for every dataset)

If needing to configure a Discovery:
- [ ] Draft content and obtain necessary approvals
- [ ] Identify graphics, map visualizations, and time-series charts needed to support the discovery. For time-series charts, pull together csv files to match instructions given [here](https://github.com/NASA-IMPACT/veda-config/blob/develop/docs/MDX_BLOCKS.md#chart)

## Support

If you run into any issues, please send an email to veda@uah.edu with information about the issue you are experiencing. The VEDA team will meet weekly to stay up to date on all content requests and will use Github comments in issues and pull requests as our primary form of communication, unless already contacted by email.
