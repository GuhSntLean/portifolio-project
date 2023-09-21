import Footer from "./component/footer/footer";
import NavBar from "./component/navbar/navbar";
import Contact from "./page/contact/contact";

export default function Home() {
  return (
    <>
      <div className="container">
        <NavBar />
        <div className="content">
          <Contact/>
        </div>
        <Footer />
      </div>
    </>
  );
}
