import Image from "next/image";
import styles from "./page.module.css";


import Timeline from "./components/timeline/timeline";
import Header from "./components/header/header"

export default function Home() {
  return (

    <div className={styles.page}>
 
      <Header/>
        
      <main className={styles.main}>

        <div>page intro</div>

        <div>
          blocks of tech stack ?? ?? 
          C#, Python, React, TS, HTML, CSS, Java
          ASP.NET Core, .Net Framework
          Resharper, VSCode, Docker, Git
          Snowflake, 
          GCP, Azure, AWS,
          Airflow, Dagster, SSIS,
          Azure Data Studio, SSMS
        </div>

        <Timeline/>

      </main>
      <div className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </div>
      <footer>

        <div>
          Darren Fisher
          <button> Contact me</button>
        </div>

        <div>
          Experience
          Projects
          Tech Stack
        </div>
        <div>
        Social:
        Linkedin
        Github
      
        <button> Back to top</button>
        </div>
      </footer>
    </div>
  );
}
