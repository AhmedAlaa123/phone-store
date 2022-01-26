import React from 'react'
import { ProductConsumer } from '../../Context/Context'
import { Link } from 'react-router-dom'
import {ButtonContainer} from '../Button'
export default function Details() {
    return (
        <ProductConsumer>
            {
                ({detailProductItem,addToCart}) => {
                    const{id,title,company,info,price,inCart,img}=detailProductItem
                   return printDetail(id,title,company,info,price,inCart,img,addToCart)
                }
        }
        </ProductConsumer>
    )
}
const printDetail=(id, title, company, info, price, inCart,img,addToCart) => {
    
    return (
        <div className='container py-5  text-capitalize'>
            {/* Title */}
            <div className='text-center  text-blue m-4'>
                <h2 className='h1'>{ title}</h2>
            </div>
            <div className='row '>
                {/* Image */}
                <div className='col-10 col-md-6 mb-4  mx-auto'>
                    <img className='img-fluid' src={img} alt={title} />
                </div>
                {/* info */}
                <div className='col-10 col-md-6 mb-4  mx-auto  '>
                    <h2> model : {title}</h2>
                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>made by : <span>{ company}</span></h4>
                    <h4 className='text-blue'>
                        <strong>
                        price : <span>$</span>{price}
                        </strong>
                    </h4>
                    <p className='text-capitalize fw-bold mt-3 mb-0'>
                        more info about product :
                    </p>
                    <p className='text-muted lead'>{info}</p>
                    {/* buttons*/}
                    <Link to='/'><ButtonContainer>back to products</ButtonContainer></Link>
                    <ButtonContainer className='ms-2' cart onClick={()=>addToCart(id)} disabled={inCart}>
                        {
                            inCart?'in cart':'add to cart'
                    }
                    </ButtonContainer>
                </div>
            </div>
        </div>
    )
}
