const callouts = [
  {
    name: ' Cabalgata por las montañas ',
    description: 'Paseo a caballo, podras apreciar los ríos, montañas y bosques que nos rodean.',
    imageSrc: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-3701766-media_library/original/47023118-b261-4c7a-a191-48dc4bca763f.jpeg?im_w=320',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: ' Paseos por piletones de sal',
    description: ' Salinas Grandes, donde caminaran por los bordes de los Piletones de Sal. Allí podrá optar por realizar un paseo por los "Ojitos de Agua"',
    imageSrc: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-4867892-media_library/original/e34671bf-908d-4968-b489-4280d8d26c04.jpeg?im_w=320',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Cultiva la tierra con Agrofores',
    description: 'El contacto con la tierra trae una profunda experiencia de conexión con nuestra ascendencia',
    imageSrc: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1519334-media_library/original/e42c46e7-4c43-47de-a8a6-0fe2b63078f1.jpeg?im_w=320',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export default function CollectionGalery() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Actividades</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
