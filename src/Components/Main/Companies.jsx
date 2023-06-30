export default function Companies() {
    return (
      <div className="bg-white sm:pt-8 sm:pb-28 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Patrocinado por las companias mas relevantes del sector
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <a href="https://www.airbnb.com.ar/" target="_blank"> 
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="../src/Logo/airbnb.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
            </a>
            <a href="https://www.booking.com/index.es.html?aid=304142&label=gen173nr-1BCAEoggI46AdIM1gEaAyIAQGYAQq4ARfIAQzYAQHoAQGIAgGoAgO4AozozaMGwAIB0gIkZjI5YjhlZTEtNzA5Zi00NzNlLTljNGEtZGNkZGY3MjRhNGE22AIF4AIB&sid=b22ec3ff3e8e8af49a13606855e6afd6&" target="_blank">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="../src/Logo/bookingcom.svg"
                alt="Reform"
                width={158}
                height={48}
              />
            </a>
            <a href="https://www.expedia.com/es/" target="_blank">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="../src/Logo/expedia.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
            </a>
            <a href="https://www.tripadvisor.com/" target="_blank">                
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="../src/Logo/tripadvisor-3.svg"
                alt="SavvyCal"
                width={158}
                height={48}
                />
            </a>
            <a href="https://www.kayak.com.ar/" target="_blank">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="../src/Logo/kayak-logo-1.svg"
                alt="Kayak"
                width={158}
                height={48}
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
  