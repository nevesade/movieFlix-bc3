import ButtonIcon from 'components/ButtonIcon';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'utils/requests';

import './styles.css';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
    .then((response) => {
      console.log('Sucesso', response);
    })
    .catch(error => {
      console.log('ERRO', error);
    })
      
    console.log(formData);
  };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register('username')}
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div className="mb-2">
          <input
            {...register('password')}
            type="password"
            className="form-control base-input "
            placeholder="Password"
            name="password"
          />
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
