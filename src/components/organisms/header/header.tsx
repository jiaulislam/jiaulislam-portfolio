import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header__root}>
      <a href="#">jDev</a>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
