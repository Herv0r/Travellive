import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


export default function Modal(props) {
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  const handleClose = () => {
    props.onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&rarr;</span>
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                          className="mx-auto h-5 w-auto"
                          src="./src/Logo/Logo2.svg"
                          alt="Travellive"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                          Sign in to your account
                        </h2>
                      </div>

                      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                              Email address
                            </label>
                            <div className="mt-2">
                              <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="pl-2.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary3 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center justify-between">
                              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                              </label>
                              <div className="text-sm">
                                <a href="#" className="font-semibold text-secondary3 hover:text-secondary2">
                                  Forgot password?
                                </a>
                              </div>
                            </div>
                            <div className="mt-2">
                              <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="pl-2.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary3 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div>
                            <button
                              type="submit"
                              className="flex w-full justify-center rounded-md bg-secondary3 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary3"
                            >
                              Sign in
                            </button>
                          </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                          Not a member?{' '}
                          <a href="#" className="font-semibold leading-6 text-secondary3 hover:text-primary1">
                            Create an account
                          </a>
                        </p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>

  )
}
