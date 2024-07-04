import { test, expect, describe } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../src/hooks';

describe('useCounter Test', () => {
    test('Should return default values', () => {
        const { result } = renderHook(() => useCounter());        
        const { counter, decrementCounter, incrementCounter, resetCounter } = result.current;

        expect(counter).toBe(10);
        expect(decrementCounter).toEqual(expect.any(Function));
        expect(incrementCounter).toEqual(expect.any(Function));
        expect(resetCounter).toEqual(expect.any(Function));
    });

    test('Should create the counter with a value of 100', () => {
        const { result } = renderHook(() => useCounter(100)); 
        const { counter } = result.current;

        expect(counter).toBe(100);
    });

    test('Should increment the counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { incrementCounter } = result.current;

        act(() => {
            incrementCounter();
            incrementCounter(2);
        });

        expect(result.current.counter).toBe(103);
    });

    test('Should decrement the counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrementCounter } = result.current;

        act(() => {
            decrementCounter();
            decrementCounter(2);
        });

        expect(result.current.counter).toBe(97);
    });

    test('Should reset the counter', () => {
        const { result } = renderHook(() => useCounter());
        const { resetCounter, incrementCounter } = result.current;

        act(() => {
            incrementCounter(10);
            resetCounter();
        });

        expect(result.current.counter).toBe(10);
    });
});