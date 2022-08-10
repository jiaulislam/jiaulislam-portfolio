import styles from "./footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear().toString();
  return (
    <footer>
      <p className={styles.footer}>Copyright by jDev @ {currentYear}</p>
    </footer>
  );
};

export default Footer;
