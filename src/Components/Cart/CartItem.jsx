import React from 'react';
import styled from 'styled-components'
export default function CartItem({ item, value }) {
    const { id, title, img, price, count, total } = item
    const { increment, decrement, removeItem, clearCart } = value;
    return (
        <div className='row text-center text-capitalize mb-4'>

            <div className='col-10 col-lg-2 mx-auto mb-1'>
                <img src={img} alt='product' className='img-fluid my-2' style={{width:'10rem',height:'10rem'}}/>
            </div>
            <div className='col-10 col-lg-2 mx-auto'>
            <span className='d-lg-none '>product : </span>{title}
                
            </div>
            <div className='col-10 col-lg-2 mx-auto my-1'>
            <span className='d-lg-none '>price : </span> &#36;{price}
            </div>
            <div className='col-10 col-lg-2 mx-auto my-1'>
                <div className='d-flex justify-content-center'>
                    <span className='btn btn-black ' onClick={()=>decrement(id)}>-</span>
                    <span className='btn btn-black mx-1'>{count} </span>
                    <span className='btn btn-black ' onClick={()=>increment(id)}>+</span>
                </div>
            </div>
            <RemoveButton className='col-10 col-lg-2 mx-auto my-1' onClick={()=>removeItem(id)}>
                <i className='fa fa-trash-alt'></i>
            </RemoveButton>
            <div className='col-10 col-lg-2 mx-auto my-1'>
            <strong className='d-lg-none '>total price : </strong> &#36;{total}
            </div>

        </div>
    );
}

const RemoveButton = styled.div`
color: var(--mainYellow);
cursor: pointer;
font-size: 1.6rem;
`;