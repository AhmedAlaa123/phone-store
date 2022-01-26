import React from 'react'
import { ProductConsumer } from '../../Context/Context'
import { Title } from '../Title/Title';
import CardColumns from './CardColumns'
import CartList from './CartList';
import CartTotal from './CartTotal';
import EmptyCart from './EmptyCart'
export default function Cart() {
    return (
        <section className='py-5 '>
            <ProductConsumer>
                {
                    (value) => {

                        if (value.cart.length) {
                            return (
                                <>
                                    <Title name='your' title='cart' />
                                    <CardColumns />
                                    <CartList value={value} />
                                    <CartTotal value={value}/>
                                </>
                            );
                        }
                        else {
                            return < EmptyCart />
                }

                    }
                }
            </ProductConsumer>
        </section>
    );
}
