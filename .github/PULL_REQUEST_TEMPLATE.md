## PR Checklists
(Select the checklist that applies to your PR)

### Adding a Dataset Overview:
- [ ] Dataset is available in the production VEDA STAC
- [ ] Production STAC url is referenced in the dataset overview
- [ ] All metadata, including those for the E&A page, is completed in the mdx file
- [ ] Any images are compressed, ideally <500 KB
- [ ] At least one code owner has reviewed the PR

### Adding a Data Story:
- [ ] Any data referenced in the story is already published to VEDA STAC and referenced in a separate dataset overview page (prior to merging or as part of the same PR)
- [ ] All metadata is completed in the mdx file
- [ ] Any images are compressed, ideally <500 KB
- [ ] Published Date is as close to the actual release date as possible (work with veda-ui team to determine potential release date when story is close to ready)
- [ ] At least one code owner has reviewed the PR

### Updating VEDA-UI
- [ ] Confirmed that [updating the `veda-ui` submodule](https://github.com/NASA-IMPACT/veda-config/blob/main/docs/DEVELOPMENT.md#development) is needed.
- [ ] Ensured that the correct version of veda-ui is being used
- [ ] Reviewed the veda-ui changelogs for relevant updates
- [ ] Tested that the changes work as expected with the current instance configuration