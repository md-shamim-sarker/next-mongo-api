import React from 'react';

const PaymentTable = ({index, paid}) => {
    const {date, user, amount} = paid;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{date.slice(4, 15)}</td>
            <td>{user}</td>
            <td>{amount}</td>
        </tr>
    );
};

export default PaymentTable;