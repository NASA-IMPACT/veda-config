---
name: Content Request
about: Use this template to start the content creation process
title: [Name of Content] - [Dataset, Discovery, or Both]
projects: 'VEDA Data & Content Ingestion'
assignees: ''

---

## Instructions

Follow the steps in this ticket to get Datasets and Discoveries published to the VEDA Dashboard. For detailed instructions along each step, use [this document](https://almanac.io/handbook/veda-product-development-documentation-I3UwKo/getting-from-ingestion-to-discovery-I1ESDqS4NuHVdOx82peffQqMGDDdTyE4).

### Dataset or Discovery

First, identify what type of content you are wanting to publish. There are three main options:

1. New data that does not yet exist in VEDA
2. New Discoveries that only involve graphics or maps of [data already in VEDA](https://radiantearth.github.io/stac-browser/#/external/staging-stac.delta-backend.com/?.language=en)
3. New Discoveries that involve datasets that don't yet exist in VEDA

If your content falls into option 1, fill in Dataset in the Title of this ticket. If it is option 2, fill in Discovery. If option 3, fill in Both. This means you will have to ingest the data before completing the configuration of the discovery.

## Process & Support

Follow the high-level [instructions](https://almanac.io/handbook/veda-product-development-documentation-I3UwKo/getting-from-ingestion-to-discovery-I1ESDqS4NuHVdOx82peffQqMGDDdTyE4) linked above to ingest data or configure the dashboard. You should have the ability to create pull requests in all the necessary Github repositories. To create a pull request, it is recommended to do so from this issue, so that your pull requests will all be linked with this issue. This makes it easy to track for yourself and the VEDA team. To create a pull request from an issue, follow these instructions.
On the right side of the issue, you will see the following options. Click on the 'Create a branch' link under Development.
![image](https://user-images.githubusercontent.com/92742765/235434196-958460f1-787c-4d8d-9412-f7570ef492c7.png)

In the resulting window, select the repository you need, as defined in the [instructions](https://almanac.io/handbook/veda-product-development-documentation-I3UwKo/getting-from-ingestion-to-discovery-I1ESDqS4NuHVdOx82peffQqMGDDdTyE4). You can leave the branch name as the pre-generated name.

![image](https://user-images.githubusercontent.com/92742765/235434449-69b285de-87ee-42dc-a02e-036740cd354a.png)

If you run into any issues, please send an email to veda@uah.edu with information about the issue you are experiencing. The VEDA team will meet weekly to stay up to date on all content requests and will use Github comments in issues and pull requests as our primary form of communication, unless already contacted by email.
