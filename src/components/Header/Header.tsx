import React, { useState } from 'react';
import MenuToggle from '../Toggle/MenuToggle'; 
import { HeaderContainer, Title, Nav, NavLinks, NavLink } from './Header.styled'; 
import Logo from '../../assets/logo.svg'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Title><img src={Logo}/></Title>
      <Nav>
        <NavLinks isMenuOpen={isMenuOpen}>
          <NavLink><a href="#home">Home</a></NavLink>
          <NavLink><a href="#services">Services</a></NavLink>
          <NavLink><a href="#partner">Partner</a></NavLink>
          <NavLink><a href="#contact">Contact Us</a></NavLink>
        </NavLinks>
        <MenuToggle toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      </Nav>
    </HeaderContainer>
  );
};

export default Header;