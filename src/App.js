// import "./App.css";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Stories from "./Pages/Stories";
import Testimonials from "./Pages/Testimonials";
import Footer from "./Pages/Footer";
import FAQs from "./Pages/FAQs";

function App() {
  return (
    <>
      <div className="main">
        <Nav />
        <Home />
        <Services />
        <Stories />
        <Testimonials />
        <FAQs />

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
