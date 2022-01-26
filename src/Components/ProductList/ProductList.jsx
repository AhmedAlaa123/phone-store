import React from 'react'
import Product from '../Product/Product'
import {ProductConsumer} from '../../Context/Context'
import { Title } from '../Title/Title'
// import {storeProducts} from '../../database/data'
export default function ProductList() {
    
    return (
        <div className='py-5'>
            <div className='container'>
                <Title name='our' title='products' />
                <div className='row'>
                    <ProductConsumer>
                        {
                            ({ products ,addToCart,handelDetail}) => {
                                return products.map(product => {
                                    return <Product key={product.id} productData={product} addToCart={addToCart} handelDetail={handelDetail}/>
                                })
                            }
                    }
                    </ProductConsumer>
                </div>
            </div>
           
        </div>
    )
}
