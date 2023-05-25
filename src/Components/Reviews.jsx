const posts = [
  {
    id: 1,
    title: "Una vivencia inolvidable con servicio excepcional",
    href: "#",
    description:
      "Mi viaje con la página de turismo fue realmente inolvidable. Desde el momento en que contacté con ellos, su equipo de atención al cliente fue extremadamente amable y servicial, respondiendo a todas mis preguntas y preocupaciones.",
    date: "Jul 16, 2023",
    datetime: "2023-07-16",
    category: { title: "Tourism", href: "#" },
    author: {
      name: "Sofia Rodriguez",
      role: "Guest",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Una experiencia de viaje impecable, recomendado",
    href: "#",
    description:
      "Mi viaje con esta página de turismo fue simplemente impecable. Desde la reserva hasta el regreso a casa, todo fue perfectamente organizado y superó mis expectativas. Recomiendo encarecidamente sus servicios para disfrutar de un viaje sin preocupaciones.",
    date: "Mar 16, 2023",
    datetime: "2023-03-16",
    category: { title: "Traveling", href: "#" },
    author: {
      name: "Michael Modric",
      role: "Tourist",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Excelente servicio al cliente y destinos fascinantes",
    href: "#",
    description:
      "Quedé impresionado con el excelente servicio al cliente de esta página de turismo. Su equipo fue amable, atento y respondió rápidamente a todas mis consultas. Además, los destinos que visité fueron fascinantes y llenos de experiencias increíbles. Definitivamente volveré a viajar con ellos.",
    date: "Ago 2, 2023",
    datetime: "2020-08-2",
    category: { title: "Experience", href: "#" },
    author: {
      name: "Liam Thompson",
      role: "Tourist",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export default function Reviews() {
  return (
    <div className="bg-white py-24 sm:py-32" id="reviews">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-Raleway text-center">
            Las voces de nuestros viajeros
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 font-Nunito text-center">
          Aquí, damos voz a nuestros viajeros, aquellos que han confiado en nosotros para hacer realidad sus sueños.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold font-Nunito leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 font-Nunito">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
