import { Fragment } from "react";

import "./Footer.css"

export default function Footer(){

    return(
        <footer className="footerBox">

            <div className="rightBox">
                <h3>Darren Fisher</h3>

                <span>Software Engineer</span>
                <span>Quant</span>
                <span>Data Engineer</span>
                <span>Mstr. Sci. Big data and Analytics</span>
            </div>

            {/* <div className="midBox">
                <h3>Sections</h3>

                <a href="#ExperienceSection">Experience</a>
                <a href="#TechStackSection">Tech Stack</a>
                <a href="#ProjectsSection">Projects</a>

            </div> */}

            <div className="leftBox">
                <h3>Socials</h3>

                <a href="https://www.linkedin.com/in/darrenafisher/" target="_blank">Linkedin</a>
                <a href="https://github.com/Darrenfisherlol" target="_blank">Github</a>
            
            <div><a href="#HeaderBox">Back To Top</a></div>
                

            </div>
        </footer>
        
);
}

