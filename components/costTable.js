import React from 'react';

const CostTable = ({index, cost}) => {
    const {date, productName, price} = cost;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{date.slice(4, 15)}</td>
            <td>{productName}</td>
            <td>{price}</td>
        </tr>
    );
};

export default CostTable;