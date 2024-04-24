import Add from "./components/Add/Add";
import Header from "./components/Header/Header";
import styles from "./index.module.scss"

export default function App() {
  return (
    <div className="App">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Header />
          <main>
            <Add />
          </main>
        </div>
      </div>
    </div>
  );
}