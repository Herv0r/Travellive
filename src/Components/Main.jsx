
const products = [
  {
    id: 1,
    name: "Cotia, Brasil",
    description: "Quedate en el alojamiento de Roberta",
    fecha: "29 de may. al 3 de jun.",
    href: "#",
    price: "$12.650 ARS noche",
    imageSrc: "../src/Images/Oferta1.webp",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Otawwa, Canada",
    description: "Quedate en el alojamiento de Ana",
    fecha: "20 al 27 de jul.",
    href: "#",
    price: "$10.287 ARS noche",
    imageSrc: "../src/Images/Oferta2.webp",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Lyon, Francia",
    description: "Quedate en el alojamiento de Eduoard",
    fecha: "31 de jul. al 5 de ago.",
    href: "#",
    price: "$18.982 ARS noche",
    imageSrc: "../src/Images/Oferta3.webp",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Los Angeles, California",
    description: "Quedate en el alojamiento de Rebecca",
    fecha: "23 al 28 de jul.",
    href: "#",
    price: "$22.904 ARS noche",
    imageSrc: "../src/Images/Oferta4.webp",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Lisbon, Portugal",
    description: "Quedate en el alojamiento de Diogo",
    fecha: "31 de jul. al 5 de ago.",
    href: "#",
    price: "$34.147 ARS noche",
    imageSrc: "../src/Images/Oferta5.webp",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 6,
    name: "Bearsden, Reino Unido",
    description: "Quedate en el alojamiento de Rhona",
    fecha: "23 al 28 de jul.",
    href: "#",
    price: "$18.667 ARS noche",
    imageSrc: "../src/Images/Oferta6.webp",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 7,
    name: "Valencia, España",
    description: "Quedate en el alojamiento de Sagrario",
    fecha: "20 al 27 de sep.",
    href: "#",
    price: "$8.537 ARS noche",
    imageSrc: "../src/Images/Oferta7.webp",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 8,
    name: "Malakoff, Francia",
    description: "Quedate en el alojamiento de Jacques",
    fecha: "2 al 7 de jul.",
    href: "#",
    price: "$15.065 ARS noche",
    imageSrc: "../src/Images/Oferta8.webp",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 9,
    name: "Paris, Francia",
    description: "Quedate en el alojamiento de Romain",
    fecha: "1 al 6 nov.",
    href: "#",
    price: "$32.165 ARS noche",
    imageSrc: "../src/Images/Oferta8.webp",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 10,
    name: "Sao Paolo, Brasil",
    description: "Quedate en el alojamiento de Daniele",
    fecha: "16 al 11 de jul.",
    href: "#",
    price: "$5.120 ARS noche",
    imageSrc: "../src/Images/Oferta10.webp",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 11,
    name: "Copacabana, Brasil",
    description: "Quedate en el alojamiento de Claudia",
    fecha: "28 de jul. al 3 de ago.",
    href: "#",
    price: "$4864 ARS noche",
    imageSrc: "../src/Images/Oferta11.webp",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 12,
    name: "Perledio, Italia",
    description: "Quedate en el alojamiento de Silvana",
    fecha: "31 de oct. al 5 de nov.",
    href: "#",
    price: "$63.255 ARS noche",
    imageSrc: "../src/Images/Oferta12.webp",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Main() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-md font-medium text-gray-900">
                {product.name}
              </h3>
              <p className="text-md font-nunito text-gray-500">
                {product.description}
              </p>
              <p className="text-md font-nunito text-gray-500">
                {product.fecha}
              </p>
              <p className="text-md font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
