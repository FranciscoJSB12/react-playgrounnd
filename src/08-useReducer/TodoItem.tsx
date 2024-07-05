interface Props {
  id: number;
  description: string;
  done: boolean;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const TodoItem = ({
  id,
  description,
  done,
  deleteTodo,
  toggleTodo,
}: Props) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span
        role='button'
        aria-label='span'
        className={`align-self-center ${
          done ? 'text-decoration-line-through' : ''
        }`}
        onClick={() => toggleTodo(id)}
      >
        {description}
      </span>
      <button
        aria-label='btn'
        className='btn btn-danger'
        onClick={() => deleteTodo(id)}
      >
        Borrar
      </button>
    </li>
  );
};
