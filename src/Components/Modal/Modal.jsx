import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductConsumer } from '../../Context/Context'
import { ButtonContainer } from '../Button'
const Modal = () => {
    return (


        <ProductConsumer>
            {({ modalOpen, closeModal, productModal }) => {
                return (
                    modalOpen && <ModalContainer>
                        <div className='col-8 col-md-6 col-lg-4 '>

                            <div id='modal-card' className='text-center text-capitalize p-4'>
                                <h3>item added to cart</h3>
                                <div className='col-9 mx-auto'><img src={productModal.img} className='img-fluid' alt='product' /></div>
                                <h4 >{productModal.title}</h4>
                                <h5 className='text-muted'>price : $ {productModal.price}</h5>

                                <ButtonContainer className='me-2 mb-2' onClick={()=>closeModal()}>
                                    continue on shopping
                                </ButtonContainer>
                               
                                <Link to='/cart'>
                                    <ButtonContainer cart onClick={()=>closeModal()}>
                                        go to cart
                                    </ButtonContainer>
                                </Link>
                            </div>
                        </div>

                    </ModalContainer>
                );
            }}
        </ProductConsumer>

    )
}

const ModalContainer = styled.div`
position: fixed;
top:0;
left: 0;
right: 0;
bottom: 0;
z-index: 1000;
background-color:rgba(0,0,0,0.4);
display: flex;
justify-content: center;
align-items: center;

#modal-card{
    background-color:var(--mainWhite);
    border-radius: 5px;
   
}
`;

export default Modal;