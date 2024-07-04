import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/intro-reducer";
import { Actions } from "../08-useReducer/types";

const initializeState = () => JSON.parse(localStorage.getItem('todos') || '[]');

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], initializeState);

  const addNewTodo = (description: string ) => {
    dispatch({
      type: Actions.AddTodo,
      payload: { description },
    });
  };

  const toggleTodo = (id: number) => {
    dispatch({
      type: Actions.ToggleTodo,
      payload: { id }
    })
  }

  const deleteTodo = (id: number) => {
    dispatch({
      type: Actions.DeleteTodo,
      payload: { id },
    });
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    total: todos.length,
    completed: todos.filter(todo => !todo.done).length,
    addNewTodo,
    toggleTodo,
    deleteTodo
  }
}
