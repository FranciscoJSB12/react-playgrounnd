import { beforeEach, describe, expect, test, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/hooks';

vi.mock('../../src/hooks/useTodo.ts');

describe('<TodoApp/> Test', () => {
  beforeEach(cleanup);

  vi.mocked(useTodo).mockReturnValue({
    todos: [
      { id: 1, description: 'Hola', done: false },
      { id: 2, description: 'Hello', done: true },
    ],
    total: 2,
    completed: 1,
    addNewTodo: vi.fn(),
    deleteTodo: vi.fn(),
    toggleTodo: vi.fn(),
  });

  test('Should render the component properly', () => {
    render(<TodoApp />);

    expect(screen.getByText('Hola')).toBeTruthy();
    expect(screen.getByText('Hello')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});
