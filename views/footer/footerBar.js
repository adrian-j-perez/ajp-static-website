class FooterBarHeader extends HTMLElement {
    // injecting html, along with css 
    // note for css path, name needs to match with path of injection
    // else css will not be applied

    connectedCallback() {
        // this is a accent ` not a quote '
        this.innerHTML = `

<link rel="stylesheet" href="./../views/footer/footerBar.css">  
<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
    rel="stylesheet"
/>  

 <div id="page-container">
   
    <div id="content-wrap">
     <!-- all other page content -->
   </div>

   <footer id="footer">
    <hr>
    <p> "Code to learn, don't learn to code."</p>
    <p> Copyright &#169; 2024 - 
    <a href="https://ajp.adrianjperez.com">ajp.adrianjperez.com</a> 
    </p>
    
    <div class="footer_icons">

    <a href="https://in.adrianjperez.com" target="_blank" >
    <i class="ri-linkedin-fill"></i>
    </a>

    <a href="https://github.adrianjperez.com" target="_blank" >
    <i class="ri-github-fill"></i>
    </a>

    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=perez324158@gmail.com&su=Reaching Out To..." target="_blank">
    <i class="ri-mail-fill"></i>
    </a>
    
    </div>
    
   </footer>

 </div>

`;
    } // end of function
} // end of class

customElements.define('footerbar-header', FooterBarHeader)
