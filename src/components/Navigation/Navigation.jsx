import { Link, Nav, Header } from "./Navigation.styled";

const Navigation = () => {
  return (
    <Header>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
    </Header>
  );
};

export default Navigation;
