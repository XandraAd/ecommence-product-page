import "bootstrap/dist/css/bootstrap.min.css";
import NavBars from "./components/NavBars";
import Routing from "./components/Routing";
import Footer from "./components/Footer";
import "./App.css";
//import HeroComponent from "./components/HeroComponent";

function App() {
  return (
    <>
      <NavBars />
      <div className=" mt-5 pt-3">
        <Routing />
      </div>

      <Footer />
    </>
  );
}

export default App;
