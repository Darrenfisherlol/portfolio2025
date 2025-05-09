import Image from "next/image";
import styles from "./page.module.css";


import Timeline from "./components/timeline/timeline";


export default function Home() {
  return (
    <div className={styles.page}>
 
        <header> 
          <h2>DF</h2>
          <ul>
            <li>Experience</li>
            <li>Tech Stack & Projects</li>
            <li>Linkedin</li>
            <li><button>Contact Me</button></li>
          </ul>
        </header>
      

      <main className={styles.main}>

        <div>
          refs:
          https://www.awwwards.com/sites/navigate
        </div>

        <div>page intro</div>

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
