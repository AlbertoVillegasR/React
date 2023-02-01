import { createContext, useState } from "react";


// interface Modal {
//     iconFA: string;
//     title: string;
//     body: any;
//     footer?: any;
//     on: boolean;
//     setOff?: any;
//     onClick?: any;
// }

export const context = createContext(null);

export const DataContext = ({ children }) => {
    const [propsModal, setPropsModal] = useState({
        iconFA: "fa fa-check",
        title: "",
        body: <></>,
        footer: <></>,
        on: false,
    });
    return <context.Provider value={{ propsModal, setPropsModal }}>{children}</context.Provider>
}
