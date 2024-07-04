import { FormEvent } from 'react';
import { useForm } from '../hooks';

interface Props {
  addNewTodo: (description: string) => void;
}

export const TodoForm = ({ addNewTodo }: Props) => {
  const { formState, onChangeInput, onResetForm } = useForm({
    description: '',
  });

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { description } = formState;

    if (description.length < 1) return;

    addNewTodo(description);

    onResetForm();
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type='text'
        placeholder='Agregar tarea'
        className='form-control'
        onChange={onChangeInput}
        value={formState.description}
        name='description'
      />
      <button
        type='submit'
        className='btn btn-outline-primary mt-1'
      >
        Agregar
      </button>
    </form>
  );
};
