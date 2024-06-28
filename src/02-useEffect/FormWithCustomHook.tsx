import { useForm } from '../hooks';

export const FormWithCustomHook = () => {
  const { formState, onChangeInput, onResetForm } = useForm({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario con custom hook</h1>
      <hr />
      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onChangeInput}
      />
      <input
        type='email'
        className='form-control mt-2'
        placeholder='fran@google.com'
        name='email'
        value={email}
        onChange={onChangeInput}
      />
      <input
        type='password'
        className='form-control mt-2'
        placeholder='Password'
        name='password'
        value={password}
        onChange={onChangeInput}
      />

      <button
        className='btn btn-primary mt-2'
        onClick={onResetForm}
      >
        Borrar
      </button>
    </>
  );
};
