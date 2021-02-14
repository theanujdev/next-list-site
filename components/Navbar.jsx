import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.link}>Home</a>
      </Link>
      <Link href="/users/">
        <a className={styles.link}>Users</a>
      </Link>
      <Link href="/about">
        <a className={styles.link}>About</a>
      </Link>
    </nav>
  );
};

export default Navbar;
