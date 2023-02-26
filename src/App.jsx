
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetails }  from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";


export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
        <h1 className={styles.title}>Series and Movies finder</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route exact path="/movies/:movieId">
            <MovieDetails/>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Routes>
       
      </main>
    </Router>
  );
}
