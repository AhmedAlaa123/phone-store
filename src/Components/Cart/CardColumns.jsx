import React from 'react';

export default function CardColumns() {
    return (<div className='text-center text-uppercase d-none d-lg-block mt-4 mb-3 container'>
        <div className='row '>
            <div className='col-2'>products</div>
            <div className='col-2'>name of product</div>
            <div className='col-2'>price</div>
            <div className='col-2'>quantity</div>
            <div className='col-2'>remove</div>
            <div className='col-2'>total</div>
        </div>
    </div>);
}
