import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import './Navbar.css';
export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
               <Link to='/'>
                  <img src={logo} alt="store" className="navbar-brand" />
               </Link> 
               <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                       Products
                    </Link>
                 </li>
               </ul>
               <Link to="/" className="mg-l mg-l2">
                  <ButtonContainer>
                      Home
                  </ButtonContainer>
               </Link>
               <Link to="/about" className="mg-l">
                  <ButtonContainer>
                      About
                  </ButtonContainer>
               </Link>
               <Link to="/contact" className="mg-l">
                  <ButtonContainer>
                      Contact
                  </ButtonContainer>
               </Link>

               <Link to="/cart" className="ml-auto">
                  <ButtonContainer>
                      <i className="fas fa-cart-plus">my cart</i>
                  </ButtonContainer>
               </Link>
               <Link to="/login" className="">
                  <ButtonContainer>
                     Login
                  </ButtonContainer>
               </Link>
               <Link to="/signup" className="">
                  <ButtonContainer>
                     SignUp
                  </ButtonContainer>
               </Link>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3 rem;
    text-transform:capitalize;
}
`;
