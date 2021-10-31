import { HashRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;

const Item = styled.li``;

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

const SLink = styled(Link)``;

export default () => (
  <Header>
    <List>
      <Router>
        <Item>
          <SLink to="/">Home</SLink>
        </Item>
        <Item>
          <SLink to="/tv">Tv</SLink>
        </Item>
        <Item>
          <SLink to="/search">Search</SLink>
        </Item>
      </Router>
    </List>
  </Header>
);
