import "./style.css";
import Arrow from "./expand-arrow.svg"

function HomePage() {
  return (
    <>
      <div className="banner">
        <div className="image">
          <img className="photo" src="" alt="Foto Gustavo" />
        </div>
        <div className="name-container">
          <p className="name-autor">Gustavo S. Leandro</p>
        </div>
        <div className="next-item">
          {/* <img className="arrow-down" src="/icon/expand-arrow.svg"/> */}
          <Arrow className="arrow-down"/>
          {/* <img className="arrow-down" src={Arrow} alt="arrow" /> */}
        </div>
      </div>
    </>
  );
}

export default HomePage;
