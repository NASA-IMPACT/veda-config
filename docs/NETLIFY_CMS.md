## How to use Netlify CMS with Veda dashboard

### Sign up

You can access to Veda dashboard configuration editor at https://visex.netlify.app/admin/index.html. You should be able to see a prompt like the one below if it is your first time.

![Editor showing sign-up prompt](./media/netlify-cms-landing.png)

Follow the steps on the page to sign up as a user for CMS.

### Configure dataset 

Click on New Dataset, or you can duplicate the existing dataset through left-top toolbar. 

![Editor showing 'new dataset' button](./media/new-data-set-btn.png)
![Editor showing 'duplicate' button](./media/duplicate-btn.png)


Currently the UI requires bare minimum to display the data in Explorer tab, Mind that you need to fill up optional fields (ex. thematics) for VisEx Dashboard.
### 'Save' with preview

Once you 'save' your post through a toolbar, cofiguration editor will show 'Check for preview' button on the top right corner of the page.

![Editor showing 'check for preview' button](./media/check-for-preview.png)

The button will change its text to 'View preview' once the preview is ready as you click upon it. You can click on the button to see your change on preview page.

![Editor showing 'view preview' button](./media/view-preview.png)

#### Behind the scene

When the post is saved, PR with the new change is generated to staging branch automatically by Netlify. You can treat it like other PRs.

![Example PR generated through Netlify CMS](./media/example-pr-netlify-cms.png)

### Where can I find the post that I (or my collaborator) saved?

On main dashboard view, you will find 'workflow' tab on top left.

![Highlighting workflow button](./media/workflow.png)

You can find the posts generated through Netlify CMS on this page. 

![Highlighting workflow button](./media/workflow-sample.png)

Moving the post through columns will change the label of the pr. For example, two prs below were generated through Netlify CMS. `Create test-dataset.data` is in 'review' column while `Create no2-test.data` is in 'draft' column. You do not have to use this workflow, but it is there if you want to signal your collaborator about where your post is.

![Highlighting workflow button](./media/example-workflow-label.png)

### Publish 
you can merge the PR, or hit 'publish' button through the editor UI. We recommend using the first method since the current version of CMS still requires some manual edits. 
### Caveats

Some manual edits to mdx file are needed after the file is generated through Netlify CMS.

- `media.src` : `::file` need to be put as prefix for the path.
- `legend.color` for `categorical` type legend : Current CMS UI only supports `gradient` type legend. If you are using categorical legend, you need to edit mdx directly.