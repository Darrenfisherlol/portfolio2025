import styles from "./page.module.css";

import JobCard from "./components/Jobcard/Jobcard";
import Header from "./components/Header/Header"
import TechStack from "./components/Techstack/TechStack"
import Footer from "./components/Footer/Footer"

export default function Home() {
  return (

    <div className={styles.page}>
    
      <Header/>
        
      <main className={styles.main}>

        <JobCard/>

        <div id="TechStackSection">
          <TechStack/>
        </div>

      
    

        <div id="ProjectsSection">
        </div>

      </main>
      <Footer/>

    </div>
  );
}
