import { LockClosedIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';
// import { useAuth } from '@hooks/useAuth';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Alert from '@/components/alert';
import useAlert from '@/hooks/useAlert';

export default function LoginPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const {alert, setAlert, toggleAlert} = useAlert();
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // auth.signIn(email, password).then(() => {
    //   router.push('/dashboard');
    // }).catch(err => {
    //   setModal(true);
    // })
    if(email==="admin@mail.com" && password==="123"){
      router.push('/dashboard/menu')
    }else{
      setAlert({
        active: true,
        message: "Usuario o contraseña invalido",
        type: 'error',
        autoClose: false,
      });
    }
  };

  return (
    <>
    <div className="relative h-screen w-screen bg-[url('/images/isa.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-50">
        <div className="max-w-md w-full space-y-8">
          <div>
          <div className="flex items-center justify-center">
          <Image
            src="/images/logorustika.png"
            width={200}
            height={200}
            alt="Logo"
          />
        </div>
            <h2 className="text-4xl text-amber-600 font-bold text-center">Ingresa al dashboard</h2>
          </div>
          <Alert alert={alert} handleClose={toggleAlert} />
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Correo electrónico o usuario
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border bg-gray-100 border-gray-300 placeholder-gray-600 text-gray-900 rounded-t-md focus:outline-none focus:ring-amber-600 focus:border-amber-600 focus:z-10 sm:text-sm"
                    placeholder="Correo electrónico o usuario"
                    ref={emailRef}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Contraseña
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border bg-gray-100 border-gray-300 placeholder-gray-600 text-gray-900 rounded-b-md focus:outline-none focus:ring-amber-600 focus:border-amber-600 focus:z-10 sm:text-sm"
                    placeholder="Contraseña"
                    ref={passwordRef}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-amber-600 focus:ring-amber-600 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-amber-600">
                    Mantener sesión
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-amber-600 hover:text-amber-500">
                    ¿Olvidaste tú contraseña?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-olive hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-amber-500 group-hover:text-amber-600" aria-hidden="true" />
                  </span>
                  Ingresar
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
      
    </>
  );
}
