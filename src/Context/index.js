import { createContext, useContext, useState } from "react";

const initialState = {
    adesivos: [],
    counter: 0,
    obs: "",
};

const myContext = createContext();

export const Context = ({ children }) => {
    const [formData, setFormData] = useState(initialState);

    const submitData = (adesivos, counter, obs) => {
        if (adesivos && counter) {
            setFormData({
                adesivos,
                counter,
                obs
            })
        }
    }

    const removeData = () => {
        setFormData([]);
    }

    return (
        <myContext.Provider value={{
            submitData, formData, removeData
        }}>
            {children}
        </myContext.Provider>
    )
}

export const useMyContext = () => {
    const { formData, submitData, removeData } = useContext(myContext);

    return { formData, submitData, removeData };
};
