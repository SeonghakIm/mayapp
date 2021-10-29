import { HashRouter as Router, Link } from "react-router-dom";
export default () => (
  <header>
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
