import { TodoItem } from './TodoItem';
import { Todo } from './intro-reducer';

interface Props {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const TodoList = ({ todos, toggleTodo, deleteTodo }: Props) => {
  return (
    <div className='col-7'>
      <ul className='list-group'>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            description={todo.description}
            done={todo.done}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};
