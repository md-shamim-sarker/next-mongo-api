import PaymentTable from '@/components/paymentTable';
import {AppContext} from '@/contexts/UserContext';
import React, {useContext} from 'react';

const PaymentDetails = () => {
    const {paids} = useContext(AppContext);

    return (
        <div className='h-[100vh]'>
            <h2 className='text-3xl font-bold text-center py-6 pt-16'>Payment History</h2>
            <table className="table table-zebra w-1/2 mx-auto">
                {/* head */}
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Date</th>
                        <th>Entry By</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paids.map((paid, index) => <PaymentTable
                            key={paid._id}
                            index={index}
                            paid={paid}
                        ></PaymentTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PaymentDetails;