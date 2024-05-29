import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLinks = styled.ul<{ isMenuOpen: boolean }>`
  list-style: none;
  padding: 0;
  display: ${({ isMenuOpen }:{ isMenuOpen:boolean }) => (isMenuOpen ? 'flex' : 'none')};
  flex-direction: row; 
  
  @media(min-width: 768px) {
    display: flex;
    flex-direction: row; 
  }
`;

export const NavLink = styled.li`
  margin: 10px 0;

  @media(min-width: 768px) {
    margin: 0 10px;
  }

  a {
    color: var(--text-color);
    text-decoration: none;

    &:hover {
      color: var(--highlight-color);
    }
  }
`;
