class FooterBarHeader extends HTMLElement {
    // injecting html, along with css 
    // note for css path, name needs to match with path of injection
    // else css will not be applied

    connectedCallback() {
        // this is a accent ` not a quote '
        this.innerHTML = `

<link rel="stylesheet" href="./../views/footer/footerBar.css">    

 <div id="page-container">
   
    <div id="content-wrap">
     <!-- all other page content -->
   </div>

   <footer id="footer">
    <hr>
    <p>"Code to learn, don't learn to code."</p>
    <p>Copyright &#169; 2024 - Website: ajp.adrianjperez.com</p>
   </footer>

 </div>

`;
    } // end of function
} // end of class

customElements.define('footerbar-header', FooterBarHeader)
