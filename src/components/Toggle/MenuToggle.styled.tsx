import styled from '@emotion/styled';

export const MenuButton = styled.button<{ isMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: none;
  border: none;
  cursor: pointer;
`;

