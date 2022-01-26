import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import {ButtonContainer} from '../Button'
import styled from 'styled-components'
export default function NavBar() {
  return (
    <MainNav className='navbar navbar-expand-sm  navbar-dark px-5'>
      <Link to='/'><img src={logo} alt='store' className='navbar-brand' /></Link>
      <ul className='navbar-nav align-items-center'>
        <li className='nav-item ms-5'>
          <Link className='nav-link' to='/'>Products</Link>
        </li>
      </ul>
      <Link className='ms-auto' to='/cart'>
        <ButtonContainer ><span className='me-2'><i className='fas fa-cart-plus'></i></span>My Cart</ButtonContainer>
      </Link>
    </MainNav>
  )
}
const MainNav = styled.nav`
  background-color: var(--mainBlue);
  .nav-link{
    color: var(--mainWhite)!important;
    text-transform: capitalize;
    font-size: 1.23rem;
  }
`
