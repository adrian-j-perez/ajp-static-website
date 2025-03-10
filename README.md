# README 

Repo is hosting website for `ajp.adrianjperez.com`

`https://adrian-j-perez.github.io/ajp-static-website/`
- this was the old host name that github supplied

## Scans

[![Deploy static site - no build](https://github.com/adrian-j-perez/ajp-static-website/actions/workflows/deploy-static-site.yml/badge.svg)](https://github.com/adrian-j-perez/ajp-static-website/actions/workflows/deploy-static-site.yml)


[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=adrian-j-perez_ajp-static-website)](https://sonarcloud.io/summary/new_code?id=adrian-j-perez_ajp-static-website)

https://sonarcloud.io/project/overview?id=adrian-j-perez_ajp-static-website

## modules / Librays
- md-block
  - https://md-block.verou.me/md-block.js
- Google font and icons
  -  https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0
  -  https://fonts.googleapis.com/css?family=Quicksand:400,500,700
- ~~prismjs - this is for code block the see better https://prismjs.com/ ~~
- jquery
  - https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js

*import these Librays by CDN*

##  Tutorials
- https://www.makeuseof.com/md-block-render-markdown-web-page/ - markdown
  - https://md-block.verou.me/
- https://fonts.google.com/icons

[Layout nav bar based on this: https://codepen.io/albizan/pen/mMWdWZ](https://codepen.io/albizan/pen/mMWdWZ)

TODO
- **fix mobile view for the nave bar not show the other tabs**
- ~~take advantage of .github dir to config website settings for 400?~~
  - no longer possible, as this this method took advantage of Jekyll 
- make other page like to list article  
- ~~need to add a index.html to the home in the root dir .... se what i can do of if i will end up with two differnt file call index????~~
- relook at the cname file and why it need to be present in  repo... 
- ~~`window.location.href = 'newPage.html';` use this as  redict to get to the home have~~
- add the sha hash for integrity check on the script tags... will need to add on using module script tags
  - https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
- home pages embeds Example: how google does when you paste the google link in discord
  - https://stackoverflow.com/questions/59335731/how-to-create-own-embed-site-for-discord


## website structure 

website home page when going to `ajp.adrianjperez.com` will end up with path `/page.home.html`
in the root of the repo there is a index.html that does a redirect 

### Folder Structure 
``` 
current file structure: 

.
├───.github
│   └───workflows
├───md-files
├───page
├───public
│   └───images
└───views
    ├───footer
    └───nav-bar

```

