import { ChangeEvent } from 'react';
import { act, renderHook } from '@testing-library/react';
import { test, expect, describe } from 'vitest';
import { useForm } from '../../src/hooks';

describe('useForm test', () => {
    const initialForm = {
        name: ''
    }

    test('Should return default values', () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            formState: initialForm,
            onChangeInput: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });

    test('Should change the name field', () => {
        const newValue = 'Fran';
        const { result } = renderHook(() => useForm(initialForm));
        const { onChangeInput } = result.current;

        act(() => {
            onChangeInput(({ target: { name: 'name', value: newValue } } as ChangeEvent<HTMLInputElement>));
        });

        expect(result.current.formState.name).toBe(newValue);
    });

    test('Should reset name field', () => {
        const newValue = 'Fran';
        const { result } = renderHook(() => useForm(initialForm));
        const { onChangeInput, onResetForm } = result.current;

        act(() => {
            onChangeInput(({ target: { name: 'name', value: newValue } } as ChangeEvent<HTMLInputElement>));
            onResetForm();
        });

        expect(result.current.formState.name).toBe(initialForm.name);
    });
});