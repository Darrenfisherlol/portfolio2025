import Image from "next/image";
import styles from "./page.module.css";

// CSS 80% of it lol
// https://cssreference.io/flexbox/

import Timeline from "./components/timeline/timeline";
import Header from "./components/header/header"

export default function Home() {
  return (

    <div className={styles.page}>
 
      <Header/>
        
      <main className={styles.main}>

        <div>page intro</div>

        <div id="TechStackSection">
          blocks of tech stack ?? ?? 
          C#, Python, React, JS, TS, HTML, CSS, Java
          ASP.NET Core, .Net Framework
          Resharper, VSCode, Docker, Git
          Snowflake, 
          GCP, Azure, AWS,
          Airflow, Dagster, SSIS,
          Azure Data Studio, SSMS
        </div>

        <Timeline/>

      
    

        <div id="ProjectsSection">
          Projects:
          - Logistics Passion Project
          - Portfolio 2024 vs 2025
          - Coffee Shop MVC ASP.Net "CRUD 101"
        </div>
      </main>
      <footer>

        <div>
          Darren Fisher
          <a href="https://www.linkedin.com/in/darrenafisher/">
            <button>Contact Me</button>
          </a>
        </div>

        <div>
          
          <a href="#ExperienceSection">Experience</a>
          <a href="#TechStackSection">Tech Stack</a>
          <a href="#ProjectsSection">Projects</a>

        </div>
        <div>
        Socials:
        <a href="https://www.linkedin.com/in/darrenafisher/">Linkedin</a>
        <a href="https://github.com/Darrenfisherlol">Github</a>
        
      
        <button> Back to top</button>
        </div>
      </footer>
    </div>
  );
}
