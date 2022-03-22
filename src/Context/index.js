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
    console.log('formData', formData);

    return (
        <myContext.Provider value={{
            submitData, formData
        }}>
            {children}
        </myContext.Provider>
    )
}

export const useMyContext = () => {
    const { formData, submitData } = useContext(myContext);

    return { formData, submitData };
};
