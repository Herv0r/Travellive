import NavBar from "../Components/Nav/NavBar";
import Carrusel from "../Components/Main/Carrusel";
import PhotosGalery from "../Components/Main/PhotosGalery";
import Pagination from "../Components/Main/Pagination";
import CollectionGalery from "../Components/Main/ColectionsGalery";

const Galery = () => {
  return (
    <>
      <NavBar />
      <h1 className="text-2xl text-center font-Raleway text-primary1 mt-16">
        Viaja a través de nuestras imágenes: Inspiración para tus próximas
        vacaciones
      </h1>
      <Carrusel />
      <h1 className="text-2xl text-center font-Raleway text-primary1 mt-16">
        Descubre los destinos más impresionantes del mundo
      </h1>
      <PhotosGalery />
      <Pagination />
      <CollectionGalery />
    </>
  );
};

export default Galery;
