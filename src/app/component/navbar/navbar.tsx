import './navbar.css';


function NavBar() {
  return (
    <nav className="navbar">
      <div className="personal-information">
        <img src="/image/personalphoto.jpg" className='person-photo' alt='my-personal-photo' />
        <p className="name">Gustavo S. Leandro</p>
      </div>
    </nav>
  );
}

export default NavBar;
