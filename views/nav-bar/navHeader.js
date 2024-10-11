class NavBarHeader extends HTMLElement {
    connectedCallback() {
        // this is a accent ` not a quote '
        this.innerHTML = `

<link rel="stylesheet" href="./../views/nav-bar/navBar.css">

<nav class="nav">
    <div class="container">
        <div class="logo">
            <a href="./home.html">Home</a>
        </div>
        <div id="mainListDiv" class="main_list">
            <ul class="navlinks">
                <li><a href="./about.html">About</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </div>
        <span class="navTrigger">
            <i></i>
            <i></i>
            <i></i>
        </span>
    </div>
</nav>

<!-- this section is to add the image by using css -->
<section class="home">
</section>

`;
    } // end of function
} // end of class

customElements.define('navbar-header', NavBarHeader)


$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK - navbar scolling");
    } else {
        $('.nav').removeClass('affix');
    }
});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


// <!-- Function used to shrink nav bar removing paddings and adding black background -->