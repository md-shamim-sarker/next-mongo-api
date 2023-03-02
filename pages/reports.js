import {AppContext} from '@/contexts/UserContext';
import Link from 'next/link';
import React, {useContext} from 'react';
import ErrorPage from './404';

const Reports = () => {
    const {items, costs, paids} = useContext(AppContext);

    const totalCosts = costs.reduce((prev, curr) => prev + Number(curr.price), 0);
    const totalPaids = paids.reduce((prev, curr) => prev + Number(curr.amount), 0);
    const balance = totalPaids - totalCosts;

    return (
        <>
            {
                items ?
                    <div className='w-full h-[100vh] flex justify-center items-center transition-all'>
                        <form className="flex flex-col w-11/12 md:w-1/5 gap-y-3 bg-blue-700 bg-opacity-40 p-5 pb-8 rounded-xl">
                            <h2 className='text-3xl font-bold text-center'>Report Card</h2>
                            <div className='border-t'></div>

                            <label htmlFor="totalPaid" className='text-2xl font-bold text-center'>Total Paid</label>
                            <input type="text" readOnly id="totalPaid" className='px-2 py-1 rounded-md font-bold text-center' value={totalPaids} />

                            <label htmlFor="totalCost" className='text-2xl font-bold text-center'>Total Cost</label>
                            <input type="text" readOnly id="totalCost" className='px-2 py-1 rounded-md font-bold text-center' value={totalCosts} />

                            <label htmlFor="balance" className='text-2xl font-bold text-center'>Balance</label>
                            <input type="text" readOnly id="balance" className={balance <= 0 ? `px-2 py-1 rounded-md font-bold text-center bg-red-400` : `px-2 py-1 rounded-md font-bold text-center`} value={balance} />

                            {
                                balance <= 0 &&
                                <Link href={"/paids"} className='btn btn-primary btn-sm'>Pay Now</Link>
                            }

                            <div className='border-t'></div>
                            <Link href={"/costDetails"} className='btn btn-primary btn-sm'>Cost History</Link>
                            <Link href={"/paymentDetails"} className='btn btn-primary btn-sm'>Payment History</Link>
                        </form>
                    </div>
                    :
                    <ErrorPage></ErrorPage>
            }
        </>
    );
};

export default Reports;