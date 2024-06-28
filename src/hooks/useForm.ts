import { ChangeEvent, useState } from "react";

interface InitialValue {
    [key: string]: string;
}

export const useForm = (initialValue: InitialValue) => {
    const [formState, setFormState] = useState(initialValue);
    
    const onChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
    };

    const onResetForm = () => {
      setFormState({ ...initialValue });
    }
    
    return {
        formState,
        onChangeInput,
        onResetForm
    };
}