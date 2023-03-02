import {AppContext} from '@/contexts/UserContext';
import React, {useContext} from 'react';

const Login = () => {
    const {setItems} = useContext(AppContext);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const password = form.password.value;
        const credential = {userName, password};

        if(userName === "shamim" || userName === "shahin" || userName === "sujon") {
            if(password === "123456") {
                setItems(credential);
                localStorage.setItem('items', JSON.stringify(credential));
            }
        }
    };

    return (
        <div className='w-full h-[90vh] flex justify-center items-center transition-all'>
            <form onSubmit={onSubmitHandler} className="flex flex-col w-11/12 md:w-1/5 gap-y-3 bg-blue-300 p-5 rounded-xl">
                <h2 className='text-3xl font-bold text-center'>Login Form</h2>
                <input type="text" name="userName" className='px-2 py-1 rounded-md font-bold' placeholder='username' />
                <input type="password" name="password" className='px-2 py-1 rounded-md font-bold' placeholder='password' />
                <input type="submit" value="Login" className='btn btn-primary btn-sm' />
            </form>
        </div>
    );
};

export default Login;