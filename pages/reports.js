import {AppContext} from '@/contexts/UserContext';
import React, {useContext} from 'react';
import ErrorPage from './404';

const Reports = () => {
    const {items} = useContext(AppContext);

    return (
        <>
            {
                items ?
                    <div className='w-full h-[90vh] flex justify-center items-center transition-all'>
                        <form className="flex flex-col w-11/12 md:w-1/5 gap-y-3 bg-blue-300 p-5 pb-8 rounded-xl">
                            <h2 className='text-3xl font-bold text-center'>Report Card</h2>
                            <div className='border-t'></div>

                            <label htmlFor="totalPaid" className='text-2xl font-bold text-center'>Total Paid</label>
                            <input type="text" readOnly id="totalPaid" className='px-2 py-1 rounded-md font-bold text-center' value={200} />

                            <label htmlFor="totalCost" className='text-2xl font-bold text-center'>Total Cost</label>
                            <input type="text" readOnly id="totalCost" className='px-2 py-1 rounded-md font-bold text-center' value={100} />

                            <label htmlFor="balance" className='text-2xl font-bold text-center'>Balance</label>
                            <input type="text" readOnly id="balance" className='px-2 py-1 rounded-md font-bold text-center' value={200} />

                            <div className='border-t'></div>
                            <button className='btn btn-primary btn-sm'>Cost Details</button>
                            <button className='btn btn-primary btn-sm'>Payment Details</button>
                        </form>
                    </div>
                    :
                    <ErrorPage></ErrorPage>
            }
        </>
    );
};

export default Reports;