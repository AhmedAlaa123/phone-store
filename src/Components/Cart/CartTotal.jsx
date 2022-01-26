import React from 'react';
import {Link} from 'react-router-dom'
import PayPalButton from './PayPalButton';
export default function CartTotal({ value }) {
    const{clearCart,cartSubTotal,cartTax,cartTotal}=value
    return <div className='container py-4'>
        <div className='row'>
            <div className='col-10 col-sm-8 mt-2 ms-auto  text-capitalize text-end'>
                <Link to='/'>
                <button type='button' className='btn btn-outline-danger text-uppercase px-5 mb-3' onClick={()=>clearCart()}>clear cart</button>
                </Link>
                <h5><span className='text-title'>subtotal</span> : ${ cartSubTotal}</h5>
                <h5><span className='text-title'>text</span> : ${ cartTax}</h5>
                <h5><span className='text-title'>total</span> : ${cartTotal}</h5>
                <PayPalButton clearCart={clearCart} total={ cartTotal}/>
            </div>
        </div>
    </div>;
}
