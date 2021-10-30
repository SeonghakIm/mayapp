import { HashRouter as Router, Link } from "react-router-dom";
import styles from "./Header.module.css";
export default () => (
  <header>
    <ul className={styles.navList}>
      <Router>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tv">Tv</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </Router>
    </ul>
  </header>
);
