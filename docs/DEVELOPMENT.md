# Development
There's not much development to be done in the config repo. The UI part of Veda is stored at [veda-ui](https://github.com/NASA-IMPACT/veda-ui), and connected to the config via a git submodule.

**To avoid breaking changes, the version of `veda-ui` is pinned to a specific commit making use of a [git-submodule](https://www.atlassian.com/git/tutorials/git-submodule).** This allows development to continue without breaking existent instances.
You can see the version running:
```
./.veda/veda --info
```

The commit you may want to pin the `veda-ui` to will depend, but to get the latest changes from the `main` branch you could do:
```
# Go into the submodule
cd .veda/ui

# Update the submodule info
git fetch

# Switch to the branch you want.
# You can also choose a specific tag.
git switch main

# Get the latest changes
git pull

# Get back to the root directory
cd -
```

> [!IMPORTANT]  
> For a production release, it is recommended to pin `veda-ui` to a release tag (viewable via `git tags`) instead of a branch. This is to make sure that only changes that have been thoroughly tested are pulled in to the release.

At this point you will have changed the commit the submodule is pointed to.  
If you run a diff on the submodule `git diff .veda/ui` you'll see that the commit changed.
```diff
diff --git a/.veda/ui b/.veda/ui
index 67c68c4..57d18a1 160000
--- a/.veda/ui
+++ b/.veda/ui
@@ -1 +1 @@
-Subproject commit 67c68c4115283a76fe8f3e0921fcd43ad281077a
+Subproject commit 57d18a12a4c17eaf436e128bd06904cba75f3e4a
```

The only thing left to do is to commit this change like you'd normally do.
