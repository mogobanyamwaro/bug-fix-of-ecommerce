import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";

function Navbar() {
    return (
        <Nav className ='navbar navbar-expand-sm navbar-dark px-sm-5 '>
            <Link to ='/'>
                <img src={logo} className ="navbar-brand" alt="" />
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to ="/" className='nav-link'>
                        products
                    </Link>
                </li>
            </ul>
            <Link className="ml-auto" to ='/cart'>
                <ButtonContainer>
                    <span className="mr-2">
                        <i className="fas fa-cart-plus"></i>
                    </span>my cart
                </ButtonContainer>
            </Link>

        </Nav>
    )
}

export default Navbar
const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;