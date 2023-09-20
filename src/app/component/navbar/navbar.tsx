import "./navbar.css";

function NavBar() {
  return (
    <nav className="header">
      <div className="personal-information">
        <a href="#" className="person-photo"></a>
        <p className="name">Gustavo S. Leandro</p>
      </div>
      <div className="options">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Formação</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
