import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.root}> 
      
      <img src="https://uploads8.wikiart.org/00340/images/raphael/the-school-of-atenas-1509-1510.jpg"> 
      
      
      </img>
      <div className={styles.imageText}>
      this is whitespace
      </div>
      


    </div>
  );
}
