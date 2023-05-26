import "./App.css";
import Header from "./Components/Header";
import Offers from "./Components/Offers";
import Main from "./Components/Main";
import Habitaciones from "./Components/Rooms";
import Companies from "./Components/Companies";
import Carrusel from "./Components/Carrusel";
import Galeria from "./Components/Galery";
import FotosGaleria from "./Components/PhotosGalery";
import Collection from "./Components/ColectionsGalery";
import SimpleFooter from "./Components/Footer";
import Reviews from "./Components/Reviews";
import Calendar from "./Components/Calendar";
import NavBar from "./Components/NavBar";
import Profile from "./Components/ProfileConfig";
import NotFound from "./Components/404Notfound";
import TeamSection from "./Components/TeamSection";
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
                <h1 className="text-2xl text-center font-Raleway text-primary1 mt-16">
                  Encuentra el refugio perfecto en nuestras variadas opciones de
                  habitaciones
                </h1>
                <Habitaciones />
                <Companies />
                <Reviews />
                <SimpleFooter />
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                <NavBar />
                <Profile />
                <SimpleFooter />
              </>
            }
          />

          <Route
            path="/galeria"
            element={
              <>
                <NavBar />
                <h1 className="text-2xl text-center font-Raleway text-primary1 mt-16">
                  Viaja a través de nuestras imágenes: Inspiración para tus
                  próximas vacaciones
                </h1>
                <Carrusel />
                <h1 className="text-2xl text-center font-Raleway text-primary1 mt-16">
                  Descubre los destinos más impresionantes del mundo
                </h1>
                <FotosGaleria />
                <Collection />
                <SimpleFooter />
              </>
            }
          />

          <Route 
          path="/team-section" 
          element={
            <>
              <NavBar />
              <TeamSection />
              <SimpleFooter />
            </>
          } />

          <Route path="/404" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
