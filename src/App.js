import "./App.css";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Stories from "./Pages/Stories";
import Testimonials from "./Pages/Testimonials";
import Footer from "./Pages/Footer";
import Nav from "./Pages/Nav";

function App() {
  return (
    <>
      <div className="main">
        <Nav />
        <Home />
        <Services />
        <Stories />
        <Testimonials />

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
