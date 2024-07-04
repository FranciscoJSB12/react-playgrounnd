import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';
import { useTodo } from '../hooks';

export const TodoApp = () => {
  const { todos, total, completed, addNewTodo, toggleTodo, deleteTodo } =
    useTodo();

  return (
    <>
      <h1>
        Tareas: {total}&nbsp;&nbsp;&nbsp;
        <small>Pendiente: {completed}</small>
      </h1>
      <hr />
      <div className='row'>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <div className='col-5'>
          <h4>Agregar tarea</h4>
          <hr />
          <TodoForm addNewTodo={addNewTodo} />
        </div>
      </div>
    </>
  );
};
