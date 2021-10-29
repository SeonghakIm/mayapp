import { HashRouter as Router, Link } from "react-router-dom";
import "./Header.css";
export default () => (
  <header className="nav">
    <ul>
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
