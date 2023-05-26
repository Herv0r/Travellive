import "./App.css";
import Header from "./Components/Header";
import Offers from "./Components/Offers";
import Main from "./Components/Main";
import Habitaciones from "./Components/Rooms";
import Companies from "./Components/Companies";
import Galeria from "./Components/Galery";
import FotosGaleria from "./Components/Photos-Galery";
import Collection from "./Components/Collections-Galery";
import SimpleFooter from "./Components/Footer";
import Reviews from "./Components/Reviews";
import Calendar from "./Components/Calendar";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Offers />
                <Main />
                <Companies />
                <Galeria />
                <Reviews />
                <Calendar />
                <SimpleFooter />
              </>
            }
          />

          <Route
            path="/inicio"
            element={
              <>
                <NavBar />
                <h1 className="text-2xl text-center font-Raleway text-primary1 mt-16">Encuentra el refugio perfecto en nuestras variadas opciones de habitaciones</h1>
                <Habitaciones />
                <Companies />
                <Reviews />
                <SimpleFooter />
              </>
            }
          />

          <Route
            path="/galeria"
            element={
              <>
                <NavBar />
                <FotosGaleria />
                <Collection />
                <SimpleFooter />
              </>
            }
          />


        </Routes>
      </Router>
    </>
  );
}

export default App;
