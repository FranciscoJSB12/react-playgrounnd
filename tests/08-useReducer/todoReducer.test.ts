import { test, expect, describe } from 'vitest';
import { Action, Todo, todoReducer } from '../../src/08-useReducer/intro-reducer';
import { Actions } from '../../src/08-useReducer/types';

describe('todoReducer Test', () => {
    const initialState: Array<Todo> = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]
    
    test('Should return the initial state', () => {
        const newState = todoReducer(initialState, {} as Action);
        
        expect(newState).toBe(initialState);
    });

    test('Should add a todo', () => {
        const description = 'Comer';

        const action: Action = {
            type: Actions.AddTodo,
            payload: { description }
        };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState[1].id).toStrictEqual(expect.any(Number));
        expect(newState[1].description).toBe(description);
        expect(newState[1].done).toBe(false);
    });

    test('Should remove a todo', () => {
        const action: Action = {
            type: Actions.DeleteTodo,
            payload: { id: initialState[0].id }
        };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);
    });

    test('Should toggle a todo', () => {
        const action: Action = {
            type: Actions.ToggleTodo,
            payload: { id: initialState[0].id }
        };

        const newState = todoReducer(initialState, action);

        expect(newState[0].done).toBe(true);
    });
});