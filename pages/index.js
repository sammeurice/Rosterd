// our-domain.com
import Link from "next/link";
import styles from "./homePageStyles.module.css";
import {
  FaFootballBall,
  FaBasketballBall,
  FaHockeyPuck,
  FaQuestionCircle,
} from "react-icons/fa";
import { NavBar } from "../components/NavBar";

function HomePage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainWrapper}>
        <NavBar />
        <div className={styles.headerContainer}>
          <p className={styles.headerText}>Select a league!</p>
          <Link href="/help" className={styles.helpLinkContainer}>
            <FaQuestionCircle size={60} className={styles.helpLink} />
          </Link>
        </div>

        <ul className={styles.homepageListContainer}>
          <li>
            <Link href="/nba" className={styles.linkContainer}>
              <FaBasketballBall size={80} />
              <p>NBA</p>
            </Link>
          </li>
          <li>
            <Link href="/nba" className={styles.linkContainer}>
              <FaFootballBall size={80} />
              <p>NFL</p>
            </Link>
          </li>
          <li>
            <Link href="/nba" className={styles.linkContainer}>
              <FaHockeyPuck size={80} />
              <p>NHL</p>
            </Link>
          </li>
        </ul>
        <p className={styles.copyrightText}>© Sam Meurice 2023</p>
      </div>
    </div>
  );
}

export default HomePage;
