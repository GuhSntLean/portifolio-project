import Footer from "./component/footer/footer";
import NavBar from "./component/navbar/navbar";
import Contact from "./page/contact/contact";
import HomePage from "./page/home/home";

export default function Home() {
  return (
    <>
      <div className="container">
        <NavBar />
        <div className="content">
          <HomePage/>
        </div>
        <Footer />
      </div>
    </>
  );
}
