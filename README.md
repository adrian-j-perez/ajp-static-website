# README 

This repo is using to host the domain path `----.adrianjperez.com`
using github page to host site 
- for more info: https://docs.github.com/en/pages


Packages/Librays using:
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
- look into the github page set up and what come with using the servie
- take advanage of .gihub dir to config website settings ?
- make other page like about, look at the profolio 


## website structure 

### Folder Structure 
``` 
current file structure: 

.
├───md-files
├───page
├───public
│   └───images
└───views
    ├───footer
    └───nav-bar

```

### Views Folder: Custom HTML Elements
 
Under the view directory, it holds custom html elements that are used repeatly 
on the website this help manage elements. This helps maintaining the code all in one spot and all is need to using it is importing the files.
To use the custom elements import the JS file with in the header tag then in the body add the custom html tags. 

Current cusom html elements:
- footer
  - **note to get the footer to 'stick' to the bottom of the page the md-clock need to be present as that add spacing from the css**
- nav bar

Example Code:

```html 
<!-- todo add example..... -->
<head>

</head>

<body>


</body>

```
  





