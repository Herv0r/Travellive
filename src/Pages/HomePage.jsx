import NavBar from "../Components/Nav/NavBar";
import Habitaciones from "../Components/Main/Rooms";
import Pagination from "../Components/Main/Pagination";
import Companies from "../Components/Main/Companies";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <h1 className="text-2xl text-center font-Raleway text-primary1 mt-16">
        Encuentra el refugio perfecto en nuestras variadas opciones de
        habitaciones
      </h1>
      <Habitaciones />
      <Pagination />
      <Companies />
    </>
  );
};

export default HomePage;
