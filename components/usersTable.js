import React from 'react';

const UsersTable = ({index, user, router, onDelete}) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <button onClick={() => {
                    router.push({
                        pathname: "/userUpdateForm",
                        query: {
                            _id: user._id,
                            name: user.name,
                            email: user.email,
                            password: user.password,
                        }
                    });
                }} className='btn btn-primary btn-sm'>Update</button>
            </td>
            <td>
                <button onClick={() => onDelete(user._id)} className='btn btn-error btn-sm text-white'>Delete</button>
            </td>
        </tr>
    );
};

export default UsersTable;