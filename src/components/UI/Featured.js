import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProdcts = ({ products }) => {

    return (
        <div className='bg-lightBg text-secondary'>
            <div className='text-center pt-10'>
                <h1 className='text-2xl lg:text-4xl font-bold text-primary'>Featured Products</h1>
                <h3 className='text-sm lg:text-base' >Check & Get Your Desired Product!</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 max-w-7xl mx-auto py-10 px-5 lg:px-0'>
                {
                    products?.map(product => <ProductCard key={product?.id} product={product} />).slice(0,6)
                }

            </div>


        </div>
    );
};

export default FeaturedProdcts;


