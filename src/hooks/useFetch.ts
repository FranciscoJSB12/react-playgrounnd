import { useEffect, useState } from "react";

interface State {
    data: any,
    isLoading: boolean,
    hasError: boolean,
    error: null | { code?: number, message: string },
}

const localCache: { [key: string] : string } = {};

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
            if (localCache[url]) {
                setState({
                    data: localCache[url],
                    isLoading: false,
                    hasError: false,
                    error: null,
                });
                return;
            }

            setLoadingState();

            const response = await fetch(url);

            await new Promise(resolve => setTimeout(resolve, 2000));

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

            localCache[url] = data;

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