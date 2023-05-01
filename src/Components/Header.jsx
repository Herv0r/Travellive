const Header = () => {

  const navigation = [
    { name: 'Inicio', href: '#' },
    { name: 'Destinos', href: '#' },
    { name: 'Galeria', href: '#' },
    { name: 'Reviews', href: '#' },
  ]

  return (
    <div className="bg-white bg-img-bg5 bg-fixed bg-cover bg-bottom">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-5   w-auto"
                src="./src/Logo/Logo2.svg"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>


      <div className="relative isolate px-6 pt-0 lg:px-8"> 
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"> {/* */} 
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-Raleway tracking-tight text-black sm:text-6xl">
            Vive la experiencia de tu vida
            </h1>
            <p className="font-Nunito mt-6 pt-4 text-lg leading-8 text-primary3">
            Elige tu destino, nosotros nos encargamos del resto
            </p>
            <div className="mt-5 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-secondary3 px-3.5 py-2.5 text-sm font-semibold text-primary3 shadow-sm hover:bg-secondary2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary1"
              >
                Comenzar Aventura 
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-primary3">
                Quienes somos <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header