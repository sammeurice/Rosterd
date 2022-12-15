// our-domain.com
import { Fragment } from "react";
import Link from "next/link";
import styles from "./homePageStyles.module.css";
import { FaFootballBall, FaBasketballBall, FaHockeyPuck } from "react-icons/fa";

function HomePage() {
  return (
    <Fragment className={styles.mainContainer}>
      <h1 className={styles.title}>Select a league</h1>
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
    </Fragment>
  );
}

export default HomePage;
