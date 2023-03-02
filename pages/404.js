import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
    return (
        <div className='transition-all w-full h-[100vh] flex justify-center items-center flex-col gap-y-5'>
            <h2 className='text-3xl font-bold'>404 | Page Not Found</h2>
            <p className='text-xl font-semibold'>Back to <Link href={"/"} className="text-blue-800 hover:underline">Start</Link> Page</p>
        </div>
    );
};

export default ErrorPage;