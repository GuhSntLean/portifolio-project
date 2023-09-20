import Footer from "./component/footer/footer";
import NavBar from "./component/navbar/navbar";

export default function Home() {
  return (
    <>
      <div className="container">
        <NavBar />
        <div className="content">
        </div>
        <Footer />
      </div>
    </>
  );
}
