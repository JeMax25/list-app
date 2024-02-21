import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from "react-redux"
import { checkingCredentials, login, logout, validationErrors } from '../../store/slices/auth-form/authSlice';
import { useEffect, useState } from 'react';


export const LoginPage = () => {

  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({})

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {

    if (JSON.parse(localStorage.getItem('auth')) === null) return;

    const credentials = JSON.parse(localStorage.getItem('auth'));
    setErrors(JSON.parse(localStorage.getItem('errorsdanger')))

    onInputChange({
      target: {
        name: 'email',
        value: credentials
      }
    })

  }, [])

  const onSubmitForm = (event) => {
    event.preventDefault();
    localStorage.setItem('auth', JSON.stringify(email));

    const newErrors = {}

    if (email !== auth.email) {
      
      newErrors.email = 'Correo No registrado'
    }

    if (password !== auth.password) {
      newErrors.password = 'Contraseña invalida'
    }

    localStorage.setItem('errorsdanger', JSON.stringify(newErrors));

    dispatch(checkingCredentials());

    setTimeout(() => {

      if (email === auth.email && password === auth.password) {

        dispatch(login({ email }));

        localStorage.removeItem('errorsdanger');

      } else {

        dispatch(logout());

      }
    }, 1000);

  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Iniciar sesión</h2>
        </div>
        <form onSubmit={onSubmitForm} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Correo electrónico
              </label>
              {
                (errors?.email) ? <span className='text-sm text-red-500'>{errors?.email}</span> : ''
              }
              <input
                id="email-address"
                name="email"
                type="email"
                value={email}
                onChange={onInputChange}
                autoComplete="email"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${errors?.email ? 'border-red-500' : ''}`}
                placeholder="Correo electrónico"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              {
                (errors?.password) ? <span className='text-sm text-red-500'>{errors?.password}</span> : ''
              }
              <input
                id="password"
                name="password"
                value={password}
                onChange={onInputChange}
                type="password"
                autoComplete="current-password"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${errors?.password ? 'border-red-500' : ''}`}
                placeholder="Contraseña"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>

  );

}
