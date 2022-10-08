import ButtonIcon from 'components/ButtonIcon';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useHistory } from 'react-router-dom';
import { requestBackendLogin } from 'utils/requests';
import { getAuthData, saveAuthData } from 'utils/storage';

import './styles.css';

type FormData = {
  username: string;
  password: string;
};

type LocationState = {
  from: string;
}

const Login = () => {

  const [hasError, setHasError] = useState(false);

  const location = useLocation<LocationState>();

  const { from } = location.state  || { from: { pathname: '/movies' } };

  const history = useHistory();

  const { register, handleSubmit, formState: {errors} } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {

    requestBackendLogin(formData)
    .then((response) => {
      // console.log('Sucesso', response);
      saveAuthData(response.data);
      const token = getAuthData().access_token;
      console.log('TOKEN GERADO:',
      token);
      setHasError(false);
      history.replace(from)
    })
    .catch(error => {
      setHasError(true);
      // console.log('ERRO', error);
    })
      
    console.log(formData);
  };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      {hasError && (
        <div className="alert alert-danger">
          Erro ao tentar efectuar login!
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register('username', {
              required: 'Campo obrigátorio',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido'
              }
            })}
            type="text"
            className={`form-control base-input ${errors.username ? 'is-invalid'  : ''}`}
            placeholder="Email"
            name="username"
          />
            <div className="invalid-feedback d-block">
            {errors.username?.message}
          </div>
        </div>
        <div className="mb-2">
          <input
            {...register('password',  {
              required: 'Campo obrigátorio'
            })}
            type="password"
            className={`form-control base-input ${errors.password ? 'is-invalid'  : ''}`}
            placeholder="Password"
            name="password"
          />
           <div  className="invalid-feedback d-block">
            {errors.password?.message}
          </div>
        </div>

        <div className="login-submit">
          <ButtonIcon text="Fazer Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;

function register(
  arg0: string
): JSX.IntrinsicAttributes &
  import('react').ClassAttributes<HTMLInputElement> &
  import('react').InputHTMLAttributes<HTMLInputElement> {
  throw new Error('Function not implemented.');
}
