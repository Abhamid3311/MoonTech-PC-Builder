import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';

const Contacts = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-lightBg text-secondary'>
            <div>
                <h1 className='text-center font-bold text-primary text-5xl mb-3'>Contacts Page</h1>
                <p className='text-center text-2xl'>This Page is under development</p>
            </div>
        </div>
    );
};

export default Contacts;

Contacts.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};