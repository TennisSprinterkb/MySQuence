import React from "react";
import "./style.css"

function Nav() {
    return (
    <div>
      <nav className="nav-extended">
        <div className="nav-wrapper">
        <div className="center-align">
          <img className="image-logo" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/677/1888743677_5dd6243e-d8c4-444a-8bd2-d07dce7dbcda.png" alt="logo"></img>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="/map">Find A Studio</a></li>
          <li><a href="/">Video Page </a></li>
          <li><a href="/asana">Build a Sequence</a></li>
          <li><a href="/breathe">Breathe</a></li>
          <li><a href="/saved">Saved Seqeunces</a></li>
         <li><a href="/">Logout</a></li>
        </ul>
        </div>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><a href="/map">Find A Studio</a></li>
        <li><a href="/">Video Page </a></li>
        <li><a href="/asana">Build a Sequence</a></li>
        <li><a href="/breathe">Breathe</a></li>
        <li><a href="/saved">Saved Seqeunces</a></li>
        <li><a href="/">Logout</a></li>
      </ul>
    </div>
  );
}

export default Nav;


