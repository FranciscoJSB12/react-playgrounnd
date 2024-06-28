import { useEffect, useState } from "react";

interface State {
    data: any,
    isLoading: boolean,
    hasError: boolean,
    error: null | { code?: number, message: string },
}

export const useFetch = (url: string) => {
    const [state, setState] = useState<State>({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false, 
            error: null,
        });
    }

    const getFetch = async () => {
        try {
            setLoadingState();

            const response = await fetch(url);

            // await new Promise(resolve => setTimeout(resolve, 2000));

            if (!response.ok) {
                setState({
                    data: null,
                    isLoading: false,
                    hasError: true,
                    error: {
                        code: response.status,
                        message: response.statusText
                    }
                });
    
                return;
            }
    
            const data = await response.json();

            setState({
                data: data,
                isLoading: false,
                hasError: false,
                error: null,
            });

        } catch (err: any) {
            setState({
                data: null,
                isLoading: false,
                hasError: true, 
                error: {
                    message: err.message
                }
            });
        }
    }

    useEffect(() => {
        getFetch();
    }, [url]);

    return { ...state }
}