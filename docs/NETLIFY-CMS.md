## How to use Netlify CMS with Veda dashboard

### Sign up

You can access to Veda dashboard configuration editor at https://visex.netlify.app/admin/index.html You should be able to see a promt like below if it is your first time.

![Editor showing login prompt](./media/netlify-cms-landing.png)

Follow the steps on the page to sign up as a user for CMS.

### Configure dataset 

### 'Save' with preview

Once you 'save' your post through a toolbar, PR with the new post will be generated to staging branch. Cofiguration editor will show 'Check for preview' button on the top right corner of the page.
![Editor showing 'check for preview' button](./media/check-for-preview.png)

The button will change its text to 'View preview' once the preview is ready. You can click on the button to see your change.
![Editor showing 'view preview' button](./media/view-preview.png)

### Publish 
you can merge the PR, or hit 'publish' button through the editor UI. We recommend using the first method since the current version of CMS still requires manual edits.

### Caveats

Some manual edits to mdx file are needed after the file is generated through Netlify CMS.

- `media.src` : `::file` need to be put as prefix for the path.
- `legend.color` for `categorical` type legend : Current CMS UI only supports `gradient` type legend. So if you use categorical legend, you need to edit mdx directly.