
import styles from "./page.module.css";


export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.companyName}>My Company</div>
        <nav className={styles.navButtons}>
          <button>Services</button>
          <button>Course</button>
          <button>About</button>
          <button>Contact</button>
          <button>Book Now</button>
        </nav>
      </header>

      <div className={styles.imageMain}>
        <img className={styles.athens} src="https://uploads8.wikiart.org/00340/images/raphael/the-school-of-atenas-1509-1510.jpg" alt="The School of Athens" />
        <div className={styles.imageText}>this is whitespace</div>
      </div>






    </div>


  );
}