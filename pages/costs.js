import {AppContext} from '@/contexts/UserContext';
import axios from 'axios';
import React, {useContext} from 'react';
import ErrorPage from './404';

const Costs = () => {
    const {items, render, setRender} = useContext(AppContext);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = "Shamim Sarker";
        const date = new Date().toString().slice(0, 24);
        const productName = form.productName.value;
        const price = Number(form.price.value);
        const costs = {user, date, productName, price};

        axios.post("/api/costs", costs)
            .then((res) => {
                console.log(res);
                form.productName.value = "";
                form.price.value = "";
                setRender(!render);
            })
            .then((err) => console.log(err));
    };

    return (
        <>
            {
                items ?
                    <div className='w-full h-[100vh] flex justify-center items-center transition-all'>
                        <form onSubmit={onSubmitHandler} className="flex flex-col w-11/12 md:w-1/5 gap-y-3 bg-blue-700 bg-opacity-40 p-5 rounded-xl">
                            <h2 className='text-3xl font-bold text-center'>Cost Form</h2>
                            <input type="text" name="productName" className='px-2 py-1 rounded-md font-bold' placeholder='product name' />
                            <input type="number" name="price" className='px-2 py-1 rounded-md font-bold' placeholder='price' />
                            <input type="submit" value="Submit" className='btn btn-primary btn-sm' />
                        </form>
                    </div>
                    :
                    <ErrorPage></ErrorPage>
            }
        </>
    );
};

export default Costs;