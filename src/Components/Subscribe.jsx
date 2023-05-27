
import { CalendarIcon, HandIcon } from '@heroicons/react/outline'

export default function Subscribe() {
  return (
    <div className="relative isolate overflow-hidden bg-img-bg2 bg-fixed bg-cover bg-bottom py-16 sm:py-24 lg:py-32 my-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="font-Raleway text-3xl font-bold tracking-tight text-white sm:text-4xl">Suscribete a las novedades</h2>
            <p className="font-Nunito mt-4 text-lg leading-8 text-gray-300">
              Grandes ofertas, nuevos destinos, vuelos economicos.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Dirección Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-secondary2 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary6"
              >
                Suscribirse
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="font-Raleway mt-4 text-white">Articulos Semanales</dt>
              <dd className="mt-2 leading-7 text-white font-Nunito">
                Todas las semanas enviamos las nuevas tendencias a los usuarios suscriptos.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4  font-Raleway text-white">Sin Spam</dt>
              <dd className="mt-2 leading-7 font-Nunito text-white">
                No saturaremos tu email con nuestros articulos, puedes quedarte tranquilo.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
      </div>
    </div>
  )
}
