import { useState, ChangeEvent, useEffect } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'fran',
    email: 'fran@gmail.com',
  });

  const { username, email } = formState;

  const onChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('Called');
  }, []);

  useEffect(() => {
    // console.log('FormState changed');
  }, [formState]);

  useEffect(() => {
    // console.log('Email changed');
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
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

      {username === 'franj' && <Message />}
    </>
  );
};
