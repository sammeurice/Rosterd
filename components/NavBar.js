import styles from "./componentStyles.module.css";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <a
        className={styles.navLinkWrapper}
        href="https://sammeurice.ca"
        target="_blank"
        rel="noreferrer"
      >
        <Image src="/samMLogoWhite.png" alt="My Logo" width={60} height={60} />
      </a>
      <Link href="/">
        <p className={styles.titleText}>Rosterd</p>
      </Link>
      <a
        className={styles.navLinkWrapper}
        href="https://github.com/sammeurice"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={60} />
      </a>
    </div>
  );
};
