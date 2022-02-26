import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return (


<div class = "w-full flex justify-center bg-teal-500 p-6">
  <div className="pr-2">
  <a className="" href="https://www.linkedin.com/in/mikerawlings9/">
    <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x" />
    </a>
    </div>
  <div className="pl-2">
  <a className="" href="https://github.com/Mikerawl">
    <FontAwesomeIcon icon="fa-brands fa-github" size="2x"/>
  </a> 
  </div>
</div>

)};

export default Footer;