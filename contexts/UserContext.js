import axios from "axios";
import {createContext, useEffect, useState} from "react";

export const AppContext = createContext();

const UserContext = ({children}) => {
    const [items, setItems] = useState(undefined);
    const [costs, setCosts] = useState([]);
    const [paids, setPaids] = useState([]);
    const [render, setRender] = useState(true);

    useEffect(() => {
        try {
            const items = JSON.parse(localStorage.getItem('items'));
            if(items) {
                setItems(items);
            }
        } catch(error) {
            console.log(error.message);
        }

        try {
            axios.get("/api/costs")
                .then(data => {
                    setCosts(data.data);
                })
                .then(err => console.log(err));
        } catch(error) {
            console.log(error);
        }

        try {
            axios.get("/api/paids")
                .then(data => setPaids(data.data))
                .then(err => console.log(err));
        } catch(error) {
            console.log(error);
        }

    }, [render]);

    const value = {items, setItems, costs, setCosts, paids, setPaids, render, setRender};

    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    );
};

export default UserContext;