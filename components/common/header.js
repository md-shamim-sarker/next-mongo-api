import {AppContext} from '@/contexts/UserContext';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {useContext} from 'react';

const Header = () => {
    const {items, setItems} = useContext(AppContext);
    const router = useRouter();

    const logoutHandler = () => {
        setItems(undefined);
        localStorage.setItem('items', undefined);
        router.push("/");
    };

    return (
        <div className='flex justify-between bg-blue-200 px-2 md:px-3 lg:px-10 py-2 items-center transition-all fixed top-0 w-full'>
            <div>
                <h2 className='text-2xl font-extrabold'>LOGO</h2>
            </div>
            <div className='flex items-center gap-x-3 font-bold'>

                {
                    items &&
                    <>
                        <Link href={"/costs"} className="hover:text-blue-600 transition-all">Cost</Link>
                        <Link href={"/paids"} className="hover:text-blue-600 transition-all">Payment</Link>
                        <Link href={"/reports"} className="hover:text-blue-600 transition-all">Report</Link>
                    </>
                }

                {
                    items && <button onClick={logoutHandler} className='btn btn-sm btn-primary'>Logout</button>
                }
            </div>
        </div>
    );
};

export default Header;