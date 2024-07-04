import { render, screen } from '@testing-library/react';
import { test, expect, describe, vi, beforeEach } from 'vitest';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('<TodoItem/> Test', () => {
  const todo = {
    id: 1,
    description: 'Piedra del Alma',
    done: false,
  };

  const deleteTodoMock = vi.fn();
  const toggleTodoMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Should display the pending todo', () => {
    render(
      <TodoItem
        id={todo.id}
        description={todo.description}
        done={todo.done}
        deleteTodo={deleteTodoMock}
        toggleTodo={toggleTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');
    const spanElement = screen.getByLabelText('span');
    // console.log(liElement.innerHTML);

    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );
    expect(spanElement.className).toBe('align-self-center ');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });
});
