import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="options-footer">
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
      <div className="information-licence">
        <p> © Gustavo S. Leandro </p>
      </div>
    </footer>
  );
}

export default Footer;
