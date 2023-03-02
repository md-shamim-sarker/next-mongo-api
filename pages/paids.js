import {AppContext} from '@/contexts/UserContext';
import axios from 'axios';
import {useRouter} from 'next/router';
import React, {useContext, useState} from 'react';
import ErrorPage from './404';

const Paids = () => {
    const {items, render, setRender} = useContext(AppContext);
    const router = useRouter();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = items.userName === "shahin"
            ? "Engr. Shahin" : items.userName === "shamim"
                ? "Shamim Sarker" : items.userName === "sujon"
                    ? "Sujon Mia" : "Unknown";
        const date = new Date().toString().slice(0, 24);
        const amount = Number(form.amount.value);
        const paids = {user, date, amount};

        axios.post("/api/paids", paids)
            .then((res) => {
                console.log(res);
                form.amount.value = "";
                setRender(!render);
                router.push("/reports");
            })
            .then((err) => console.log(err));
    };

    return (
        <>
            {
                items ?
                    <div className='w-full h-[100vh] flex justify-center items-center transition-all'>
                        <form onSubmit={onSubmitHandler} className="flex flex-col w-11/12 md:w-1/5 gap-y-3 bg-blue-700 bg-opacity-40 p-5 rounded-xl">
                            <h2 className='text-3xl font-bold text-center'>Paid Form</h2>
                            <input type="number" name="amount" className='px-2 py-1 rounded-md font-bold' placeholder='amount' />
                            <input type="submit" value="Submit" className='btn btn-primary btn-sm' />
                        </form>
                    </div>
                    :
                    <ErrorPage></ErrorPage>
            }
        </>
    );
};

export default Paids;