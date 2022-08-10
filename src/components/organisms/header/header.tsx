import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header__root}>
      <a href="#">jDev</a>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
