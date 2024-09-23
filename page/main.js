// this this JS file have reuseable components

// todo work on this later and just get the depon loading in.... would be nice to have
function loadImports() {
    console.log("import the lib");

    var script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'; 
    document.head.appendChild(script);

    var nav = document.createElement('script');
    nav.src = '../../views/nav-bar/navHeader.js' // the path is reatlvei to the the file location under views

    document.head.appendChild(nav);
    



    console.log("Finished importing the lib");
    
}

