const products = [
  {
    id: 1,
    name: 'Ponta Delgada, Portugal',
    href: '#',
    imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Quintay CasaBlanca, Chile',
    href: '#',
    imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-29459696/original/d13b86bf-4f1c-43f0-a44e-8a9edfda26f1.jpeg?im_w=720',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Santa Catarina, Brasil',
    href: '#',
    imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-550819947830490518/original/bea19682-87b2-472f-98a2-6eb4624d22a0.jpeg?im_w=720',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Oia, Grecia',
    href: '#',
    imageSrc: 'https://a0.muscache.com/im/pictures/51f4d564-3273-4f25-843d-54e17f6a8783.jpg?im_w=720',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Adamantas, Grecia',
    href: '#',
    imageSrc: 'https://a0.muscache.com/im/pictures/4595e1b4-1f7a-4cf5-9f3d-c84075a00beb.jpg?im_w=720',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 6,
    name: 'Grundarfjorour, Islandia',
    href: '#',
    imageSrc: 'https://a0.muscache.com/im/pictures/2cc58022-2004-4034-a281-22fb622e7461.jpg?im_w=720',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 7,
    name: 'Paris, Francia',
    href: '#',
    imageSrc: 'https://a0.muscache.com/im/pictures/12015095/160e3020_original.jpg?im_w=720',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 8,
    name: 'Te Anau, Nueva Zelanda',
    href: '#',
    imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-52614454/original/18a29ea2-3bf9-4b93-9cdc-e44fcdd7405b.jpeg?im_w=720',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 9,
    name: 'Laguna Piuray, Perú',
    href: '#',
    imageSrc: 'https://a0.muscache.com/im/pictures/694b4768-c60b-4fdf-9633-b44c234aabb8.jpg?im_w=720',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 10,
    name: 'FairPlay, Estados Unidos',
    href: '#',
    imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-749996089802009824/original/8fefceb0-da83-461c-9441-1dc5ce1c0174.jpeg?im_w=720',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 11,
    name: 'Sacred Valley, Perú',
    href: '#',
    imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-3298227/original/db91b151-be3e-4a4c-8790-ed64c0ac7698.jpeg?im_w=720',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 12,
    name: 'Breckenridge, Colorado',
    href: '#',
    imageSrc: 'https://a0.muscache.com/im/pictures/4ac06cba-7b1d-4d8c-b124-1d956726c797.jpg?im_w=720',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },{
    id: 13,
    name: 'Dillon, Estados Unidos',
    href: '#',
    imageSrc: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-679548961635495824/original/38c34125-85a8-4618-ac56-a922b44904c0.jpeg?im_w=720',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 14,
    name: 'Fairplay, Colorado',
    href: '#',
    imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-52902048/original/5c6ae46f-5ede-46e4-97d3-f8fd4a01e984.jpeg?im_w=720',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 15,
    name: 'Mejia, Ecuador',
    href: '#',
    imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-663681975646825305/original/5348f8db-e351-4869-a651-4339d5b85a46.jpeg?im_w=720',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 16,
    name: 'Quito, Ecuador',
    href: '#',
    imageSrc: 'https://a0.muscache.com/im/pictures/f489cebe-3ae6-41bd-a283-809bf363d63b.jpg?im_w=720',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

export default function PhotosGalery() {
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
                  className="h-full w-full object-cover object-center group-hover:opacity-80"
                />
              </div>
              <h3 className="font-Nunito font-bold text-center mt-4 text-sm text-gray-700">{product.name}</h3>
             
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

  