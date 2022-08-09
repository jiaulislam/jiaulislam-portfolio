import styles from "./app.module.css";
import Header from "components/organisms/header";
import Footer from "components/organisms/footer";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <h1 className={styles.main}>On my way to build my portfolio</h1>
      <Footer />
    </>
  );
};

export default App;
