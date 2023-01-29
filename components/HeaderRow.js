import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./componentStyles.module.css";

export const HeaderRow = ({ title }) => {
  return (
    <div className={styles.headerContainer}>
      <Link href="/" className={styles.backButton}>
        <FaArrowLeft size={40} />
      </Link>

      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};
