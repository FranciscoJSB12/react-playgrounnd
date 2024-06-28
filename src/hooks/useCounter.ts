import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
    const [counter, setCounter] = useState(initialValue);

    const incrementCounter = (value: number = 1): void => {
        setCounter(counter + value);
    }

    const decrementCounter = (value: number = 1): void => {
        if (counter === 0) return;
        setCounter(counter - value);
    }

    const resetCounter = (): void => {
        setCounter(initialValue);
    }

    return {
        counter,
        incrementCounter,
        decrementCounter,
        resetCounter
    };
}