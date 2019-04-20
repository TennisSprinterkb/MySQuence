import React from "react";
import "./style.css"

function Nav() {
    return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <div className="center-align">
            <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/677/1888743677_5dd6243e-d8c4-444a-8bd2-d07dce7dbcda.png" alt="logo"></img>
      
          {/* <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
          <ul class="right hide-on-med-and-down">
            <li><a href="/map">Find a Studio</a></li>
            <li><a href="/">Create a Video</a></li>
            <li><a href="/">Build a Sequence</a></li>
            <li><a href="/">Breathe</a></li>
            <li><a href="/">Logout</a></li>
          </ul>
        </div>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li><a href="/map">Find a Studio</a></li>
        <li><a href="/">Create a Video</a></li>
        <li><a href="/">Build a Sequence</a></li>
        <li><a href="/">Breathe</a></li>
        <li><a href="/">Logout</a></li>
      </ul>
    </div>
  );
}

export default Nav;

