import {AppContext} from '@/contexts/UserContext';
import React, {useContext} from 'react';
import ErrorPage from './404';

const Paids = () => {
    const {items} = useContext(AppContext);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = "Shamim Sarker";
        const date = new Date().toString().slice(0, 24);
        const amount = form.amount.value;
        console.log({userName, date, amount});
    };

    return (
        <>
            {
                items ?
                    <div className='w-full h-[90vh] flex justify-center items-center transition-all'>
                        <form onSubmit={onSubmitHandler} className="flex flex-col w-11/12 md:w-1/5 gap-y-3 bg-blue-300 p-5 rounded-xl">
                            <h2 className='text-3xl font-bold text-center'>Paid Form</h2>
                            <input type="text" name="amount" className='px-2 py-1 rounded-md font-bold' />
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