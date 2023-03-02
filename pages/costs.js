import {AppContext} from '@/contexts/UserContext';
import React, {useContext} from 'react';
import ErrorPage from './404';

const Costs = () => {
    const {items} = useContext(AppContext);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = "Shamim Sarker";
        const date = new Date().toString().slice(0, 24);
        const productName = form.productName.value;
        const price = form.price.value;
        console.log({userName, date, productName, price});
    };

    return (
        <>
            {
                items ?
                    <div className='w-full h-[90vh] flex justify-center items-center transition-all'>
                        <form onSubmit={onSubmitHandler} className="flex flex-col w-11/12 md:w-1/5 gap-y-3 bg-blue-300 p-5 rounded-xl">
                            <h2 className='text-3xl font-bold text-center'>Cost Form</h2>
                            <input type="text" name="productName" className='px-2 py-1 rounded-md font-bold' />
                            <input type="text" name="price" className='px-2 py-1 rounded-md font-bold' />
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