import {createContext, useEffect, useState} from "react";

export const AppContext = createContext();

const UserContext = ({children}) => {
    const [items, setItems] = useState(undefined);

    useEffect(() => {
        try {
            const items = JSON.parse(localStorage.getItem('items'));
            if(items) {
                setItems(items);
            }
        } catch(error) {
            console.log(error);
        }
    }, []);

    const value = {items, setItems};

    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    );
};

export default UserContext;