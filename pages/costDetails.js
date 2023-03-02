import CostTable from '@/components/costTable';
import {AppContext} from '@/contexts/UserContext';
import React, {useContext} from 'react';

const CostDetails = () => {
    const {costs} = useContext(AppContext);

    return (
        <div className='h-[100vh]'>
            <h2 className='text-3xl font-bold text-center py-6 pt-16'>Cost History</h2>
            <table className="table table-zebra w-1/2 mx-auto">
                {/* head */}
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Date</th>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        costs.map((cost, index) => <CostTable
                            key={cost._id}
                            index={index}
                            cost={cost}
                        ></CostTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default CostDetails;
