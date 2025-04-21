import Nav from "./Nav";

function Header() {
  return (
    <header>
      <img className="logo" src="/img/logo.jpg" alt="logo"></img>
      <Nav></Nav>
    </header>
  );
}

export default Header;
