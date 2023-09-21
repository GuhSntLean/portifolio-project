import "./contact.css";

function Contact() {
  return (
    <>
      <div className="contact">
        <h2>Contato</h2>
        <h3>
          Olá, caso queira entrar em contato comigo, pode fazer isso através das
          minhas redes sociais ou por e-mail.
        </h3>
        <div>
          <a href="#">Linkedin</a>
          <a href="#">Instagram</a>
        </div>
      </div>
      <div className="social-contact">
        <h2>Me mande um email</h2>
        <form>
          <input className="input-name" type="text" name="name" />
          <input className="input-email" type="email" name="email" />
          <textarea className="text-area" name="textAbout" />
          <button type="submit" className="send-mail" >Enviar</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
