import { MoviesGrid } from "./MoviesGrid";
import styles from "./App.module.css"

export function App() {
  return (
    <div className="card">
      <header  className={styles.title}>
        <h1>Series and Movies finder</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}
