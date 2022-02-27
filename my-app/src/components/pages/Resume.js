import React from "react";

import resume from "./images/Michael_Rawlings_Resume.pdf";

const Resume = () => {
  return (
    <div className="md:container md:mx-auto">
      <h1 className="text-4xl object-left-top">Michael's Resume</h1>

      <a class="link-color" href={resume}>Michael's Resume</a>


      <div>
        <br></br>
        <h2 className="text-2xl">
          <u>Front End Technologies</u>
        </h2>
        <p>HTLM</p>
        <p>CSS</p>
        <p>Javascript</p>
        <p>Handlebars</p>
        <p>Tailwind</p>
        <p>Bootstrap</p>
        <p>React</p>
        <br></br>

        <h2 className="text-2xl">
          <u>Backend Technologies</u>
        </h2>
        <p>MongoDB</p>
        <p>MySQL</p>
        <p>Node.js</p>
        <p>Express.js</p>
        <p>MERN</p>
      </div>
    </div>
  );
};

export default Resume;
