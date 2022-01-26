import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
export default function Product({ productData, addToCart, handelDetail }) {
    return (
        <ProductWrapper className='col-9 col-md-4 col-lg-3 mb-4 mx-auto'>
            <div className='card  '>
                <div className='img-container p-5' onClick={()=>handelDetail(productData.id)}>
                    <Link to='/details' >
                        <img src={productData.img} alt={productData.title} className='card-img-top' />
                    </Link>
                    <button className='btn-cart' disabled={productData.inCart} onClick={()=>addToCart(productData.id)}>
                        {
                            productData.inCart ? <p className='text-capitalize mb-0'>in cart</p> : <i className='fas fa-cart-plus'></i>
                        }
                    </button>
                </div>
                <div className='card-footer d-flex justify-content-between'>
                    <p>{productData.title}</p><h5 className='mb-0 fst-italic text-blue'><span className='me-1'>$</span>{ productData.price}</h5>
                </div>
            </div>
        </ProductWrapper>
    )
}
const ProductWrapper = styled.div`
    .card{
        border-color: transparent;
        transition: all 1s linear;
    }
    .card-footer{
        background-color: transparent;
        border: transparent;
        transition: all 1s linear;

    }
    &:hover{
        .card{
            border:0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.2);
        }
        .btn-cart{
            transform: translate(0,0);
        }
        .card-footer{
            background: rgb(247,247,247);
        }
    }

    .img-container{
        position:relative;
        overflow: hidden;
    }
    .card-img-top{
        transition: all 1s linear;
    }
    .img-container:hover {
        .card-img-top{
            transform: scale(1.2);
        }
    }
    .btn-cart{
        position: absolute;
        right: 0;
        bottom: 0;
        transform: translate(100%,100%);
        background-color:var(--lightBlue);
        color: var(--mainWhite);
        border: 0;
        padding: 0.2rem 0.4rem;
        border-top-left-radius: 0.3rem;
        transition: all 1s linear;

    }
`