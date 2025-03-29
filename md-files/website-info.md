# Website Creation
How I made this website and the problems I ran into during the process.

## ajp.adrianjperez.com
I will go over how this website is setup.

### DNS Setup
Going first is getting the domain `adrianjperez.com`, I first purchase the domain from Google Domains around 2022 to experiment then Google deicide to sale there domain service to SquareSpace around June 2023. https://who.is/whois/adrianjperez.com

So I am using SquareSpace to manage my domain, I did not want this website to be on the root domain so, I decided to add the subdomain called `ajp`. However you are managing your domain, a DNS record will need to be made, for my case I added a CNAME record giving it `ajp` as host (under my root domain name of adrianjperez.com), and since this is cname record I will put the corresponding domain name that i would like to point, this would be `adrian-j-perez.github.io`, this was given to me by Github Pages.

### Github Pages Custom Domain
I am currently using GitHub to host the website (more details down below [#Github] ). Anyway, when using github pages it will give you a free url based on you github repo and username. Since I have my own domain so I decided to use it.

To quickly review what I did, I enter my repository that the website is under is, from there find the Settings tab and find the section called `Code and automation` under there click on `Pages`. you should then find a custom section and enter your domain that will replace the given github.

There is more that can be done but I will not go to much into detail as there is documentation 
[Github Pages - Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) and some videos that you can find to do this setup.


>[!NOTE]
> For my website I have Enforce HTTPS enable, this means I had to do more setup configuration, but it is not need for first time setup. Anyway here is the doc link to learn more [github-pages-site-with-https](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https) 


## Hosting

### GitHub
I am using using GitHub as my version control / repo and taking advantaged of there free tier that includes hosting a website - this provided service is called Github Page [about-github-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages). If you go over the documentation you will see There are a few catches / limits with using it, such as
- repo must be public
- general use case is educational purposes
- storage limit (1GB)
- quick set is geared to using Jekyll
- ...

for my us case this is fine but, I will have to do some Configuration since I did not want to use Jekyll, as I am targeting more of a minimal static html website with our using any kind of frameworks

### Configuration
The major configuration I had to do was GitHub Actions, since my aim is to host a static website without any kind of framework. Since i am using the Github Pages i had to go to the repo setting tab go to pages which is under code and automation section from there i had to make sure `GitHub Actions` was selected instead of deploy from branch this is under build and deployment -> Source

Once that is set, I than setup the workflow using GitHubs pre-config workflows, I have selected the one called `Static HTML` under the Pages section. That is all that was needed deploy.
>[!NOTE]
> A `index.html` file must be in the root repo as it will try to find that file to display whenever someone going to the website. This can cause a 404 error page by github if it can not find it. 


## Local Development


## Challenges???  

### index.html 





### Custom HTML Elements
**todo move this to the other markdown file** 
 
Under the view directory, it holds custom html elements that are used repeatedly  
on the website this help manage elements. This helps maintaining the code all in one spot and all is need to using it is importing the files.
To use the custom elements import the JS file with in the header tag then in the body add the custom html tags. 

## Current custom html elements:

***todo move this section to the other markdown file for the website***

- footer
  - **note to get the footer to 'stick' to the bottom of the page the md-clock need to be present as that add spacing from the css**
- nav bar

Example Code:

```html 
<!-- Example of implementing footer -->
<head>

    <link rel="stylesheet" href="./<path-to-css>/main.css">

    <!-- footer tag -->
    <script src="./<path-to-footer>/views/footer/footerBar.js"></script>
</head>

<body>
    <!-- add footer -->
    <footerbar-header></footerbar-header>
</body>

```


# moving here for now...
 
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
