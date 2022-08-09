import styles from "./app.module.css";
import Header from "components/organisms/header";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <h1 className={styles.main}>Hello World</h1>;
    </>
  );
};

export default App;
