import { Actions } from "./types";

export interface Todo {
  id: number;
  description: string;
  done: boolean;
}

type State = Todo[];

type Action = 
    | { type: Actions.AddTodo, payload: Pick<Todo, 'description'> }
    | { type: Actions.DeleteTodo, payload: Pick<Todo, 'id'>}
    | { type: Actions.ToggleTodo, payload: Pick<Todo, 'id'> }

export const todoReducer = (state: State, action: Action) => {
  
  switch(action.type) {
    
    case Actions.AddTodo: 
      return [
        ...state,
        {
          id: new Date().getTime(),
          description: action.payload.description,
          done: false
        }
      ];

    case Actions.DeleteTodo: 
      return state.filter(todo => todo.id !== action.payload.id);

    case Actions.ToggleTodo:
      return state.map(todo => todo.id !== action.payload.id ? todo : { ...todo, done: !todo.done });

    default:
      return state;
  }
};
