import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1 className={styles.name}>my sous app</h1>
        <h2 className={styles.subName}>
          your decision-making kitchen assistant
        </h2>
      </div>
      <div className={styles.homeBody}></div>
    </main>
  );
}
