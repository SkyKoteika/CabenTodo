import { useState, useEffect } from "react";

const useLocalStorage = (intialValue: any | null, key: string) => {
    const getValue = () => {
        const storage = localStorage.getItem(key);

        if(storage) {
            return JSON.parse(storage);
        }

        return intialValue;
    };

    const [value, setValue] = useState(getValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    },[value,key]);
    
    return [value, setValue];
}

export {useLocalStorage};