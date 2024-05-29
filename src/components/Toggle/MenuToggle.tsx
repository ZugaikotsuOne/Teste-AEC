import React from 'react';
import { MenuButton } from './MenuToggle.styled'; 
import Menu from '../../assets/menu.svg'

interface MenuToggleProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ toggleMenu, isMenuOpen }) => {
  return (
    <MenuButton onClick={toggleMenu} isMenuOpen={isMenuOpen}>
      <img src={Menu}/>
    </MenuButton>
  );
};

export default MenuToggle;